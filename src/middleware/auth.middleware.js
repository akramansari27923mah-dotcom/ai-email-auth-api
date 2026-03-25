import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {

    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
       return res.status(401).json({
            success: false,
            message: 'Unauthorized'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.id

        next()
    }
    catch (err) {
        console.log('middleware error', err);
        res.status(500).json({
            success: false,
            message: 'Invalid token'
        })
    }

}

export default authMiddleware