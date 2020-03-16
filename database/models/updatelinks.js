'use strict';
module.exports = (sequelize, DataTypes) => {
	const updateLinks = sequelize.define('updateLinks', {
		updateId: DataTypes.INTEGER,
		urlCacheId: DataTypes.INTEGER
	}, {});
	updateLinks.associate = function (models) {
		// associations can be defined here
		updateLinks.belongsTo(models.urlMetaCache, {foreignKey: "urlCacheId", targetKey: "id"});
		updateLinks.belongsTo(models.orgUpdates, {foreignKey: "updateId", targetKey: "id"});
	};
	return updateLinks;
};
