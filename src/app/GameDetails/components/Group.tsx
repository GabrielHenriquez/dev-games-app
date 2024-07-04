import { View } from 'react-native';
import React from 'react';

const Group = ({ children }: { children: React.ReactNode }) => (
  <View style={{ paddingBottom: 20 }}>{children}</View>
);

export default Group;
