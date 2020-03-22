import React from 'react'
import {createAppContainer,createStackNavigator} from 'react-navigation'
import News from './Screen/Home'

const stackNavigator = createStackNavigator({
  News : News
})

const App = createAppContainer(stackNavigator)

export default App