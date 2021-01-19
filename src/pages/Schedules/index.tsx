import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../service/axios";

import HeaderBack from "../../components/HeaderBack";
import Backgroud from "../../assets/backgroudmenu.png";
import styles from "./styles";

export default function Schedules() {
  const { navigate } = useNavigation();
  const [schedules, setSchedules]: any = useState([]);

  function handleDate(timeZone: any) {
    const year = timeZone.substring(0, 4);
    const mount = timeZone.substring(5, 7);
    const day = timeZone.substring(8, 10);

    const time = day + "/" + mount + "/" + year;
    return time;
  }

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
          keyExtractor={(schedule) => String(schedule.id)}
          renderItem={({ item: schedule }) => (
            <TouchableOpacity
              style={styles.boxItem}
              onPress={() => navigate("SchedulesDetails", { schedule })}
            >
              <View style={styles.contentItem}>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>CLIENTE:</Text>
                  {schedule.vessel.proprietario}
                </Text>
                <Text style={styles.textItem}>
                  <Text style={styles.textBold}>NOME DA EMBARCAÇÂO:</Text>
                  {schedule.vessel.name}
                </Text>
                <Text style={styles.textItemParagrafo}>
                  {schedule.comments ? (
                    <Text>
                      <Text style={styles.textBold}>OBSERVAÇÔES:</Text>
                      {schedule.comments}
                    </Text>
                  ) : null}
                </Text>
              </View>
              <View style={styles.tagBox}>
                <Text style={styles.tagText}>
                  {/* {schedule.employee ? "FUNCIONARIO" : "CLIENTE"} */}
                  {handleDate(schedule.time)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}
