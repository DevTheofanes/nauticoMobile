
import React, { useState } from 'react';
import { Feather as Icon} from "@expo/vector-icons";
import { View, Text,StyleSheet} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';




const InputCombustivel = () => {
  const [checked1, setChecked1 ] = useState(false);
  const [checkedFalse2, setCheckedcheckedFalse2 ] = useState(false);
  const [checkedFalse3, setCheckedcheckedFalse3 ] = useState(false);
  const [checkedFalse4, setCheckedcheckedFalse4 ] = useState(false);
  const [checked5, setChecked5 ] = useState(false);
  const [checkedFalse6, setCheckedcheckedFalse6 ] = useState(false);
  const [checkedFalse7, setCheckedcheckedFalse7 ] = useState(false);
  const [checkedFalse8, setCheckedcheckedFalse8 ] = useState(false);
  return (
      <>
      <View style={styles.CheckBox}>
      <RectButton onPress={() => setCheckedcheckedFalse2((c) => !c )} >
          <View  style={{
       height:50,
       marginRight:2,
       width:30,
       borderTopLeftRadius:5,
       borderBottomLeftRadius:5,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checkedFalse2 ? "#FFD246" : "#fff",
       }}  >
      </View>
      </RectButton>

      <RectButton onPress={() => setChecked1((c) => !c )} >
      <View  style={{
       height:50,
       width:30,
       marginRight:2,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checked1 ? "#FFD246" : "#fff",
       }}  >
      </View>
      </RectButton>

      <RectButton onPress={() => setCheckedcheckedFalse3((c) => !c )} >
      <View  style={{
       height:50,
       width:30,
       marginRight:2,
       borderRadius:2,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checkedFalse3 ? "#FFD246" : "#fff",
       }}  >
      </View>
      </RectButton>

      <RectButton onPress={() => setCheckedcheckedFalse4((c) => !c )} >
      <View  style={{
       height:50,
       width:30,
       marginRight:2,
       borderRadius:2,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checkedFalse4 ? "#FFD246" : "#fff",
       }}  >
      </View>
      </RectButton>

      <RectButton onPress={() => setChecked5((c) => !c )} >
      <View  style={{
       height:50,
       width:30,
       marginRight:2,
       borderRadius:2,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checked5 ? "#FFD246" : "#fff",
       }}  >
      </View>
      </RectButton>

      <RectButton onPress={() => setCheckedcheckedFalse6((c) => !c )} >
      <View  style={{
       height:50,
       width:30,
       marginRight:2,
       borderRadius:2,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checkedFalse6 ? "#FFD246" : "#fff",
       }}  >
      </View>
      </RectButton>

      <RectButton onPress={() => setCheckedcheckedFalse7((c) => !c )} >
      <View  style={{
       height:50,
       width:30,
       marginRight:2,
       borderRadius:2,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checkedFalse7 ? "#FFD246" : "#fff",
       }}  >
      </View>
      </RectButton>

      <RectButton onPress={() => setCheckedcheckedFalse8((c) => !c )} >
      <View  style={{
       height:50,
       width:30,
       marginRight:2,
       borderRadius:2,
       borderTopRightRadius:5,
       borderBottomRightRadius:5,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor: checkedFalse8 ? "#FFD246" : "#fff",
       }}  >
      </View>
      </RectButton>
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

export default InputCombustivel;