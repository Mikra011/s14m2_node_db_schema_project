exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', table => {
    table.increments()
    table.string('vin', 17).notNullable().unique()
    table.string('make', 100).notNullable()
    table.string('model', 100).notNullable()
    table.integer('mileage').unsigned().notNullable()
    table.string('title', 100)
    table.string('transmission', 100)
})
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};
