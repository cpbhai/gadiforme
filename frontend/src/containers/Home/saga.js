import { put, takeLatest, select, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import { fetchGet } from "../../utilis/fetchUtilis";

import { fetchCars, updateAppData } from "./slice";

export function* fetchCarsSaga(action) {
  const store = yield select();
  const {
    payload: { query },
  } = action;
  let uri = `https://gadiforme-api.herokuapp.com/api/v1//general/available-cars`;
  if (query) {
    uri += `?${query}`;
  }
  // const {
  //   data: { article },
  // } = yield call(fetchGet, uri);
  const responseData = yield call(fetchGet, uri);
  console.log("d", responseData.data);
  const cars = responseData.data;
  console.log(responseData, "response");
  yield put(
    updateAppData({
      cars,
    })
  );

  //   const store = yield select();
  //   const {
  //     global: { token },
  //   } = store;
  //   const {
  //     payload: { page, rowsPerPage, query },
  //   } = action;
  //   let uri = `${process.env.LIBRARY_API_URL}/v1/newsArticles?`;
  //   if (query) {
  //     uri += `${query}&`;
  //   }
  //   uri += `limit=${rowsPerPage}&offset=${page * rowsPerPage}`;
  //   const responseData = yield call(fetchGet, uri, token);
  //   const {
  //     data: { newsArticles, totalNewsArticles },
  //   } = responseData;
  //   yield put(
  //     updateAppData({
  //       newsArticles,
  //       totalNewsArticles,
  //     })
  //   );
}
export function* fetchArticleIdSaga(action) {
  const store = yield select();

  const { payload } = action;
  console.log("j", payload);
  const uri = `/api/articles/${payload}`;
  // const {
  //   data: { article },
  // } = yield call(fetchGet, uri);
  const responseData = yield call(fetchGet, uri);
  console.log("d", responseData.data);
  const article = responseData.data;
  const statusCode = responseData.statusCode;

  yield put(
    updateAppData({
      article,
    })
  );
  yield put(push("/cars"));
}
export function* clearNewsArticleSaga() {
  yield put(updateAppData({ article: "" }));
}
// export function* fetchNewsArticleIdSaga(action) {
//   const store = yield select();

//   const uri = `localhost:3000/api/articles`;
//   // const {
//   //   data: { article },
//   // } = yield call(fetchGet, uri);
//   const {
//     data: { articles },
//   } = yield call(fetchGet, uri);
//   console.log(articles);
//   yield put(
//     updateAppData({
//       articles,
//     })
//   );
// }

export default function* watchAuth() {
  yield takeLatest(fetchCars.type, fetchCarsSaga);
}
