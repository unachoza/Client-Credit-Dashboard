import {
	FETCH_NEXT_SUBSET_OF_REPORTS,
	FETCH_REPORTS,
	ARCHIVE_REPORT
} from "./constants";

/*Action Types*/

export const fetchReports = {
	type: FETCH_REPORTS,
	payload: "fetching reports from API"
};

export const fetchNextSubsetOfReports = {
	type: FETCH_NEXT_SUBSET_OF_REPORTS,
	payload: "loading more reports from API"
};

export const archiveReport = {
	type: ARCHIVE_REPORT,
	payload: "changes value of archived from false to true on individual report"
};

// /*Action Creators*/

// export const fetchReport = reports => {
// 	return { type: FETCH_REPORTS, reports };
// };

// //offset as an imput because I that is what I am going to increatment the count by, but i'm still returning reports, and that is why I didn't include it in the return

// export const fetchNextSubsetOfReports = offset => {
// 	return { type: FETCH_NEXT_SUBSET_OF_REPORTS, offset };
// };

// export const archiveReport = report => {
// 	return { type: ARCHIVE_REPORT, report };
// };
