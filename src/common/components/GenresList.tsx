import React from 'react';
import Button from './Button';
import { useRouter } from 'expo-router';
import { ICategory } from '@services/games_services_models';
import * as Native from 'react-native';

const GenresList = ({ data }: { data: ICategory[] }) => {
  const { push } = useRouter();
  const navigateToCategoriesGame = (item: ICategory) => {
    push(`/Games/${item?.id}?screenName=Genre&genreName=${item?.name}`);
  };

  return (
    <Native.View>
      <Native.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerClassName="gap-4 px-3"
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => (
          <Button type="category" onPress={() => navigateToCategoriesGame(item)}>
            <Native.Text className="font-sora_medium text-lg text-white">{item?.name}</Native.Text>
          </Button>
        )}
      />
    </Native.View>
  );
};

export default GenresList;
