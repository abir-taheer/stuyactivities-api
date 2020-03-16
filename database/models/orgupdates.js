'use strict';
module.exports = (sequelize, DataTypes) => {
	const orgUpdates = sequelize.define('orgUpdates', {
		title: DataTypes.STRING,
		content: DataTypes.TEXT,
		approved: DataTypes.BOOLEAN,
		pinned: DataTypes.BOOLEAN
	}, {});
	orgUpdates.associate = function (models) {
		// associations can be defined here
		orgUpdates.belongsTo(models.organizations, {foreignKey: "orgId", targetKey: "id"});
		orgUpdates.hasMany(models.updatePics, {foreignKey: "updateId"});
	};
	return orgUpdates;
};
