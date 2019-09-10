const router = require("express").Router();
const {
  addCar,
  getAllCar,
  getCar,
  updateCar,
  deleteCar
} = require("./carModel");

router.post("/", async (req, res) => {
  try {
    const car = await addCar(req.body);
    res.status(201).json({ car });
  } catch (errors) {
    res.status(500).json({ message: "Unable to add car" });
  }
});

router.get("/", async (req, res) => {
  try {
    const cars = await getAllCar(req.query);

    res.json({ cars });
  } catch (errors) {
    res.status(500).json({ message: "Unable to retrieve all cars" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await getCar(req.params.id);

    res.json({ car });
  } catch (errors) {
    res.status(500).json({ message: "Unable to retrieve car" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const car = await updateCar(req.params.id, req.body);

    res.json({ car });
  } catch (errors) {
    if (errors.errno === 19) {
      res.status(500).json({
        message: "Unable to update account because the VIN is already existed"
      });
    }
    res.status(500).json({ message: "Unable to update car" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const car = await deleteCar(req.params.id);
    res.json({ car });
  } catch (errors) {
    console.log(errors);
    res.status(500).json({ message: "Unable to delete the car" });
  }
});
module.exports = router;
