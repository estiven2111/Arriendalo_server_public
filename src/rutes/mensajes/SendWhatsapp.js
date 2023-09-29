const {Router} = require("express")

const {SendWhatsappMiddleware,SendCorreoMiddleware} = require("../../middlewares")

const messenger = Router()

messenger.get("/whatsapp", SendWhatsappMiddleware)
messenger.post("/email",SendCorreoMiddleware)

module.exports = messenger