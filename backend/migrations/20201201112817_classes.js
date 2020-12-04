

exports.up = function (knex) {
    return knex.schema.createTable('classes', (table) => {
        table.increments("id").primary().unsigned();
        table.string("name");
        table.text("overview");
        table.timestamps(false, true);
        table.integer("coursesID").unsigned().references("id").inTable("courses");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('classes');
};
