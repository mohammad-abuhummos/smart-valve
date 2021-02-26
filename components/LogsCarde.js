import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from './Card';

export default function LogsCard(props) {
  const {date, fr, cfr, tq} = props;
  return (
    <Card style={styles.card}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{date}</Text>
      <View  style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:"space-between",paddingTop:5
            }}>
         <Text style={{fontSize: 15, color: '#00BECA'}}>Flow Rate</Text>
         <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
              {fr}
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 3}}>
              L / Min
            </Text>
          </View>
      </View>
      <View  style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:"space-between",paddingTop:2
            }}>
         <Text style={{fontSize: 15, color: '#00BECA'}}>Current Water Flowing</Text>
         <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
                {cfr}
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 3}}>
              L / Sec
            </Text>
          </View>
      </View>
      <View  style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:"space-between",paddingTop:2
            }}>
         <Text style={{fontSize: 15,fontWeight:"bold", color: '#00BECA'}}>Total Water Quantity</Text>
         <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
              {tq}
            </Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', paddingLeft: 3}}>
              L 
            </Text>
          </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 18,
  },
});
