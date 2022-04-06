import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './IconLabel.style';

const IconLabel = ({ name, label, color }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={name}
        type="ionicon"
        size={14}
        color={color}
        style={styles.iconStyle}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

export default IconLabel;
