'use strict';
module.exports = (sequelize, DataTypes) => {
  const oAuthIds = sequelize.define('oAuthIds', {
    provider: DataTypes.STRING,
    authId: DataTypes.STRING
  }, {});
  oAuthIds.associate = function(models) {
    // associations can be defined here
  };
  return oAuthIds;
};