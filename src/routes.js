import React from 'react'
import { Image } from 'react-native'
import { createAppContainer, createStackNavigator, HeaderBackButton } from 'react-navigation'
/*
createBottomTabNavigator
createSwitchNavigator
createDrawerNavigator

*/ 
import Feed from './pages/Feed'
import New from './pages/New' 


import logo from './assets/logo.png'

export default createAppContainer(
    createStackNavigator({
        Feed, 
        New,
    },{
        defaultNavigationOptions: {
            headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
            HeaderBackButton: null,
            headerTintColor: '#000'
        },
        mode:  'modal'
    }) 
)