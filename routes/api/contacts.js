const express = require("express");

const contactsController = require("../../controllers/contacts-controllers");

const router = express.Router();

const { schemas } = require("../../models/contact");

const { validateBody, isValidId, authenticate } = require("../../decorators");

router.get("/", authenticate, contactsController.getAllContacts);

router.get(
  "/:contactId",
  authenticate,
  isValidId,
  contactsController.getContactById
);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  contactsController.addContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidId,
  contactsController.deleteContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateContact
);

module.exports = router;
