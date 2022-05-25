import { all, call, fork } from "redux-saga/effects";
import carsSaga from "./containers/Home/saga";
// import adminClassroomSaga from 'containers/AdminContainers/Classroom/saga';

// import assignmentSaga from 'containers/AssignmentTeacher/saga';
// import studentdashboardSaga from 'containers/DashboardStudent/saga';
// import libraryStudentSaga from 'containers/LibraryStudent/saga';

// import homeworkSaga from 'containers/HomeworkTeacher/saga';
// import assignmentStudentSaga from 'containers/AssignmentStudent/saga';
// import homeworkStudentSaga from 'containers/HomeworkStudent/saga';
// import newsSaga from 'containers/ArticleTeacher/saga';
// import conceptsTeacherSaga from 'components/stateful/Concepts/EditAndAdd/saga';
// import teacherDashboardSaga from 'containers/DashboardTeacher/saga';
// import classroomTeacherSaga from 'containers/ClassroomTeacher/saga';
// import classroomStudentSaga from 'containers/ClassroomStudent/saga';
// import articlesSaga from 'components/stateful/StoriesList/saga';
// import eduTubeSaga from 'components/stateful/EduTube/saga';
// import ebookSaga from 'components/stateful/Ebooks/saga';

// import podcastsSaga from 'components/stateful/Podcasts/saga';
// import questionsSaga from 'components/stateful/Questions/saga';
// import storiesSaga from 'containers/Stories/saga';
// import ArticleCheckerSaga from 'containers/AdminContainers/ArticleChecker/saga';
// import adminStoriesSaga from 'containers/AdminContainers/Stories/saga';
// import picturesSaga from 'components/stateful/Concept/saga';
// import sudokuSaga from 'containers/Playground/Sudoku/saga';
// import adminAuthSaga from './containers/AdminContainers/AdminAuth/saga';
// import globalSaga from './containers/App/saga';

function* rootSaga() {
  // const sagas = [globalSaga];
  const sagas = [
    carsSaga,
    // adminLoginSaga,
    // adminClassroomSaga,
    // assignmentSaga,
    // studentdashboardSaga,
    // homeworkSaga,
    // teacherDashboardSaga,
    // classroomTeacherSaga,
    // classroomStudentSaga,
    // articlesSaga,
    // eduTubeSaga,
    // questionsSaga,
    // storiesSaga,
    // newsSaga,
    // podcastsSaga,
    // conceptsTeacherSaga,
    // assignmentStudentSaga,
    // homeworkStudentSaga,
    // ArticleCheckerSaga,
    // adminStoriesSaga,
    // picturesSaga,
    // adminAuthSaga,
    // libraryStudentSaga,
    // sudokuSaga,
    // ebookSaga,
  ];

  yield all(
    sagas.map((saga) =>
      fork(function* everySaga() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            // eslint-disable-next-line no-console
            console.error("Error at rootSagas", e);
          }
        }
      })
    )
  );
}

export default rootSaga;
