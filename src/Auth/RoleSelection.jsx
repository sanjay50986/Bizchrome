import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '../constants/colors';

const RoleSelection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBg}>
        <Image
          style={styles.image}
          source={require('../../assets/images/BizchromeLogo.png')}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.chooseText}>Join as a Client or Freelancer</Text>

        <TouchableOpacity style={styles.chooseBox} activeOpacity={0.8}>
          <View style={styles.jobTitle}>
            <Image
              style={styles.chooseIcon}
              source={require('../../assets/images/ClientIcon.png')}
            />
            <View>
              <Text style={styles.jobHeader}>I'm a client</Text>
              <Text style={styles.desHeader}>Looking for help with a project</Text>
            </View>
          </View>
          <AntDesign name="checkcircle" size={20} color={Colors.textColor} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chooseBox} activeOpacity={0.8}>
          <View style={styles.jobTitle}>
            <Image
              style={styles.chooseIcon}
              source={require('../../assets/images/FreelenceIcon.png')}
            />
            <View>
              <Text style={styles.jobHeader}>I'm a freelancer</Text>
              <Text style={styles.desHeader}>Looking for my favorite work</Text>
            </View>
          </View>
          <AntDesign name="checkcircle" size={20} color={Colors.textColor} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RoleSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerBg: {
    flex: 0.4,
    backgroundColor: Colors.headerBG,
    borderBottomStartRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 160,
    height: 160
  },
  content: {
    flex: 0.6,
    paddingVertical: 30,
    paddingHorizontal: 20
  },
  chooseText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: Colors.textColor
  },
  chooseBox: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 6,
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  chooseIcon: {
    height: 50,
    width: 50
  },
  jobTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  jobHeader: {
    fontSize: 16,
    color: Colors.textColor,
    fontFamily: 'Poppins-Bold'
  },
  desHeader: {
    color: 'grey',
    fontFamily: 'Poppins-Regular',
    fontSize: 12
  }
});
