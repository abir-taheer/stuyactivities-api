'use strict';
module.exports = (sequelize, DataTypes) => {
	const oAuthIds = sequelize.define('oAuthIds', {
		provider: DataTypes.STRING,
		authId: DataTypes.STRING,
		userId: DataTypes.INTEGER
	}, {});
	oAuthIds.associate = function (models) {
		// associations can be defined here
		oAuthIds.belongsTo(models.users, {foreignKey: "userId", targetKey: "id"});

	};
	return oAuthIds;
};
