import React, { useState, useEffect } from "react";
import { View, ImageBackground, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../service/axios";

import HeaderBack from "../../components/HeaderBack";
import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const [schedules, setSchedules]: any = useState([]);

  async function loadSchedules() {
    const response = await api.get("/schedules");

    setSchedules(response.data);
  }

  useEffect(() => {
    loadSchedules();
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={Backgroud}
    >
      <HeaderBack />

      <View style={styles.boxTitle}>
        <Text style={styles.title}>Todos os Agendamentos</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={schedules}
          keyExtractor={(schedule) => schedule.id}
          renderItem={({ item: schedule }) => (
            <View style={styles.boxItem}>
              <View style={styles.contentItem}>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>CLIENTE:</Text>{" "}
                  {schedule.vessel.proprietario}
                </Text>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>NOME DA EMBARCAÇÂO:</Text>{" "}
                  {schedule.vessel.name}
                </Text>
                <Text style={styles.textItemParagrafo}>
                  {schedule.comments ? (
                    <Text>
                      <Text style={styles.textBold}>OBSERVAÇÔES:</Text>{" "}
                      {schedule.comments}
                    </Text>
                  ) : null}
                </Text>
              </View>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>
                  {/* {schedule.employee ? "FUNCIONARIO" : "CLIENTE"} */}
                  17/01/2021
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}
