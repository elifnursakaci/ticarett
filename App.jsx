import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/home';
import {
  CATEGORIES,
  FAVORITES,
  HOME,
  PRODUCTDETAIL,
  PRODUCTLIST,
  PROFILE,
} from './src/utils/routes';
import Categories from './src/screens/categories';
import Favorites from './src/screens/favorites';
import Profile from './src/screens/profile';
import {AppColors} from './src/theme/colors';

import TabIcon from './src/components/router/tabIcon';
import ProductList from './src/screens/product/productList';
import ProductDetail from './src/screens/product/productDetail';

import Provider from './src/context/provider';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route, navigation}) => ({
            tabBarIcon: ({focused, color, size}) => {
              <TabIcon
                focused={focused}
                color={color}
                size={size}
                route={route}
                name={route?.name}
              />;
            },
            tabBarActiveTintColor: AppColors.PRIMARY,
            tabBarInactiveTintColor: 'black',
          })}>
          <Tab.Screen name={HOME} component={Home} />
          <Tab.Screen name={CATEGORIES} component={Categories} />
          <Tab.Screen name={FAVORITES} component={Favorites} />
          <Tab.Screen name={PROFILE} component={Profile} />
          <Tab.Screen name={PRODUCTLIST} component={ProductList} />
          <Tab.Screen name={PRODUCTDETAIL} component={ProductDetail} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
