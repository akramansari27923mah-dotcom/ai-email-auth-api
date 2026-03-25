import userModel from "../models/user.model.js";
import { generateToken, passwordHash } from "../config/config.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(401).json({
            success: false,
            message: 'All feildes are required'
        })
    }

    const isAlreadyRegisterd = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isAlreadyRegisterd) {
        return res.status(409).json({
            success: false,
            message: 'User already exist'
        })
    }

    try {
        const passwordHashed = await passwordHash(password)

        const user = await userModel.create({
            username,
            email,
            password: passwordHashed
        })


        const token = generateToken(user._id)

        res.cookie('token', token)

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: {
                username: user.username,
                email: user.email,
                id: user._id
            },
            token
        })
    }
    catch (err) {
        console.log('internal error', err);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

const getMe = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;

    if (!token) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }

    const id = req.userId

    const user = await userModel.findById(id)

    res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        user: {
            username: user.username,
            email: user.email,
            userId: user._id
        }
    })
}

const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(401).json({
            success: false,
            message: 'All feilds are required'
        })
    }

    try {
        const user = await userModel.findOne({
            email
        })

        if (!user) {
            res.status(401).json({
                success: false,
                message: 'Invalid email'
            })
        }

        const isPassword = await bcrypt.compare(password, user.password)

        if (!isPassword) {
            res.status(401).json({
                success: false,
                message: 'Invalid pasword'
            })
        }

        const token = generateToken(user._id)

        res.cookie('token', token)

        res.status(200).json({
            success: true,
            message: 'User loggdin successfully',
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
            token
        })

    }
    catch (err) {
        console.log('Login faileds', err)
        res.status(500).json({
            success: false,
            message: 'Internel server error',
        })
    }
}

const logout = async (req, res) => {

    const token = req.cookies?.token

    if (!token) {
        res.status(404).json({
            success: false,
            message: 'Unauthorized'
        })
    }

    res.clearCookie('token')

    res.status(200).json({
        success: true,
        message: 'User loggdin successfully'
    })
}


export default { register, login, logout, getMe }