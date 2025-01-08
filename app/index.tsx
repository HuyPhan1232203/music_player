import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
export default function Index() {
  
  return (
      <ImageBackground
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1682125765650-8a7baa2d4bf4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljfGVufDB8fDB8fHww' }}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View className="content" style={styles.content}>
        <View style={styles.heading} className="header">
          <Text style={styles.header}>IndieWave</Text>
          <View style={{paddingLeft:150}}>
            <Text numberOfLines={2}  style={styles.sub_heading}>Your gateway to unique sounds and musical exploration!</Text>
          </View>
        </View>
        <View className="footer">
        </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
const styles=StyleSheet.create({
  header:{
    color:"#000",
    fontWeight:700,
    fontSize:40,
  },
  container:{
    margin:20,
    flex:1,
  },
    background: {
      flex: 1,
    },
    heading:{
      display:"flex",
     },
  sub_heading:{
    textAlign:"right"
  },
  content:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-between"
  }
})


