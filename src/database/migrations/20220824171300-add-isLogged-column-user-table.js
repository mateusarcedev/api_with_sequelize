'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users', // nome da tabela
      'islogged', // coluna que eu quero adicionar
      {
        type: Sequelize.BOOLEAN
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'users', // nome da tabela
      'isLogged'
    );
  }
};
