import mongoose from "mongoose"
import { Schema, model } from "mongoose"
const userSchema = new Schema({
    name: {
        type: String,
        minLength: [3, 'The name must be at least 3 characters long'],
        required: true
    },
    email: {
        type: String
        , unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: [3, 'too short password'],
        // password which stored in database is hashed so is too long
        // maxlength: [30, 'too long password'],
        required: true
    },
    cPassword: { type: String }
    , age: {
        type: Number,
        min: [10],
        max: [100]
    },
    verified:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:true
    }
    //utc (international time )
},{timestamps:true}
)
export const userModel = mongoose.model('user', userSchema)
