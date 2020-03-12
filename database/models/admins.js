'use strict';
module.exports = (sequelize, DataTypes) => {
	const admins = sequelize.define('admins', {
		role: DataTypes.STRING,
		userId: DataTypes.INTEGER
	}, {});
	admins.associate = function (models) {
		// associations can be defined here
		admins.belongsTo(models.users, {foreignKey: "userId", targetKey: "id"});
	};
	return admins;
};
