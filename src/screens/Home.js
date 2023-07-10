import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";

import Task from "../assets/svg/taskSvg.svg";
import News from "../assets/svg/newsSvg.svg";

const DATA = Array.from({ length: 10 });

const TASK = Array.from({ length: 3 });

const HomePage = () => {
  const renderNewsItem = () => {
    return (
      <View>
        <LinearGradient
          colors={["#25196b", "#d994a7"]}
          start={{ x: 0, y: 1 }}
          style={styles.newsView}
        >
          <Text style={styles.newsText}>Short new title{"\n"}will be here</Text>
          <View style={{ position: "absolute", right: 0 }}>
            <News width={153} height={70} />
          </View>
        </LinearGradient>
      </View>
    );
  };

  const renderTaskItem = () => {
    return (
      <View style={styles.taskView}>
        <Text style={styles.taskText}>Daily{"\n"}astromeditation</Text>
        <View style={styles.dailyTaskDisc}>
          <Text style={{ fontSize: 24, color: "#FF3726" }}>3</Text>
          <View style={{ marginTop: 8, marginLeft: 3 }}>
            <Task width={15} height={15} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" color={"#8B97A8"} size={20} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <TouchableOpacity>
          <Feather name="settings" color={"#8B97A8"} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.newsContainer}>
        <Text style={styles.firstHeader}>News</Text>
        <FlatList
          data={DATA}
          renderItem={renderNewsItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.firstHeader}>Daily Tasks:</Text>
        <FlatList
          data={TASK}
          renderItem={renderTaskItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.progBarView}>
          <Text style={{ fontSize: 18, color: "#595085", fontWeight: 300 }}>
            Your overall progress is
            <Text style={{ color: "#C93F8D" }}> 60%</Text>
          </Text>
          <Progress.Bar
            progress={0.6}
            width={335}
            color="#C93F8D"
            unfilledColor="#FDF9FB"
            borderColor="#FDF9FB"
            style={{ marginTop: 12 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 43,
            backgroundColor: "#F6F5FB",
            height: 105,
            paddingHorizontal: 20,
            justifyContent: "space-between",
            borderRadius: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Feather name="calendar" size={24} color="#403572" />
            <View style={{ marginLeft: 10, marginTop: 3 }}>
              <Text style={{ fontSize: 16, color: "#403572" }}>
                How was your day?
              </Text>
              <Text style={{ fontSize: 12, color: "#403572", marginTop: 10 }}>
                Lorem ipsum dolor sit amet, consectetur{"\n"}adipscing elit. Ut
                vel odio en urna ultrice...
              </Text>
            </View>
          </View>
          <Feather name="chevron-right" size={12} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            backgroundColor: "#FFF4F4",
            height: 105,
            paddingHorizontal: 20,
            justifyContent: "space-between",
            borderRadius: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Feather name="clock" size={24} color="#FF5648" />
            <View style={{ marginLeft: 10, marginTop: 3 }}>
              <Text style={{ fontSize: 16, color: "#FF5648" }}>
                Current Transist: 3rd House
              </Text>
              <Text style={{ fontSize: 12, color: "#A27A7A", marginTop: 10 }}>
                This is demonstrate siblings, hobbies,{"\n"}efforts, confidence,
                friends and short tr...
              </Text>
            </View>
          </View>
          <Feather name="chevron-right" size={12} />
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },

  header: {
    paddingHorizontal: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight,
  },

  headerTitle: {
    fontSize: 16,
    color: "#595085",
    fontWeight: "500",
  },

  newsContainer: {
    paddingLeft: 30,
    marginTop: 26,
  },

  firstHeader: {
    fontSize: 24,
    color: "#595085",
    fontWeight: "300",
  },

  newsView: {
    marginRight: 10,
    height: 70,
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 30,
    marginTop: 15,
    position: "relative",
  },

  newsText: {
    backgroundColor: "transparent",
    fontSize: 12,
    color: "#fff",
    textAlign: "left",
  },

  secondContainer: {
    marginTop: 40,
    marginHorizontal: 30,
  },

  taskView: {
    marginRight: 11,
    height: 90,
    borderRadius: 15,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 30,
    marginTop: 15,
    backgroundColor: "#FFF4F4",
  },

  dailyTaskDisc: {
    display: "flex",
    flexDirection: "row",
  },

  taskText: {
    backgroundColor: "transparent",
    fontSize: 12,
    color: "#FF3726",
    textAlign: "left",
  },

  progBarView: {
    marginTop: 15,
  },
});
