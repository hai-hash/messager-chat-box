import express from "express"
import chatbotController from "../controllers/chatbotController";

let router = express.Router();

let initWebRoutes = (app) =>{
    router.get("/",chatbotController.getHomePage);
    router.get("/webhooks", chatbotController.getWebhook);
    router.post("/webhooks", chatbotController.postWebhook);
    return app.use("/", router);
}

module.exports = initWebRoutes;