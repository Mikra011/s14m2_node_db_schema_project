// STRETCH
const cars = [
    {
        vin: '1234567890123',
        make: 'ford',
        model: 'escort',
        milage: 123000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1234567890124',
        make: 'opel',
        model: 'corsa',
        milage: 167000,
    },
    {
        vin: '1234567890125',
        make: 'mercedes',
        model: 'elegance',
        milage: 117000,
        title: 'clean',
        transmission: 'automatic',
    },
]

// exports.seed = function (knex) {
//     return knex('cars')
//         .truncate()
//         .then(() => {
//             return knex('cars').insert(cars)
//         })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}