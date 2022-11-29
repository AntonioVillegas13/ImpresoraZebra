import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import RNZebraBluetoothPrinter from 'react-native-zebra-bluetooth-printer';


export default function App() {
  const zpl = "BARCODE 128 1 1 50 150 10 HORIZ.";
const zplArray = ["^XA^CFA,30^FO30,30^FDPage one^FS^XZ", "^XA^CFA,30^FO30,30^FDPage two^FS^XZ", "^XA^CFA,30^FO30,30^FDPage three^FS^XZ"];

const [printer,setprinter]=useState();
useEffect(() => {
  ConectarImpresora();
}, []);

  const ConectarImpresora=async()=>{

   
    const dispositivos=await RNZebraBluetoothPrinter.pairedDevices();
    const impresora=dispositivos.filter((device) => device.class === 1664);
    //console.log(impresora)
    const p = impresora.length ? impresora[0] : null;
        if (p === null) {
            console.warn("unable to find printer. Found devices:", dispositivos);
        }
        console.log(p)
        setprinter(p);

  }


  const print=async()=>
  {
 
    console.log("printer addres:",printer.address)
    await RNZebraBluetoothPrinter.print(
      "AC:3F:A4:A1:E9:4B",
      zpl).then((res)=>{
        console.log(res)
      }).catch(error => console.log(error.message));

  }



    


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
      title='VERIFIACAR'
      onPress={print}
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
