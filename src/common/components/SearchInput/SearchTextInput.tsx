import { TextInput, TextInputProps, View } from 'react-native';
import React from 'react';

const SearchTextInput = ({ ...rest }: TextInputProps) => (
  <View className="flex-1 items-center rounded-3xl bg-dark_blue_tertiary">
    <TextInput className="font-sora_bold h-16 w-full px-4 text-xl color-white" {...rest} />
  </View>
);

export default SearchTextInput;
