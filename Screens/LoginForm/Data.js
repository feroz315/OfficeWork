
import React, { useLayoutEffect } from "react";
import { Alert,TextInput,View,SafeAreaView,TouchableOpacity,Button } from 'react-native';
import MenuImage from "../../Compontent/MenuImage/MenuImage";
import styles from "../LoginForm/styles";


export default function UserScreen(props)  {
    const { navigation } = props;

    
    useLayoutEffect(() => {
        navigation.setOptions({
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
            alignSelf: "center",
            flex: 1,
          },
          headerLeft: () => (
            <MenuImage
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => <View />,
        });
      }, []);
        
   const Form = () => {
        
 <SafeAreaView>
     <View style={styles.Container}>
          <View style={styles.Photo}>
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
              }}>
              <label
                title="email"
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
              }}>
                <label
                title="password"
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
        </SafeAreaView>
    
  }

  return(
    <Form />
  ) 
}



