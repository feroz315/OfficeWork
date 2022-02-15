import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 


import HomeScreen from '../Screens/Home/HomeScreen';
import CategoriesScreen from '../Screens/Categories/CategoriesScreen';
import RecipeScreen from '../Screens/Recipe/RecipeScreen';
import RecipesListScreen from '../Screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../Screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../Screens/Ingredient/IngredientsScreen';
import SearchScreen from '../Screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../Screens/Ingredients Details/IngredientsDetailsScreen';
import UserScreen  from '../Screens/LoginForm/Data';



const Stack = createStackNavigator();


function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            marginLeft:100,
            marginTop:10,
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
      <Stack.Screen name='Login' component={UserScreen} />
      
    </Stack.Navigator>
  )
} 

const Drawer = createDrawerNavigator();


function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
     <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;