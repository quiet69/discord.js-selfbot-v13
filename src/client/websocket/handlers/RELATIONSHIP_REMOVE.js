'use strict';

const { Events } = require('../../../util/Constants');

module.exports = (client, { d: data }) => {
	client.relationships.cache.delete(data.id);
	/**
	 * Emitted whenever a relationship is updated.
	 * @event Client#relationshipUpdate
	 * @param {UserID} user The userID that was updated
	 */
	client.emit(Events.RELATIONSHIP_REMOVE, data.id);
};