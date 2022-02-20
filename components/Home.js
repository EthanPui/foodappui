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

      {/* {Titles} */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titlesSubtitle}>Food</Text>
        <Text style={styles.titleTitle}>Delivery</Text>

        {/* {Search} */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
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
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: colors.textDark,
  },

  titleTitle: {
    paddingTop: 5,
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },

  searchWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignContent: 'center',
  },

  search: {
    marginLeft: 10,
    flex: 1,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },

  searchText: {
    marginLeft: 2,
    marginBottom: 4.97,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textLight,
  },
});
