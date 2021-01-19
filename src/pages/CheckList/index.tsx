import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import CheckBox from "../../components/Forms/Checkbox";
import HeaderBack from "../../components/HeaderBack";
// import Check from "../../components/Check";

import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";
import Logo from "../../assets/logo.png";
import Pasta from "../../assets/Caminho46.png";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function Checklist() {
  const navigation = useNavigation();
  const { navigate } = useNavigation();

  function hadleNavigateToCheckListPrev() {
    navigate("CheckListPrev");
  }
  return (
    <>
      <ImageBackground
        style={styles.container}
        resizeMode="cover"
        source={Backgroud}
      >
        <HeaderBack />

        <View style={styles.content}>
          <View style={styles.containerbox}>
            <Image source={Pasta} />
            <Text style={styles.containerboxText}>CheckList</Text>
          </View>
          <View style={styles.icon}>
            <Feather size={17} color="#FA5A4C" name="x" />
            <Feather size={17} color="#63E669" name="check" />
            <Text style={styles.label}>Itens</Text>
          </View>
          {/* CheckBox */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollviewBox}
          >
            <CheckBox value={false} label="Óleo do Motor" />
            <CheckBox value={false} label="Óleo da Rabeta" />
            <CheckBox value={false} label="Óleo do Gerador" />
            <CheckBox value={false} label="Bujões" />
            <CheckBox value={false} label="Âncora" />
            <CheckBox value={false} label="Hélice" />
            <CheckBox value={false} label="Estrobo" />
            <CheckBox value={false} label="Tanque de Água" />
            <CheckBox value={false} label="Farol" />
            <CheckBox value={false} label="Luz de Navegação" />
            <CheckBox value={false} label="Documentação" />
            <CheckBox value={false} label="GPS" />
            <CheckBox value={false} label="Som" />
            <CheckBox value={false} label="Churrasqueira" />
            <CheckBox value={false} label="Tapete" />
            <CheckBox value={false} label="Bomba de Porão" />
            <CheckBox value={false} label="Bomba de Água Doce" />
            <CheckBox value={false} label="Microondas" />
            <CheckBox value={false} label="Automático" />
            <CheckBox value={false} label="Sonar" />
            <CheckBox value={false} label="Flap" />
            <CheckBox value={false} label="TRIM" />
            <CheckBox value={false} label="Escada" />
            <CheckBox value={false} label="Cooler" />
            <CheckBox value={false} label="Carreta" />
            <CheckBox value={false} label="Bóia Circular" />
            <CheckBox value={false} label="Guarda Mancebo" />
            <CheckBox value={false} label="Estofamentos" />
            <CheckBox value={false} label="Luz de Cortesia" />
            <CheckBox value={false} label="Antena" />
            <CheckBox value={false} label="Mastro" />
            <CheckBox value={false} label="Frigobar" />
            <CheckBox value={false} label="Buzina" />
            <CheckBox value={false} label="Guincho Elétrico" />
            <CheckBox value={false} label="Chave Geral" />
            <CheckBox value={false} label="Inversor" />
            <CheckBox value={false} label="Para-brisa" />
            <CheckBox value={false} label="Portinha da Popa" />
            <CheckBox value={false} label="Gel Coat" />
            <CheckBox value={false} label="Capa de Proteção" />
            <CheckBox value={false} label="Capota" />
            <CheckBox value={false} label="Fechamento de Capota" />
            <CheckBox value={false} label="Bússola" />
            <CheckBox value={false} label="Cabos de Chupeta" />
            <CheckBox value={false} label="Luz de Cabine" />
            <CheckBox value={false} label="Bateria" />
            <CheckBox value={false} label="Extintores" />
            <CheckBox value={false} label="Rádio VHF" />
            <CheckBox value={false} label="Auto Falantes" />
            <CheckBox value={false} label="TV" />
            <CheckBox value={false} label="DVD" />
            <CheckBox value={false} label="Cabos" />
            <CheckBox value={false} label="Coletes" />
            <CheckBox value={false} label="Ar Condicionado" />
            <CheckBox value={false} label="Gaiuta" />
            <CheckBox value={false} label="Vigia Lateral" />
            <CheckBox value={false} label="Defensas" />
            <CheckBox value={false} label="Luz Sub-Aquatica" />
            <CheckBox value={false} label="Copos" />
          </ScrollView>
          {/*  final */}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.containerButton}
            // onPress={() => navigate("DamagedNew", { id })}
          >
            <Text style={styles.containerButtonText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
}

export default Checklist;
