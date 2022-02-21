import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import * as React from 'react';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MatieralCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Feather.loadFont();

export default Home = () => {
  const renderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected ? colors.white : colors.secondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? colors.black : colors.white}
          />
        </View>
      </View>
    );
  };

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
      </View>

      {/* {Search} */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search</Text>
        </View>
      </View>

      {/* {Categories} */}
      <View style={styles.categoriesWrapper}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <View style={styles.categoriesListWrapper}>
          <FlatList
            data={categoriesData}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>

      {/* {Popular} */}
      <View style={styles.popularWrapper}>
        <Text style={styles.popularTitle}>Popular</Text>
        {popularData.map(item => (
          <View
            style={[
              styles.popularCardWrapper,
              {
                marginTop: item.id == 1 ? 10 : 20,
              },
            ]}>
            <View>
              <View>
                <View style={styles.popularTopWrapper}>
                  <MatieralCommunityIcons
                    name="crown"
                    size={12}
                    color={colors.primary}
                  />
                  <Text style={styles.popularTopText}>top of the week</Text>
                </View>
                <View style={styles.popularTitlesWrapper}>
                  <Text style={styles.popularTitlesTitle}>{item.title}</Text>
                  <Text style={styles.popularTitlesWeight}>
                    Weight {item.weight}
                  </Text>
                </View>
              </View>

              <View style={styles.popularCardBottom}>
                <View style={styles.addPizzaButton}>
                  <Feather name="plus" size={10} color={colors.textDark} />
                </View>
                <View style={styles.ratingWrapper}>
                  <MatieralCommunityIcons
                    name="star"
                    size={10}
                    color={colors.textDark}
                  />
                  <Text style={styles.rating}>{item.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.popularCardRight}>
              <Image style={styles.popularCardImage} source={item.image} />
            </View>
          </View>
        ))}
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

  categoriesWrapper: {
    marginTop: 30,
  },

  categoriesTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    fontSize: 16,
  },

  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },

  categoryItemWrapper: {
    backgroundColor: '#F5CA48',
    marginRight: 20,
    borderRadius: 20,
  },

  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 20,
  },

  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    color: colors.textDark,
    marginTop: 10,
    marginBottom: 29,
    fontSize: 14,
  },

  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    marginBottom: 20,
    borderRadius: 26,
  },

  categorySelectIcon: {
    alignSelf: 'center',
    fontSize: 15,
  },

  popularWrapper: {
    paddingTop: 20,
    marginHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    fontSize: 16,
  },

  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
  },

  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  popularTopText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginLeft: 10,
    color: colors.textDark,
  },

  popularTitlesWrapper: {
    marginTop: 20,
    marginLeft: 22,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWeight: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },

  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },

  addPizzaButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    marginLeft: 5,
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },

  popularCardRight: {
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },  
});
