import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AccountScreen,
  BookmarkScreen,
  CartScreen,
  HomeScreen,
  OrderScreen
} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Display} from '../utils';
import {Colors} from '../contants';

const BottomTabs = createBottomTabNavigator();

export default () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        height: Display.setHeight(8),
        backgroundColor: Colors.PEACH,
        borderTopWidth: 0,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.DEFAULT_GREEN,
      tabBarInactiveTintColor: Colors.INACTIVE_GREY,
    }}
    op>
    <BottomTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="home-outline" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Bookmark"
      component={BookmarkScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="bookmark-outline" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Order"
      component={OrderScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="cart-outline" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="person-outline" size={23} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);
