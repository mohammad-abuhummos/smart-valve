import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from './Card';

export default function RenderCard(props) {
    const { label, uint,value,uintex } = props;
  return (
    <Card style={styles.card}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{label}</Text>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
        <Text style={{fontSize: 35, fontWeight: 'bold',color:"#00BECA"}}>{value}</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', paddingLeft: 10}}>
        {uint} 
        </Text>
      </View>
      <Text style={{fontSize: 18}}>{uintex}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 18,
  },
});
