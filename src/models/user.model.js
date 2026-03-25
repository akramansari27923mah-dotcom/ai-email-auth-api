import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'username unique is required'],
        required: [true, 'username is required']
    },
    email: {
        type: String,
        unique: [true, 'email unique is required'],
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('user', userSchema);

export default userModel