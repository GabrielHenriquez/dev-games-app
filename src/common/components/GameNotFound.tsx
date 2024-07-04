import * as Native from 'react-native';
import React from 'react';
import LogoTriste from '@assets/images/rosto-triste.png';
import Spacer from './Spacer';

const GameNotFound = () => {
  return (
    <Native.View style={{ height: 250 }} className="items-center justify-center">
      <Native.Text className="text-2xl text-white">No games found!</Native.Text>
      <Spacer className="h-8" />
      <Native.Image source={LogoTriste} style={{ width: 200, height: 150 }} resizeMode="contain" />
    </Native.View>
  );
};

export default GameNotFound;
