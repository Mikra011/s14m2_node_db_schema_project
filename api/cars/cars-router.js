// DO YOUR MAGIC
const express = require('express')
const Cars = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberUnique,
    checkVinNumberValid
} = require('./cars-middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(next)
})

router.get('/:id', checkCarId, (req, res, next) => {
    Cars.getById(req.params.id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(next)
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
        const newCar = await Cars.create(req.body);
        res.status(201).json(newCar);
    } catch (err) {
        next(err);
    }
})

module.exports = router