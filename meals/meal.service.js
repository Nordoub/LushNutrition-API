const db = require("_helpers/db");

module.exports = {
  getAll,
  getById,
  delete: _delete,
};

async function getAll() {
  return await db.Meal.findAll();
}

async function getById(id) {
  return await getMeal(id);
}

async function _delete(id) {
  const meal = await getMeal(id);
  await meal.destroy();
}

// helper functions

async function getMeal(id) {
  const meal = await db.Meal.findByPk(id);
  if (!meal) throw "Meal not found";
  return meal;
}
