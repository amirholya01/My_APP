const {HomeController} = require("../../controllers/api/home.controller");
const router = require("express").Router();

router.get("/", HomeController.indexPage);

module.exports = {
    IndexRoutes : router
}