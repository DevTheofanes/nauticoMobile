import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login';
import Home from '../pages/Home';
import DdEmbarcacao from '../pages/DdEmbarcacao';
import DdJetSki from '../pages/DdJetSki';
import Revisao from '../pages/Revisao';
import Transmissao from '../pages/Transmissao';
import SejaBv from '../pages/SejaBv';
import Register from '../pages/Register';
import Combustivel from  '../pages/Combustivel';
import Pagamentos from '../pages/Pagamentos';
import RecuperarPassword from '../pages/RecuperarPassword';
import Avarias from '../pages/Avarias';
import RevisaoJt from '../components/RevisaoJt';
import RevisaoLancha from '../components/RevisaoLancha';
import CombustivelJet from '../pages/CombustivelJet';
import CombustivelLacha from '../pages/CombustivelLancha';
import AgendamentoPass from '../pages/AgendamentoPass';
import UserPerfil from '../pages/UserPerfil';
import  AchadosPedidos from '../pages/AchadosPedidos';
import CheckList from '../components/Checklist';
import CheckList1 from '../components/Checklist/ChecklistJet/Checklist1';
import CheckList2 from '../components/Checklist/ChecklistJet/Checklist2';
import CheckList3 from '../components/Checklist/ChecklistJet/Checklist3';
import CheckListPrev from '../components/Checklist/Checklistprev';
import CheckListNext from '../components/Checklist/Checklistnext';
import CheckListNext4 from '../components/Checklist/Checklistnext4';
import CheckListNext5 from '../components/Checklist/Checklistnext5';
import PagePag from '../components/PagePag';
import Sucesso from '../components/Sucesso';
import Avariasjk from '../pages/Avariasjk';
import Pedidosjet from '../pages/Pedidosjet';

import EmbarcacaoList from '../pages/EmbarcacaoList';
import PageListUsers from '../pages/PageListUsers';


import PageVerifiqcode from '../pages/PageVerifiqCode';
import PageSucessoPassword from '../pages/PageSucessoPassword';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
      <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false}}>
             <Screen name="Login" component={Login} />
                <Screen name="Home" component={Home} />
                <Screen name="DdEmbarcacao" component={DdEmbarcacao} />
                <Screen name="DdJetSki" component={DdJetSki} />
                <Screen name="Revisao" component={Revisao} />
                <Screen name="Transmissao" component={Transmissao} />
                <Screen name="SejaBv" component={SejaBv} />
                <Screen name="Register" component={Register} />
                <Screen name="Combustivel" component={Combustivel} />
                <Screen name="Pagamentos" component={Pagamentos} />
                <Screen name="RecuperarPassword" component={RecuperarPassword} />
                <Screen name="Avarias" component={Avarias} />
                <Screen name="RevisaoJt" component={RevisaoJt} />
                <Screen name="RevisaoLancha" component={RevisaoLancha} />
                <Screen name="CombustivelJet" component={CombustivelJet} />
                <Screen name="CombustivelLacha" component={CombustivelLacha} />
                <Screen name="AgendamentoPass" component={AgendamentoPass} />
                <Screen name="UserPerfil" component={UserPerfil} />
                <Screen name="AchadosPedidos" component={AchadosPedidos} />
                <Screen name="CheckList" component={CheckList} />
                <Screen name="CheckListPrev" component={CheckListPrev} />
                <Screen name="CheckListNext" component={CheckListNext} />
                <Screen name="CheckListNext4" component={CheckListNext4} />
                <Screen name="CheckListNext5" component={CheckListNext5} />
                <Screen name="Sucesso" component={Sucesso} />
                <Screen name="CheckList1" component={CheckList1} />
                <Screen name="CheckList2" component={CheckList2} />
                <Screen name="CheckList3" component={CheckList3} />
                <Screen name="Avariasjk" component={Avariasjk} />
                <Screen name="Pedidosjet" component={Pedidosjet} />
                <Screen name="PagePag" component={PagePag} />
                <Screen name="PageVerifiqcode" component={PageVerifiqcode} /> 
                <Screen name="EmbarcacaoList" component={EmbarcacaoList} />
                <Screen name="PageListUsers" component={PageListUsers} />
               
      </Navigator>
    </NavigationContainer>
  );
}