const express = require("express");
const { testControllers } = require("../../controllers/testcontrollers");

const testRouter = express.Router();

testRouter.get("/test/orders", testControllers);

module.exports = { testRouter };
