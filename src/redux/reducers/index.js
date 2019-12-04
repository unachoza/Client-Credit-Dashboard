import {combineReducers} from 'redux';
import {fetchReports, fetchNextSubesetOfReports, archiveReport} from './reducers'


export default combineReducers({
  fetchReports,
  fetchNextSubesetOfReports, 
  archiveReport
});