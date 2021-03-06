const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validate-request");
const authorize = require("_middleware/authorize");
const mealService = require("./meal.service");

// routes
router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
// router.put('/:id', authorize(), updateSchema, update);
router.delete("/:title", _delete);

module.exports = router;

function getAll(req, res, next) {
  mealService
    .getAll()
    .then((meals) => res.json(meals))
    .catch(next);
}

function getById(req, res, next) {
  mealService
    .getById(req.params.id)
    .then((meal) => res.json(meal))
    .catch(next);
}

function create(req, res, next) {
  mealService
    .create(req.body)
    .then(() => res.json({ message: "Successfully created meal." }))
    .catch(next);
}

function _delete(req, res, next) {
  mealService
    .delete(req.params.title)
    .then(() => res.json({ message: "Meal deleted successfully" }))
    .catch(next);
}
