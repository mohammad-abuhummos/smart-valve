
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
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
export default function HomeScreen(){
    const [strem, setStrem] = React.useState(null);
    React.useEffect(() => {
        database()
        .ref('/test/stream')
        .on('value', snapshot => {
            setStrem(snapshot.val())
          console.log('User data: ', snapshot.val());
        });
      }, []);
    return(
        <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
                <Image source={require("../assets/logo.png")} style={{resizeMode:"center",width:"100%"}}/>
                <RenderCard label="Flow Rate" value={!!strem ? strem.flowRate : 0} uint="L / Min" uintex="Liter Per Minute" />
                <RenderCard label="Current Water Flowing" value={!!strem ? strem.flowMilliLitres : 0} uint="ML / Sec" uintex="Milliliter Per Second " />
                <RenderCard label="Total Water Quantity" value={!!strem ? strem.totalLitres : 0} uint="L" uintex="Liter" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    body:{
        paddingBottom:"20%"
    }
  });