import { IGame } from 'common/services/game_services/models';
import GameCard from './GameCard';
import * as Native from 'react-native';

const GameList = ({ data }: { data: IGame[] }) => (
  <Native.View className="flex-1 px-3">
    <Native.FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item?.id.toString()}
      renderItem={({ item }) => <GameCard data={item} />}
      contentContainerClassName="gap-4 pb-4"
    />
  </Native.View>
);

export default GameList;
