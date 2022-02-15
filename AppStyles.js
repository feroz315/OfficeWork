import { StyleSheet, Dimensions } from 'react-native';


// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;

const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 85,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  price:{
    flex:1,
    fontSize:13,
    fontWeight:'bold',
    textAlign:'center',
    marginRight: 5,
    marginLeft: 5,  
  },
  AddBtn:{
    flex:1,
    textAlign:'center',
    marginRight: 5,
    marginLeft: 5,
    color: '#444',
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  },
  Searchinput:{
    flexDirection:'row',
    marginTop:30,
    borderWidth:1,
    borderBottomWidth:1,
    borderRadius:10,
    width:'85%',
    height:55,
    marginLeft:20,
    
  },
  input:{
      borderBottomColor:'#000',
      marginBottom:10,
      marginTop:20,
      marginLeft:10,
      fontSize:16,
      color:'#000',
      flex:1  ,
      marginTop:20,  
    },  
      Viewinput:{
      height:50,
      flexDirection:'row',
      flex:1,
      alignItems:'center',
      borderRadius:10,
      marginTop:20,
    }
});