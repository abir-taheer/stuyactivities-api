'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('cachedUrls', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			originalUrl: {
				type: Sequelize.TEXT
			},
			url: {
				type: Sequelize.TEXT
			},
			title: {
				type: Sequelize.TEXT
			},
			description: {
				type: Sequelize.TEXT
			},
			image: {
				type: Sequelize.TEXT
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('cachedUrls');
	}
};
