import express from 'express'
import { addMessage,getUserMassages,getAllUsersMessages } from './message.controller.js'
import { auth } from '../../middleware/authentication.js'
const messageRouter =express.Router()
// best pracits that names of endpoints is messages or users or tasks for examples
messageRouter.post('/addMessage',addMessage)
messageRouter.get('/getUserMassages',auth,getUserMassages)
messageRouter.get('/getAllUsersMessages',getAllUsersMessages)
export default messageRouter
// '/messages'