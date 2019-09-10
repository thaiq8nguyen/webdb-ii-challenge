const cuid = require("cuid");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: cuid(),
          make: "Toyota",
          model: "Corolla",
          mileage: 5000,
          transmission_type: "automatic",
          title_status: "clean"
        },
        {
          vin: cuid(),
          make: "Ford",
          model: "Explore",
          mileage: 1457,
          transmission_type: "automatic",
          title_status: "clean"
        },
        {
          vin: cuid(),
          make: "GMC",
          model: "Denali",
          mileage: 12000,
          transmission_type: "automatic",
          title_status: "salvage"
        },
        {
          vin: cuid(),
          make: "Nissan",
          model: "Maxima",
          mileage: 25,
          transmission_type: "automatic",
          title_status: "clean"
        },
        {
          vin: cuid(),
          make: "Honda",
          model: "Civic",
          mileage: 4782,
          transmission_type: "manual",
          title_status: "clean"
        }
      ]);
    });
};
