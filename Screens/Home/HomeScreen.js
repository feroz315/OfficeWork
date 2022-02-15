import React, { useLayoutEffect } from "react";
import {
  FlatList,
  Alert,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Image,
  Button,
} from "react-native";
import styles from "./styles";

import { recipes } from "../../Data/dataArrays";
import MenuImage from "../../Compontent/MenuImage/MenuImage";
import { getCategoryName } from "../../Data/MockDataAPI";

import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";



export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => (
      
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <EvilIcons
            name="user"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />

          <Feather
            name="shopping-cart"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity onPress={() => Alert(alert('Buy This'))}>
        <Text style={styles.AddBtn}>{item.AddtoCard}</Text></TouchableOpacity>
      
      </View>
    </TouchableHighlight>
  );

  return (
    <>
      <ScrollView>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={recipes}
            renderItem={renderRecipes}
            keyExtractor={(item) => `${item.recipeId}`}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <View>
            <Text
              style={{ fontSize: 26, textAlign: "center", color: "#FF3F57" }}>
               Welcome Account
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 22,
                fontWeight:'600',
                marginLeft:30
              }}
            >
              Login
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <View
              style={{
                marginBottom: 10,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              <label
                title="email"
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 20,
                }}
              >
                Email
              </label>

              <TextInput
                style={{
                  alignItems: "center",
                  fontSize: 15,
                  borderWidth: 1,
                  borderBottomWidth: 1,
                  borderRadius: 5,
                  width: "25%",
                  height: 35,
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                marginBottom: 10,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              <label
                title="password"
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  marginLeft: 20,
                }}
              >
                Password
              </label>

              <TextInput
                style={{
                  alignItems: "center",
                  fontSize: 15,
                  borderWidth: 1,
                  borderBottomWidth: 1,
                  borderRadius: 5,
                  width: "25%",
                  height: 35,
                  marginLeft: 20,
                }}
              />
            </View>
          </View>

        <TouchableOpacity onPress={() => Alert(alert('work'))}>
          <Text style={{ fontSize:14, padding:5, marginLeft:25, color:"#FF3F57", }}>Forgot Password</Text>
            </TouchableOpacity>
        <View style={{ 
              marginTop:10,
              width:'10%',
              marginLeft:30,
              }}>
         <Button title="Signup" />  
           </View>
      
       <View style={{ marginTop:20 }}>
           <Text
              style={{
                fontSize: 22,
                fontWeight:'600',
                marginLeft:30
               
              }}>
              Create User
            </Text>
          </View>
      
      <View style={{ marginTop: 10 }}>
          <View
            style={{
              marginBottom: 10,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            <label
              title="First Name"
              style={{
                fontWeight: "bold",
                fontSize: 16,
                marginLeft: 20,
              }}>
               First Name
              </label>
         <TextInput
              style={{
                alignItems: "center",
                fontSize: 15,
                borderWidth: 1,
                borderBottomWidth: 1,
                borderRadius: 5,
                width: "25%",
                height: 35,
                marginLeft: 20,
              }}/>
         </View>
        
         <View
          style={{
            marginBottom: 10,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <label
            title="Last Name"
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginLeft: 20,
            }}
          >
          Last Name
            </label>

          <TextInput
            style={{
              alignItems: "center",
              fontSize: 15,
              borderWidth: 1,
              borderBottomWidth: 1,
              borderRadius: 5,
              width: "25%",
              height: 35,
              marginLeft: 20,
            }}
          />
        </View>

        <View
        style={{
          marginBottom: 10,
          marginTop: 10,
          marginLeft: 10,
        }}>
      
        <label
          title="Email"
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginLeft: 20,
          }}>
             Email
          </label>
        <TextInput
          style={{
            alignItems: "center",
            fontSize: 15,
            borderWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 5,
            width: "25%",
            height: 35,
            marginLeft: 20,
          }}/>
          </View>
      
     <View
      style={{
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
      }}>
   
      <label
        title="Password"
        style={{
          fontWeight: "bold",
          fontSize: 16,
          marginLeft: 20,
        }}>
          Password
        </label>

      <TextInput
        style={{
          alignItems: "center",
          fontSize: 15,
          borderWidth: 1,
          borderBottomWidth: 1,
          borderRadius: 5,
          width: "25%",
          height: 35,
          marginLeft: 20,
        }}
      />
    </View>
   </View>
      <View style={{ 
            marginTop:10,
            width:'10%',
            marginLeft:30,
            }}>
       <Button title="Create"/>  
           </View>
        </View>
      </ScrollView>
    </>
  );
}
