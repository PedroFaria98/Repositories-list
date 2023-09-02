import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking} from 'react-native';
import { useEffect, useState } from 'react';
import React from 'react';

export default function App() {
  const [datalist, setdatalist] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/PedroFaria98/repos').then(response => response.json()).then(data => setdatalist(data))
  })

  return (
   
    <View style={styles.container}>
      <ScrollView style={{flex:1, width:'100%', }}> 
        {
        datalist.length > 0 ? datalist.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => Linking.openURL (item.html_url)} key={index} style={{flex:1,width:'100%',marginTop:'20%', alignItems:'center',paddingBottom:25}}>
              <View style={{backgroundColor:'#33FFC7', width:'90%',padding:15, alignItems:'center', borderRadius:10}}>
            <Text style={{fontSize:18, fontWeight:'bold',textTransform:'capitalize', marginBottom:'3%', color:'#FFFFFF'}}>{item.name}</Text>
            <Text style={{color: '#ffff'}}>Criado em: {item.created_at} </Text>
            </View>
            </TouchableOpacity>
          )
        }) : null
      }
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5C7467',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
});
