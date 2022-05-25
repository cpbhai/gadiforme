import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import carsReducer from "./containers/Home/slice";
// import studentreducer from 'containers/DashboardStudent/slice';
// import libraryStudentreducer from 'containers/LibraryStudent/slice';

// import homeworkReducer from 'containers/HomeworkTeacher/slice';
// import newsReducer from 'containers/ArticleTeacher/slice';
// import teacherReducer from 'containers/DashboardTeacher/slice';
// import classroomteacherReducer from 'containers/ClassroomTeacher/slice';
// import classroomadminReducer from 'containers/AdminContainers/Classroom/slice';

// import classroomstudentReducer from 'containers/ClassroomStudent/slice';
// import conceptsTeacherReducer from 'components/stateful/Concepts/EditAndAdd/slice';
// import articlesReducer from 'components/stateful/StoriesList/slice';
// import eduTubeReducer from 'components/stateful/EduTube/slice';
// import ebookReducer from 'components/stateful/Ebooks/slice';

// import podcastsReducer from 'components/stateful/Podcasts/slice';
// import questionsReducer from 'components/stateful/Questions/slice';
// import homeworkStudentReducer from 'containers/HomeworkStudent/slice';
// import assignmentStudentReducer from 'containers/AssignmentStudent/slice';
// import articleCheckerReducer from 'containers/AdminContainers/ArticleChecker/slice';
// import sudokuReducer from 'containers/Playground/Sudoku/slice';
// import storiesReducer from 'containers/Stories/slice';
// import adminStoriesReducer from 'containers/AdminContainers/Stories/slice';
// import picturesReducer from 'components/stateful/Concept/slice';
// import globalReducer from 'containers/App/slice';
// import adminAuthReducer from 'containers/AdminContainers/AdminAuth/slice';
// import libraryFiltersReducer from 'components/stateful/LibraryFilter/slice';
// // import simulationReducer from 'containers/LibraryStudent/slice';
// import libraryReducer from 'components/stateful/Library/slice';
import history from "./utilis/history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  cars: carsReducer,

  // global: globalReducer,
});

export default rootReducer;
