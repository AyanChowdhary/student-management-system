import { createSelector } from "reselect";
import { groupSelector } from "./app.selectors";

export const groupQuerySelector = createSelector(
	[groupSelector],
	(groupState) => {
		return groupState.query;
	}
);

export const groupCollectionSelector = createSelector(
	[groupSelector],
	(groupState) => {
		return groupState.groupCollections;
	}
);

const groupsByIdSelector = createSelector(
	[groupSelector],
	(groupState) => groupState.byId
);

export const groupsByQuerySelector = createSelector(
	[groupQuerySelector, groupsByIdSelector, groupCollectionSelector],
	(query, groupCollection, queryCollection) => {
		const currentGroupIds = queryCollection[query] || [];
		const currentGroup = currentGroupIds.map(
			(groupId) => groupCollection[groupId]
		);
		return currentGroup;
	}
);

export const currentSelectedGroupIdSelector = createSelector(
	[groupSelector],
	(groupState) => groupState.currentSelectedGroupId
);

export const currentSelectedGroupSelector = createSelector(
	[currentSelectedGroupIdSelector, groupsByIdSelector],
	(id, byId) => {
		return id !== undefined ? byId[id] : undefined;
	}
);

export const groupNextIdSelector = createSelector(
	[groupSelector],
	(groupState) => {
		return groupState.nextGroupId;
	}
);

export const groupPrevIdSelector = createSelector(
	[groupSelector],
	(groupState) => {
		return groupState.prevGroupId;
	}
);

export const groupQueryLoadingSelector = createSelector(
	[groupSelector],
	(groupState) => {
		return groupState.loading;
	}
);
