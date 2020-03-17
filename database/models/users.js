'use strict';
module.exports = (sequelize, DataTypes) => {
	const users = sequelize.define('users', {
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		gradYear: DataTypes.STRING,
		isFaculty: DataTypes.BOOLEAN,
		active: DataTypes.BOOLEAN
	}, {});
	users.associate = function (models) {
		// associations can be defined here
		users.hasMany(models.oAuthIds, {foreignKey: "userId"});
		users.hasOne(models.admins, {foreignKey: "userId"});
	};
	return users;
};
