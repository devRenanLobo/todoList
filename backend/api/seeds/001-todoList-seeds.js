/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todoList').truncate();
  await knex('todoList').insert([
    {
      message: "Passear com o cachorro",
      data: "03/01/2000"
  },
  {
      message: "Comprar remédio",
      data: "03/01/2000"
  },
  {
      message: "Estudar para a prova",
      data: "03/01/2000"
  },
  {
      message: "Fazer a janta",
      data: "03/01/2000"
  }
  ]);
};
