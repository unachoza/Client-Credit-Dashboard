import {
	FETCH_REPORTS,
	FETCH_NEXT_SUBSET_OF_REPORTS,
	ARCHIVE_REPORT
} from "../constants";

const initialState = {
	reports: []
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case FETCH_REPORTS:
			return { ...state, reports: action.payload };
		case FETCH_NEXT_SUBSET_OF_REPORTS:
			return { ...state, reports: action.payload };
		case ARCHIVE_REPORT:
			return { ...state, report: action.payload };
		default:
			return state;
	}
};
