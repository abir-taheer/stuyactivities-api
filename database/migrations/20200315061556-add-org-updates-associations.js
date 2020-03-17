'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn(
			'updates', // name of Source model
			'orgId', // name of the key we're adding
			{
				type: Sequelize.INTEGER,
				references: {
					model: 'organizations', // name of Target model
					key: 'id', // key in Target model that we're referencing
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn(
			'updates', // name of Source model
			'orgId' // key we want to remove
		);
	}
};
