import React from 'react';
import { createDrawerNavigator,createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//screens import
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CommentScreen from '../screens/CommentScreen';
import QRScreen from '../screens/QRScreen';
import ShopListScreen from '../screens/ShopListScreen';
//setting
import SettingsScreen from '../screens/setting/SettingsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/setting/ProfileScreen';
//shop
import ShopScreen from '../screens/shop/ShopScreen';
//comment
import Commentscreen from '../screens/comment/CommentScn'
//detail
import DetailScreen from '../screens/detail/DetailScreen';
import DetailScn from '../screens/detail/DetailScn';

//screens stack
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  QR : QRScreen,
  Detail: DetailScreen,
  Comment : CommentScreen,
  Commentscreen : Commentscreen,
});

const SearchStack = createStackNavigator({
  
  Search: SearchScreen,
  Detailscreen:DetailScn,
 
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Notification : NotificationScreen,
  Shop: ShopListScreen,
  ShopDetail:ShopScreen,
  Profile : ProfileScreen,
  
  
});

const DetailStack = createStackNavigator({
  Detail: DetailScreen,
 
  Comment : CommentScreen,
});



const CommentStack = createStackNavigator({
  Comment : CommentScreen,
});


export default createAppContainer(createBottomTabNavigator(
  {
    Home : HomeStack,
   //Detail : DetailStack, 
    Search : SearchStack,
   // Comment : CommentStack,
    Settings : SettingsStack
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: ({ navigation }) => ({  
     

      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Home') {
          iconName = `${focused ? 'home' : 'home'}`;
        } 
        else if (routeName === 'Settings') {
          iconName = `${focused ? 'user-circle' : 'user-circle'}`;
        }
       /* else if (routeName === 'QR') {
          iconName = `${focused ? 'qrcode' : 'qrcode'}`; 
        }
        else if (routeName === 'Detail') {
          iconName = `${focused ? 'list' : 'list'}`;
        }*/
        else if (routeName === 'Search') {
          iconName = `${focused ? 'search' : 'search'}`; 
        }
       /* else if (routeName === 'Comment') {
          iconName = `${focused ? 'sticky-note' : 'sticky-note'}`; 
        }*/
        // icon component from react-native-vector-icons
        return <FontAwesome name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
      
     
        
     
    }),

    tabBarOptions: {
      activeTintColor: '#5F56B0',
      inactiveTintColor: 'gray',
    },
  }
));
