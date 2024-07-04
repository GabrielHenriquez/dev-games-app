import { View, ViewProps } from 'react-native';
import React from 'react';

const Header = ({ children, ...rest }: ViewProps) => (
  <View {...rest} className="w-full flex-row items-center">
    {children}
  </View>
);

export default Header;
