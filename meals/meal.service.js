const db = require("_helpers/db");

module.exports = {
  getAll,
  getByName,
  create,
  delete: _delete,
};

async function getAll() {
  return await db.Meal.findAll();
}

async function getByName(name) {
  return await getMeal(name);
}

async function create({ title, calorieën }) {
  // validate
  if (await db.Meal.findOne({ where: { title: title } })) {
    throw 'Meal "' + title + '" already exists.';
  }

  // save meal
  await db.Meal.create({ title, calorieën });
}

async function _delete(title) {
  const meal = await getMeal(title);
  await meal.destroy();
}

// helper functions

async function getMeal(name) {
  const meal = await db.Meal.findOne({ where: { title: name } });
  if (!meal) throw "Meal not found";
  return meal;
}
