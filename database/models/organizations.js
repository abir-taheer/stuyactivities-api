'use strict';
module.exports = (sequelize, DataTypes) => {
	const organizations = sequelize.define('organizations', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		active: DataTypes.BOOLEAN,
		publicUrl: DataTypes.STRING
	}, {});
	organizations.associate = function (models) {
		// associations can be defined here
		organizations.hasMany(models.orgUpdates, {foreignKey: "orgId"});
	};
	return organizations;
};
