'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn(
			'organizations', // name of Source model
			'publicUrl', // name of the key we're adding
			Sequelize.STRING
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn(
			'organizations', // name of Source model
			'publicUrl' // key we want to remove
		);
	}
};
