import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux-immutablejs'
import { reducer as form } from 'redux-form/immutable'
import { fromJS } from 'immutable'
import Form from './Form'
import { View } from 'react-native'

const reducer = combineReducers({ form })
const store = createStore(reducer, fromJS({}))

const Container = props => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  )
}

export default Container
