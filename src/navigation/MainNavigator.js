import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from 'components';
import { Text, View } from 'native-base';
import React from 'react';
import TabButton from './TabButton';
import { HomeScreen } from 'screens';

const Tab = createBottomTabNavigator();

const TabsList = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'home-circle-outline',
    inActiveIcon: 'home-circle-outline',
    component: HomeScreen,
  },
  {
    route: 'Like',
    label: 'Shop',
    type: Icons.Feather,
    activeIcon: 'list',
    inActiveIcon: 'list',
    component: HomeScreen,
  },
  {
    route: 'Account',
    label: 'Me',
    type: Icons.FontAwesome,
    activeIcon: 'user-o',
    inActiveIcon: 'user-o',
    component: HomeScreen,
  },
];

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 64,
        },
      }}>
      {TabsList.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
