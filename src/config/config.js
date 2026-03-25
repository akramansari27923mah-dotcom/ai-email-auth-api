import 'dotenv/config';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined in enviroment veriables')
}

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in enviroment veriables')
}


// mongo uri
const config = {
    MONGO_URI: process.env.MONGO_URI
}

export default config

// for hase password
export const passwordHash = async (data) => {

    const hased = await bcrypt.hash(data, 10)
    return hased

}

// for generate token
export const generateToken = (userId) => {

    const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
    return token
}

// cookie options
export const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
}