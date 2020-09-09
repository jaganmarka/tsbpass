'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('applicants', 'aadhaar', {
        type: Sequelize.BIGINT,
      });
      await queryInterface.addColumn('applicants', 'city', {
        type: Sequelize.STRING,
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('applicants', 'aadhaar');
      await queryInterface.removeColumn('applicants', 'city');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};
