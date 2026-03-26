import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import authRouter from './routers/auth.routes.js'
import promptRouter from './routers/prompt.routes.js'

// crate extense of server
const app = express();

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors({
    origin: 'https://ai-email-generater.vercel.app',
    credentials: true
}))

// prefix
app.use('/api/auth', authRouter)
app.use('/api/prompt', promptRouter)

app.get('/test', (req, res) => {
    res.send('api is working')
})

export default app