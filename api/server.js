const express = require("express")

const server = express()

const carsRouter = require('./cars/cars-router')

// DO YOUR MAGIC
server.use(express.json())

server.use('/api/cars', carsRouter)

server.get("*", (req, res, next) => {
    next({ status: 404, message: "not found" })
})

server.use((error, req, res, next) => { //eslint-disable-line
    res.status(error.status || 500).json({
        message: error.message,
    });
});

module.exports = server
