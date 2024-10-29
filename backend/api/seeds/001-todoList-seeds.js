/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todoList').truncate();
  await knex('todoList').insert([
    {
      message: "Passear com o cachorro"
  },
  {
      message: "Comprar remédio"
  },
  {
      message: "Estudar para a prova"
  },
  {
      message: "Fazer a janta"
  }
  ]);
};
