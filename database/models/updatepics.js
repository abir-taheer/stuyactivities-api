'use strict';
module.exports = (sequelize, DataTypes) => {
	const updatePics = sequelize.define('updatePics', {
		updateId: DataTypes.INTEGER,
		fileName: DataTypes.STRING
	}, {});
	updatePics.associate = function (models) {
		// associations can be defined here
		updatePics.belongsTo(models.orgUpdates, {foreignKey: "updateId", targetKey: "id"});
	};
	return updatePics;
};
