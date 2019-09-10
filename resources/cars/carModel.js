const db = require("../../db/dbConfig");

const addCar = car => {
  return db("cars")
    .insert(car)
    .then(ids => {
      return getCar(ids[0]);
    });
};
const getAllCar = query => {
  return db("cars")
    .select()
    .limit(query.limit ? query.limit : 100000)
    .orderBy(query.sortby ? query.sortby : "id", query.sortdir)
    .then(cars => cars);
};
const getCar = id => {
  return db("cars")
    .where({ id: id })
    .select()
    .then(car => car);
};

const updateCar = (id, car) => {
  return db("cars")
    .where({ id: id })
    .update(car)
    .then(car => car);
};

const deleteCar = id => {
  return db("cars")
    .where({ id: id })
    .del()
    .then(car => car);
};

module.exports = {
  addCar,
  getAllCar,
  getCar,
  updateCar,
  deleteCar
};
