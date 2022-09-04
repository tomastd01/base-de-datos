/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('messages').del()
  await knex('messages').insert([
    {email: 'tomy@gmail.com', message: 'Hola hola hola chau', date: '23/8/2022 20:27:42'},
  ]);
};
