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
        price: '21-50'
      },
      {
        gift_name: 'Camelbak',
        category: 'Outdoors',
        isHomemade: false,
        price: '51-100'
      },
      {
        gift_name: 'Coffee Subscription',
        category: 'Food & Dining',
        isHomemade: false,
        price: '51-100'
      },
      {
        gift_name: 'Handmade scarf',
        category: 'Fashion',
        isHomemade: true,
        price: '21-50'
      },
      {
        gift_name: 'FitBit',
        category: 'Health & Fitness',
        isHomemade: false,
        price: '51-100'
      },
      {
        gift_name: 'Band t-shirt',
        category: 'Music',
        isHomemade: false,
        price: '21-50'
      },
      {
        gift_name: 'Painting class',
        category: 'Art',
        isHomemade: false,
        price: '21-50'
      },
      {
        gift_name: 'Dog sweater',
        category: 'Pets',
        isHomemade: false,
        price: '21-50'
      },
      {
        gift_name: 'Duffel bag',
        category: 'Travel',
        isHomemade: false,
        price: '51-100'
      },
      {
        gift_name: 'Netflix Subscription for 6 months',
        category: 'TV',
        isHomemade: false,
        price: '51-100'
      },
      {
        gift_name: 'Face mask',
        category: 'Beauty & Skincare',
        isHomemade: false,
        price: '0-20'
      }
  ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ideas', null, {});
  }
};
