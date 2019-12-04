import { FETCH_REPORTS, FETCH_NEXT_SUBSET_OF_REPORTS, ARCHIVE_REPORT } from '../actions'

const initialState = {
  reports: []
}

export const fetchReports = (state=initialState, action={}) => {
  switch (action.type) {
    case FETCH_REPORTS:
      return {...state, reports: action.payload }
    default: 
      return state
    }
  }


  export const fetchNextSubesetOfReports = (state, action={}) => {
    switch (action.type) {
      case FETCH_NEXT_SUBSET_OF_REPORTS:
        return {...state, reports: action.payload }
      default: 
        return state
      }
    }

    export const archiveReport = (state, action={}) => {
      switch (action.type) {
        case ARCHIVE_REPORT:
          return {...state, report: action.payload }
        default: 
          return state
        }
    }
      


