import {take, takem, call, put} from 'redux-saga/effects'
import { delay } from 'redux-saga'
import R from 'ramda'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import XMLToJson from '../Lib/XMLToJson'

// This style of Saga is a common pattern.  It has a
// worker and a watcher.
//
// The watcher listens for the signal, and the worker
// does the job.

// We use a factory function will close over the scope of
// our watcher saga.  This ensures the API is passed in
// (hurray objects being composed).
export default (api) => {
  // ----------
  // The Worker
  // ----------
  // This is our worker.  It does the job.  In this case, we
  // get the weather for the city.
  function * worker (city) {
    // make the call to the api
    const response = yield call(api.getMusic, city)

    // success?
    if (response.ok) {
      const data = {
        ...XMLToJson(response.data),
        cover: 'http://94.247.179.59/img/1.JPG?r=' + Math.random()
      }
      yield put(Actions.receiveMusicDescription(data))
      yield delay(500)
    } else {
      // yield put(Actions.receiveTemperatureFailure())
    }
  }

  // -----------
  // The Watcher
  // -----------
  // Make a watcher.  It's daemon.  It runs on startup and does
  // a few things:
  //
  // 1.  Goes into a loop to ensure it stays alive.
  // 2.  Listens for MUSIC_DESCRIPTION_REQUEST redux events
  // 3.  Unpacks the action.
  // 4.  Calls the worker (above) to do the job.
  function * watcher () {
    while (true) {
      yield call(worker)
    }
  }

  // Expose both functions.  Now, technically, we're only
  // needing to return the watcher.  If we return both, we
  // gain 2 important properties:
  //
  // 1.  We can test the worker directly without need to
  // mock the watcher taking.
  //
  // 2.  We can call the worker from other sagas which is
  // often required in some flow control cases.
  return {
    watcher,
    worker
  }
}