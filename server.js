import app from "./src/app.js";
import 'dotenv/config'
import connectDB from "./src/config/db.js";

const port = process.env.PORT


// db and server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`server is running on port http://localhost:${port}`);
    })
})