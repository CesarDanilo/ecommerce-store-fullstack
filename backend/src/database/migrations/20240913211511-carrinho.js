'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carrinho', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      usuario_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users', // Nome da tabela de usuários
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      produto_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Produto', // Nome da tabela de produtos
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precoUnitario: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      subtotal: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('carrinho');
  }
};
