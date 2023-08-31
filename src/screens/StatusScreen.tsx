import React from 'react';
import {StyleSheet, View, Text, ViewProps} from 'react-native';

type StyleType = {
  container: ViewProps;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function StatusScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Status Screen</Text>
    </View>
  );
}
