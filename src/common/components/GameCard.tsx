import { View, Image, Text, Pressable, TouchableOpacity } from 'react-native';
import { IGame } from 'common/services/game_services/models';
import React from 'react';
import IconStar from '@assets/icons/star.svg';
import FastImage from 'react-native-fast-image';

const GameCard = ({ data }: { data: IGame }) => {
  return (
    <TouchableOpacity className="relative h-44 w-full rounded-xl bg-slate-500">
      <FastImage
        source={{ uri: data?.background_image, priority: 'high' }}
        style={{ position: 'absolute', width: '100%', height: 154, borderRadius: 12 }}
        resizeMode="cover"
      />

      <View className="absolute h-44 w-full rounded-xl bg-black opacity-50" />

      <View className="absolute bottom-0 left-3">
        <Text className="bottom-2 text-xl font-medium text-white">{data?.name}</Text>
        <View className="bottom-2 flex-row items-center gap-2">
          <IconStar />
          <Text className="text-xl font-normal text-white">
            {data?.rating}/{data?.rating_top}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
