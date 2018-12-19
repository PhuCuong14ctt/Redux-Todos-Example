// @flow

import { VisibilityFilters } from "../actions";

type ActionType = {
  type: string,
  filter: string
};

const visibilityFilter = (
  state: string = VisibilityFilters.SHOW_ALL,
  action: ActionType
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
