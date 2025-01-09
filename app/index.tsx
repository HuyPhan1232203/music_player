import { colors, screenPadding } from "@/constraints/tokens";
import { defaultStyles } from "@/styles/default";
import { Link } from "expo-router";
import {ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
      <ImageBackground
      source={require("../assets/images/musician.jpg")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View className="content" style={styles.content}>
        <View style={styles.heading} className="header">
          <Text style={defaultStyles.textHeader}>Music Player</Text>
          <View style={{paddingLeft:150}}>
            <Text numberOfLines={2}  style={styles.sub_heading}>Your gateway to unique sounds and musical exploration!</Text>
           </View>
        </View>
        <View className="footer">
      <Link href={"/authenticate/login"} style={styles.button}> 
        <Text style={styles.buttonText}>Create an account</Text>
      </Link>
        <Link href={"/_sitemap"}
        style={styles.button2}
        >
       <Text style={styles.buttonText}>I already have an account</Text>
      </Link>
        </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles=StyleSheet.create({


  container:{
    flex:1,
    margin: screenPadding.horizontal
  },
    background: {
      flex: 1,
    },
    heading:{
      display:"flex",
     },
  sub_heading:{
    textAlign:"right",
    color:colors.text
  },
  content:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between"
  },
  button:{
    fontSize:20,
    padding:20,
    borderRadius:30,
    backgroundColor:"#F3802B",
    marginBottom:20,
    
  },
  button2:{
    fontSize:20,
    padding:20,
    borderRadius:30,
    backgroundColor: "transparent",
    borderStyle:"solid",
    borderWidth:1,
    borderColor:"#fff",
    
  },
  buttonText: {
    color: colors.text,
    textAlign: "center", 
    width: "100%", 
  },
})


