import {Text, StyleSheet, View, SafeAreaView, Image} from 'react-native';
import * as React from 'react';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

export default Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/images/profile.png')}
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
      <View style={styles.titleWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titleTitle}>Delivery</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },

  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  titlesSubtitle: {
    fontsize: 16,
    fontFamily: 'Monteserrat-Regular',
    color: colors.textDark,
  },

  titleTitle: {
    paddingTop: 5,
    fontSize: 32,
    fontFamily: 'Monteserrat-Bold',
    color: colors.textDark,
  },
});
