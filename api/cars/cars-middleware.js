const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

async function checkCarId(req, res, next) {
  // DO YOUR MAGIC
  try {
    const car = await Cars.getById(req.params.id)
    if (!car) {
      return res.status(404).json({ message: `car with id ${req.params.id} is not found` })
    }
    req.car = car
    next()
  } catch (err) {
    next(err)
  }
}


const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin, make, model, mileage } = req.body
  if (!vin) return res.status(400)
    .json({ message: 'vin is missing' })
  if (!make) return res.status(400)
    .json({ message: 'make is missing' })
  if (!model) return res.status(400)
    .json({ message: 'model is missing' })
  if (!mileage) return res.status(400)
    .json({ message: 'mileage is missing' })
  next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const { vin } = req.body;
  if (!vinValidator.validate(vin)) {
    return res.status(400)
      .json({ message: `vin ${vin} is invalid` })
  }
  next()
}

async function checkVinNumberUnique(req, res, next) {
  // DO YOUR MAGIC
  try {
    const existingCar = await Cars.getAll().where('vin', req.body.vin).first();
    if (existingCar) {
      return res.status(400).json({ message: `vin ${req.body.vin} already exists` });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
