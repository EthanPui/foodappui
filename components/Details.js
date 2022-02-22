import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

export default Details = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <View style={StyleSheet.container}>
      {/* {Header} */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <Feather name="star" size={12} color={colors.white} />
          </View>
        </View>
      </SafeAreaView>

      {/* {Titles} */}
      <View style={styles.titleWrapper}>
        <Text style={styles.detailsTitle}>{item.title}</Text>
      </View>

      {/* {Price} */}
      <View style={styles.detailsPriceWrapper}>
        <Text style={styles.detailsPrice}>${item.price}</Text>
      </View>

      {/* {Pizza info} */}
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },

  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
  },

  titleWrapper: {
    paddingTop: 30,
    paddingLeft: 20,
  },

  detailsTitleWrapper: {},

  detailsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },

  detailsPriceWrapper: {
    paddingTop: 20,
    paddingLeft: 20,
  },

  detailsPrice: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 32,
    color: colors.secondary,
  },
});
