
import React, { useState } from 'react';
import { Feather as Icon} from "@expo/vector-icons";
import { View, Text,StyleSheet} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';




interface CheckBoxProps{
   label: string;
} 

const Checkbox = ({label}: CheckBoxProps) => {
  const [checked, setChecked ] = useState(false);
  const [checkedFalse, setCheckedcheckedFalse ] = useState(false);
  return (
      <>
      <View style={styles.CheckBox}>
      <RectButton onPress={() => setCheckedcheckedFalse((c) => !c )} >
          <View  style={{
       height:20,
       width:20,
       borderRadius:2,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checkedFalse ? "#FA5A4C" : "#fff",
       }}  >
          <Icon size={17} color="#fff" name="x" />
      </View>
      </RectButton>

      <RectButton onPress={() => setChecked((c) => !c )} >
      <View  style={{
       height:20,
       width:20,
       left:6,
       borderRadius:2,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checked ? "#63E669" : "#fff",
       }}  >
          <Icon size={17} color="#fff" name="check" />
      </View>
      </RectButton>

      <Text style={styles.label} >{label}</Text>
      </View>
      </>
  );
}

const styles = StyleSheet.create({
    CheckBox:{
        flexDirection:"row",
        alignItems:'center',
    },
    label: {
        margin: 8,
        color:'#fff',
        fontWeight:'bold',
        left:5,
      },
})

export default Checkbox;