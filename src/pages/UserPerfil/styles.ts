import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:32,
        paddingTop: 20 + Constants.statusBarHeight,
      },
      containerBack:{
        flexDirection:'row',
        justifyContent:'space-between'
       },
      containerbox:{
        marginBottom:30,
        marginTop:120,
        backgroundColor:'#fff',
        height:120,
        width:120,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:60
      },
      containerboxImage:{
      },
      containerboxText:{
       fontSize:16,
       color:'#5B5B5B',
       fontWeight:'700',
      },
      mainPage:{
        justifyContent:'center',
        alignItems:'center',
      },
      mainPageForm:{
       justifyContent:'space-between'
      },
      mainText:{
        fontSize:18,
       color:'#ffff',
       top:5,
       fontWeight:'700',
      },
      mainTextInput:{
        backgroundColor:'#fff',
        width:311,
        height:41,
        left:10,
        marginBottom:30,
        borderRadius:9,
      },
      mainInputTextEsqueceuText:
      {
        color:'#fff',
        fontSize:14,
        fontWeight:'bold'
      },
      mainInputButton:{
        backgroundColor:'#fff',
        width:100,
        height:40,
        marginBottom:20,
        borderRadius:14,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
      },
      mainInputButtonText:{
        fontSize:16,
        color:'#535353'
      },
      footer:{
        justifyContent:'center',
        alignItems:'center',
        height:130,
        top:100,
      },
      footerImg:{
        width:133,
        height:70
      },
      footerTextBold:{
        fontWeight:'800',
        color:'#fff',
        fontSize:14,
      },
})

export default styles;