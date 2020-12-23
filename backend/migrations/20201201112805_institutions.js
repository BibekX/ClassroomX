
exports.up = function (knex) {
    return knex.schema.createTable('institutions', (table) => {
        table.increments("id").primary().unsigned();
        table.string("name");
        table.string("picture");
        table.text("overview");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('institutions');
};

