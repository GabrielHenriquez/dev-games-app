import { View } from 'react-native';
import React from 'react';
import { IContainer } from '@components/Container';

const SearchContent = ({ children, ...rest }: IContainer) => (
  <View className="w-full">
    <View {...rest} className="sw-full flex-row items-center gap-2">
      {children}
    </View>
  </View>
);

export default SearchContent;
