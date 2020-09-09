'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nocs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  nocs.init({
    applicant_id: DataTypes.INTEGER,
    arc_consultant_type: DataTypes.STRING,
    arc_license: DataTypes.STRING,
    arc_name: DataTypes.STRING,
    arc_address: DataTypes.TEXT,
    arc_mobile: DataTypes.STRING,
    arc_email: DataTypes.STRING,
    struct_consultant_type: DataTypes.STRING,
    struct_name: DataTypes.STRING,
    struct_address: DataTypes.TEXT,
    validity: DataTypes.STRING,
    clct_consultant_type: DataTypes.STRING,
    clct_name: DataTypes.STRING,
    clct_address: DataTypes.TEXT,
    clct_mobile: DataTypes.STRING,
    clct_email: DataTypes.STRING,
    plot_no: DataTypes.STRING,
    plot_street: DataTypes.STRING,
    plot_colony: DataTypes.STRING,
    plot_village: DataTypes.STRING,
    plot_mandal: DataTypes.STRING,
    plot_municipality: DataTypes.STRING,
    plot_district: DataTypes.STRING,
    plot_survey_no: DataTypes.STRING,
    land_use_from: DataTypes.STRING,
    land_use_to: DataTypes.STRING,
    site_abutting: DataTypes.STRING,
    nature_of_road: DataTypes.STRING,
    extent: DataTypes.STRING,
    line_of_activity: DataTypes.TEXT,
    remarks_existin: DataTypes.TEXT,
    remarks_on_development: DataTypes.TEXT,
    project_brief: DataTypes.TEXT,
    master_plan: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'nocs',
  });
  return nocs;
};