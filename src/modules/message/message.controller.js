import { messageModel } from "../../../database/models/message.model.js"
import { catchAsyncError } from "../../utils/catchAsyncError.js";
const addMessage = catchAsyncError(async (req, res, next) => {
   const { message, receivedId } = req.body;
   const messages = await messageModel.insertMany({ message, receivedId })
   res.json({ message: "Messages : ", messages })
})
const getUserMassages = catchAsyncError(async (req, res, next) => {
   const messages = await messageModel.find({ receivedId: req.userId })
   res.json({ message: "Messages : ", messages })

})
const getAllUsersMessages =catchAsyncError( async (req, res, next) => {
   const messages = await messageModel.find({})
   res.json({ message: "Messages : ", messages })
})

export {
   addMessage, getUserMassages, getAllUsersMessages
}