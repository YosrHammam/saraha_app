import mongoose from "mongoose";
import { Schema, model, SchemaTypes } from "mongoose";
const messageSchema = new Schema({
    message: {
        type: String, required: true
    },
    // sended to
    receivedId: {
        type: SchemaTypes.ObjectId,
        ref: 'user'
    }
}
//iso string ,utc 
    , { timestamps:true })
export const messageModel = mongoose.model('message', messageSchema)