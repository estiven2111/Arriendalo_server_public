const {Router} = require("express")

const {SendWhatsappMiddleware} = require("../../../middlewares")

const messenger = Router()

messenger.get("/whatsapp", SendWhatsappMiddleware)

module.exports = messenger