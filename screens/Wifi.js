import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Button,
} from 'react-native';
import AppInput from '../components/AppInput';
import axios from 'axios';
export default function WifiScreen() {
  const [ssid, setSsid] = React.useState();
  const [pasword, setPasword] = React.useState();
  const send = async () => {
    try {
      axios
        .post(`http://192.168.4.1/setting?ssid=${ssid}&pass=${pasword}`, {
          headers: {'Access-Control-Allow-Origin': '*'},
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <View style={{paddingTop: 30}}>
              <AppInput label="SSID" onChangeText={(text) => setSsid(text)} />
            </View>
            <View style={{paddingTop: 30}}>
              <AppInput
                label="Password"
                onChangeText={(text) => setPasword(text)}
              />
            </View>
            <View style={{paddingTop: 30}}>
              <Button
                title="Connect"
                color="#00BECA"
                onPress={() => {
                  send();
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  InnerContainer: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    paddingTop: '20%',
    paddingHorizontal: 20,
  },
});
