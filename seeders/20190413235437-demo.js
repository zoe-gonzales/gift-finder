'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity. */

    return queryInterface.bulkInsert('Ideas', [
      {
        gift_name: 'Headphones',
        category: 'Tech',
        isHomemade: false,
        price: 40.00
      },
      {
        gift_name: 'Camelbak',
        category: 'Outdoors',
        isHomemade: false,
        price: 70.00
      },
      {
        gift_name: 'Crema Coffee Subscription',
        category: 'Food & Dining',
        isHomemade: false,
        price: 50.00
      },
      {
        gift_name: 'Handmade scarf',
        category: 'Fashion',
        isHomemade: true,
        price: 25.00
      }
  ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ideas', null, {});
  }
};
