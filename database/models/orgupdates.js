'use strict';
module.exports = (sequelize, DataTypes) => {
	const updates = sequelize.define('updates', {
		title: DataTypes.STRING,
		content: DataTypes.TEXT,
		approved: DataTypes.BOOLEAN,
		pinned: DataTypes.BOOLEAN
	}, {});
	updates.associate = function (models) {
		// associations can be defined here
		updates.belongsTo(models.organizations, {foreignKey: "orgId", targetKey: "id"});
		updates.hasMany(models.updatePics, {foreignKey: "updateId", as: "pics"});
		updates.belongsToMany(models.cachedUrls, {
			through: models.updateLinks,
			foreignKey: "updateId",
			as: "links"
		});
	};
	return updates;
};
