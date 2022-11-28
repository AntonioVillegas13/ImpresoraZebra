import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import RNZebraBluetoothPrinter from 'react-native-zebra-bluetooth-printer';


export default function App() {
  const zpl = "^XA^FX Top section with company logo, name and address.^CF0,60^FO50,50^GB100,100,100^FS^ FO75,75 ^ FR ^ GB100, 100, 100 ^ FS^ FO88, 88 ^ GB50, 50, 50 ^ FS ^XZ";
  const Verificar=()=>{
    RNZebraBluetoothPrinter.pairedDevices().then((deviceArray) => {
     console.log(deviceArray[0]);
     let impresora=deviceArray[0].address;
     RNZebraBluetoothPrinter.print(impresora,zpl).then((res) => {
      Alert.alert("ridi bien");
     })
    })



    


    
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
      title='VERIFIACAR'
      onPress={Verificar}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
