// DO YOUR MAGIC
const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
    res.json('ok')
})

router.get('/:id', async (req, res, next) => {
    res.json(`get by ${req.params.id} ok`)
})

router.post('/', async (req, res, next) => {
    res.json('post new car')
})

module.exports = router