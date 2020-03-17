'use strict';
module.exports = (sequelize, DataTypes) => {
	const updateLinks = sequelize.define('updateLinks', {
		updateId: DataTypes.INTEGER,
		cachedUrlId: DataTypes.INTEGER
	}, {});
	updateLinks.associate = function (models) {
		// associations can be defined here
		updateLinks.belongsTo(models.cachedUrls, {foreignKey: "cachedUrlId", targetKey: "id"});
		updateLinks.belongsTo(models.updates, {foreignKey: "updateId", targetKey: "id"});
	};
	return updateLinks;
};
