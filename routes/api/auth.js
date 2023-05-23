const express = require("express");
const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/auth");

const { validateBody, isValidId } = require("../../decorators");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;
