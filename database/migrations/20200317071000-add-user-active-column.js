'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn(
			'users', // name of Source model
			'active', // name of the key we're adding
			{
				type: Sequelize.BOOLEAN,
				defaultValue: true
			}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn(
			'users', // name of Source model
			'active' // key we want to remove
		);
	}
};
