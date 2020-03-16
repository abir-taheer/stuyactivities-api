'use strict';
module.exports = (sequelize, DataTypes) => {
	const urlMetaCache = sequelize.define('urlMetaCache', {
		originalUrl: DataTypes.STRING,
		url: DataTypes.STRING,
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		image: DataTypes.STRING
	}, {});
	urlMetaCache.associate = function (models) {
		// associations can be defined here
	};
	return urlMetaCache;
};
