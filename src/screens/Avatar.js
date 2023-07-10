import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";

import Avatars from "../assets/svg/avatar.svg";
import Zodiac from "../assets/svg/zodIcon.svg";
import Bookmark1 from "../assets/svg/bookmark1.svg";
import Bookmark2 from "../assets/svg/bookmark2.svg";
import Bookmark3 from "../assets/svg/bookmark3.svg";
import AvatarBackground from "../assets/svg/avatarBackground.svg";

const strongSide = Array.from({ length: 3 });
const weakSide = Array.from({ length: 3 });

const Avatar = () => {
  const renderStrongSide = () => {
    return (
      <View
        style={{
          marginLeft: 5,
          backgroundColor: "#F5F9F9",
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 8,
          marginTop: 8,
        }}
      >
        <Text style={{ color: "#479696", fontSize: 12, fontWeight: "500" }}>
          Analytics
        </Text>
      </View>
    );
  };

  const renderWeakSide = () => {
    return (
      <View
        style={{
          marginLeft: 5,
          backgroundColor: "#FFF4F4",
          paddingVertical: 8,
          paddingHorizontal: 10,
          borderRadius: 8,
          marginTop: 8,
        }}
      >
        <Text style={{ color: "#FF7E73", fontSize: 12, fontWeight: "500" }}>
          Perfectionism
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AvatarBackground />
      <View style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Feather name="menu" color={"#8B97A8"} size={20} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity>
            <Feather name="settings" color={"#8B97A8"} size={20} />
          </TouchableOpacity>
        </View>
        <View style={styles.avatarContainer}>
          <View style={styles.imgContainer}>
            <Avatars />
            <View style={styles.zodImg}>
              <Zodiac />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.userName}>Angelica Jackson</Text>
            <Text style={styles.userPosition}>Analyzer</Text>
            <Text style={styles.changeProfile}>Change Profile</Text>
          </View>
        </View>
        <View style={styles.strongSideView}>
          <Text style={styles.strongTitle}>Strong side:</Text>
          <FlatList
            data={strongSide}
            renderItem={renderStrongSide}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.weakSideView}>
          <Text style={styles.weakTitle}>Weak side:</Text>
          <FlatList
            data={weakSide}
            renderItem={renderWeakSide}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <Text style={styles.reportsTitle}>My Reports:</Text>
          <View style={styles.reportsContainer}>
            <View style={styles.reportsAstro}>
              <Octicons name="person" color={"#3D3270"} size={16} />
              <Text style={styles.astroTitle}>
                Astro- psychological{"\n"}report
              </Text>
              <Text style={styles.astroDesc}>
                Some short description{"\n"}of this type of report.
              </Text>
              <View style={styles.bookmark}>
                <Bookmark1 />
              </View>
            </View>
            <View style={styles.reportsMonthly}>
              <Feather name="calendar" color={"#479696"} size={16} />
              <Text style={styles.monthlyTitle}>
                Monthly prediction{"\n"}report
              </Text>
              <Text style={styles.monthlyDesc}>
                Some short description{"\n"}of this type of report.
              </Text>
              <View style={styles.bookmark}>
                <Bookmark2 />
              </View>
            </View>
          </View>
          <View style={styles.reports2ndContainer}>
            <View style={styles.reportsDaily}>
              <Feather name="check-square" color={"#FF5648"} size={16} />
              <Text style={styles.dailyTitle}>Daily Prediction</Text>
              <Text style={styles.dailyDesc}>
                Some short description {"\n"} of this type of report.
              </Text>
              <View style={styles.bookmark}>
                <Bookmark3 />
              </View>
            </View>
            <View style={styles.reportsLove}>
              <Feather name="heart" color={"#C93F8D"} size={16} />
              <Text style={styles.loveTitle}>Love report</Text>
              <Text style={styles.loveDesc}>
                Some short description {"\n"} of this type of report.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    position: "relative",
    height: "100%",
    width: "100%",
  },

  containerView: {
    paddingHorizontal: 30,
    position: "absolute",
  },

  header: {
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

  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
  },

  imgContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },

  zodImg: {
    position: "absolute",
    right: -18,
  },

  textContainer: {
    marginLeft: 30,
  },

  userName: {
    fontSize: 16,
    color: "#595085",
    fontWeight: "500",
  },

  userPosition: {
    fontSize: 14,
    color: "#595085",
    fontWeight: "normal",
  },

  changeProfile: {
    fontSize: 12,
    color: "#595085",
    fontWeight: "normal",
    marginTop: 11,
  },

  strongSideView: {
    marginTop: 30,
  },

  strongTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#595085",
  },

  weakSideView: {
    marginTop: 20,
  },

  weakTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#595085",
  },

  reportsTitle: {
    marginTop: 40,
    marginBottom: 15,
    fontSize: 24,
    fontWeight: "300",
    color: "#595085",
  },

  reportsContainer: {
    display: "flex",
    flexDirection: "row",
  },

  reports2ndContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },

  reportsAstro: {
    backgroundColor: "#F6F5FB",
    padding: 20,
    borderRadius: 15,
    position: "relative",
  },

  astroTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#403572",
    marginTop: 10,
  },

  astroDesc: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#403572",
    marginTop: 10,
  },

  reportsMonthly: {
    backgroundColor: "#F5F9F9",
    padding: 20,
    borderRadius: 15,
    marginLeft: 10,
    position: "relative",
  },

  monthlyTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#479696",
    marginTop: 10,
  },

  monthlyDesc: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#479696",
    marginTop: 10,
  },

  reportsDaily: {
    backgroundColor: "#FFF4F4",
    padding: 20,
    borderRadius: 15,
    position: "relative",
  },

  dailyTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#FF5648",
    marginTop: 10,
  },

  dailyDesc: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#A27A7A",
    marginTop: 10,
  },

  reportsLove: {
    backgroundColor: "#FDF9FB",
    padding: 20,
    borderRadius: 15,
    marginLeft: 10,
    position: "relative",
  },

  loveTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#C93F8D",
    marginTop: 10,
  },

  loveDesc: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#E791BE",
    marginTop: 10,
  },

  bookmark: {
    position: "absolute",
    right: 20,
  },
});
