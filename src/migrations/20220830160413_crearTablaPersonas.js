/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("productos", table => {
        table.increments("id").primary().notNullable();
        table.string("nombre", 255).notNullable();
        table.string("descripcion").notNullable();
        table.integer("codigo");
        table.string("imgUrl").notNullable();
        table.integer("price");
        table.integer("stock");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("productos");
};
