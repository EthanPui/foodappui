import {NavigationHelpersContext} from '@react-navigation/native';
import * as React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

export default Details = ({ route }) => {
  const {item} = route.params;

  return (
    <View>
      <Text>Details page!</Text>
    </View>
  );
};
