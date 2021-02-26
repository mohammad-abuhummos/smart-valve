import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from '../components/Card';
import RenderCard from '../components/RenderCarde';
import database from '@react-native-firebase/database';
import LogsCard from '../components/LogsCarde';


export default function LogsScreen() {
  const [logs, setLogs] = React.useState(null);
  React.useEffect(() => {
    database()
      .ref('/logs/')
      .on('value', (snapshot) => {
        setLogs(snapshot.val());
        console.log('User data: ', snapshot.val());
      });
  }, []);

  function convert(time) {
    // Unixtimestamp
    var unixtimestamp = time / 1000;

    // Months array
    var months_arr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp * 1000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = months_arr[date.getMonth()];

    // Day
    var day = date.getDate();

    // Hours
    var hours = date.getHours();

    // Minutes
    var minutes = '0' + date.getMinutes();

    // Seconds
    var seconds = '0' + date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime =
      month +
      '-' +
      day +
      '-' +
      year +
      ' ' +
      hours +
      ':' +
      minutes.substr(-2) +
      ':' +
      seconds.substr(-2);

    return convdataTime;
  }
  let RenderLogs = () => {
    var obj = Object.entries(logs).map(([key, value]) => {
      return (
        <LogsCard 
        key={key}
        date={convert(key)}
        fr={value.flowRate}
        cfr={value.flowMilliLitres}
        tq={value.totalLitres}
        
        />

      );
    });
    return obj;
  };
  const Clear =async () => {
    try {
      await database()
    .ref('/logs')
    .remove();
    } catch (error) {
      
    }
  }
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
              <Button title="Clear" color="#00BECA" onPress={() =>{Clear()}}/>
            {!!logs ? RenderLogs():<Text style={{fontWeight:"bold",textAlign:"center",fontSize:20}}>No history to show</Text>}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  body: {
    paddingBottom: '20%',
  },
});
