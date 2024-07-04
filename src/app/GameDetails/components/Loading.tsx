import * as Native from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <Native.View className="flex-1 items-center justify-center">
      <Native.Image
        resizeMode="contain"
        style={{ height: 100, width: 100 }}
        source={{
          uri: 'https://i.gifer.com/yy3.gif',
        }}
      />
    </Native.View>
  );
};

export default Loading;
