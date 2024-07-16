const Cars = require('./cars-model')

async function checkCarId(req, res, next) {
  // DO YOUR MAGIC
  const { id } = req.params
  try {
    const car = await Cars.getById(id)
    if (car) {
      req.car = car
      next()
    } else {
      res.status(404).json({
        message: `Car not found`
      })
    }
  } catch (err) {
    next(err)
  }
}


const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}
