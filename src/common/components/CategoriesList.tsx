import React from 'react';
import Button from './Button';
import { ICategory } from 'common/services/game_services/models';
import * as Native from 'react-native';

const CategoriesList = ({ data }: { data: ICategory[] }) => (
  <Native.View>
    <Native.FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      contentContainerClassName="gap-4 px-3"
      keyExtractor={(item) => item?.id.toString()}
      renderItem={({ item }) => (
        <Button type="category">
          <Native.Text className="font-sora_medium text-lg text-white">{item?.name}</Native.Text>
        </Button>
      )}
    />
  </Native.View>
);

export default CategoriesList;
