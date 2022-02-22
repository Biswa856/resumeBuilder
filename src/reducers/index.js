import{combineReducers}from'redux'
import ContactUpdate from './contactreducer';
import workExpReducer from './workexpReducer';
import educationUpdate from './educationReducer';
import skillsReducer from './skillsReducer';
import summaryUpdate from './summaryReducer';
import finalizeReducer from './finalizeReducer';

const rootreducer = combineReducers({
    ContactUpdate,workExpReducer,educationUpdate,skillsReducer,summaryUpdate,finalizeReducer
})
export default rootreducer;