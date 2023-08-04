import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CounterZikr, HomePage, QuranPage, SplashScreen} from '../pages';
import DetailSurah from '../pages/DetailSurah';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homepage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Quran"
        component={QuranPage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Zikr"
        component={CounterZikr}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailSurah"
        component={DetailSurah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
