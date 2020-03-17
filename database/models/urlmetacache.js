'use strict';
module.exports = (sequelize, DataTypes) => {
	const cachedUrls = sequelize.define('cachedUrls', {
		originalUrl: DataTypes.TEXT,
		url: DataTypes.TEXT,
		title: DataTypes.TEXT,
		description: DataTypes.TEXT,
		image: DataTypes.TEXT
	}, {});
	cachedUrls.associate = function (models) {
		// associations can be defined here
		cachedUrls.belongsToMany(models.updates, {through: models.updateLinks, foreignKey: "cachedUrlId"});
	};
	return cachedUrls;
};
