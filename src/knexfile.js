
const knexConfig = {
    client: "sqlite3",
    connection: {
        filename: "./database.sqlite"
    },
    migrations: {
        tableName: "knex_migrations",
        directory: "./migrations"
    },
    seeds: {
        tableName: "knex_seeds",
        directory: "./seeds"
    },
    useNullAsDefault: true
}

module.exports = knexConfig;

// Crear nueva migracion o seed
// npx knex (migrate|seed):make <nombre>
