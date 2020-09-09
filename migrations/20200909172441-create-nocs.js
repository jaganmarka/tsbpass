'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nocs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      applicant_id: {
        type: Sequelize.INTEGER
      },
      arc_consultant_type: {
        type: Sequelize.STRING
      },
      arc_license: {
        type: Sequelize.STRING
      },
      arc_name: {
        type: Sequelize.STRING
      },
      arc_address: {
        type: Sequelize.TEXT
      },
      arc_mobile: {
        type: Sequelize.STRING
      },
      arc_email: {
        type: Sequelize.STRING
      },
      struct_consultant_type: {
        type: Sequelize.STRING
      },
      struct_name: {
        type: Sequelize.STRING
      },
      struct_address: {
        type: Sequelize.TEXT
      },
      validity: {
        type: Sequelize.STRING
      },
      clct_consultant_type: {
        type: Sequelize.STRING
      },
      clct_name: {
        type: Sequelize.STRING
      },
      clct_address: {
        type: Sequelize.TEXT
      },
      clct_mobile: {
        type: Sequelize.STRING
      },
      clct_email: {
        type: Sequelize.STRING
      },
      plot_no: {
        type: Sequelize.STRING
      },
      plot_street: {
        type: Sequelize.STRING
      },
      plot_colony: {
        type: Sequelize.STRING
      },
      plot_village: {
        type: Sequelize.STRING
      },
      plot_mandal: {
        type: Sequelize.STRING
      },
      plot_municipality: {
        type: Sequelize.STRING
      },
      plot_district: {
        type: Sequelize.STRING
      },
      plot_survey_no: {
        type: Sequelize.STRING
      },
      land_use_from: {
        type: Sequelize.STRING
      },
      land_use_to: {
        type: Sequelize.STRING
      },
      site_abutting: {
        type: Sequelize.STRING
      },
      nature_of_road: {
        type: Sequelize.STRING
      },
      extent: {
        type: Sequelize.STRING
      },
      line_of_activity: {
        type: Sequelize.TEXT
      },
      remarks_existin: {
        type: Sequelize.TEXT
      },
      remarks_on_development: {
        type: Sequelize.TEXT
      },
      project_brief: {
        type: Sequelize.TEXT
      },
      master_plan: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('nocs');
  }
};