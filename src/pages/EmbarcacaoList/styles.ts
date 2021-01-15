import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:24,
        paddingTop: 10 + Constants.statusBarHeight,
      },
      containerBack:{
       justifyContent:'space-between',
       flexDirection:'row',
       alignItems:'center',
       padding:24,
       paddingTop:44,
      },
      forms:{
        justifyContent:'center',
        alignItems:'center'
      },
      containerbox:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:30,
        marginTop:30
      },
      containerboxText:{
       fontSize:23,
       color:'#FFD246',
       fontWeight:'700',
       paddingHorizontal:10,
      },
      main:{
        flexDirection:'row',
        justifyContent:'center'
      },
      mainGrid:{},
      mainlogo:{
        width:227,
        height:118,
        marginBottom:90,
      },
      mainInputTextEsqueceuText:{color:'#fff',},

      mainInputButton:{
        backgroundColor:'#fff',
        width:269,
        height:50,
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
        position:'relative',
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
      containerButton:{
        width:270,
        marginTop:20,
        height:50,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFD246'
      },
      containerButtonText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:13,
      },
})

export default styles;