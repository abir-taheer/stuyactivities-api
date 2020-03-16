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
		orgUpdates.hasMany(models.updatePics, {foreignKey: "updateId", as: "pics"});
		orgUpdates.belongsToMany(models.urlMetaCache, {through: models.updateLinks, foreignKey: "updateId", as: "links"});
	};
	return orgUpdates;
};
