import { Colors } from 'assets';
import { Icon } from 'components';
import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TabButton = props => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <View style={[styles.icon_container, styles.container]}>
        <Icon
          type={item.type}
          size={32}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Colors.selection : Colors.gray}
        />
        {focused ? <Text style={styles.icon_label}>{item.label}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

export default TabButton;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon_label: {
    fontSize: 14,
    marginLeft: 6,
    color: Colors.selection,
  },
});
