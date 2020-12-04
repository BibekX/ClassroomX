
exports.up = function (knex) {
    return knex.schema.createTable('institutions', (table) => {
        table.increments("id").primary().unsigned();
        table.string("name").unique();
        table.string("picture");
        table.string("backgroundpicture");
        table.text("overview");
        table.text("announcements");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('institutions');
};

