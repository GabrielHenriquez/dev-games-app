import { DataTypeScreen } from 'app/Games/[param]';
import GameCard from './GameCard';
import { IGame, IGameDetails } from '@services/games_services_models';
import { useRouter } from 'expo-router';
import RoundedButton from './RoundedButton';
import IconTrash from '@assets/icons/trash.svg';
import * as Native from 'react-native';
import { useFavorites } from '@hooks/useFavorites';

const GameList = ({
  data,
  screenType,
}: {
  data: IGame[] | IGameDetails[];
  screenType?: DataTypeScreen;
}) => {
  const { push } = useRouter();
  const navigateGameDetails = (slug: string) => {
    push(`/GameDetails/${slug}`);
  };
  const { removeFromFavorites } = useFavorites();

  const handleRemoveFromFavorites = (item: IGame | IGameDetails) => {
    if ('description_raw' in item) removeFromFavorites(item as IGameDetails);
  };

  return (
    <Native.View className="flex-1 px-3">
      <Native.FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item?.id.toString()}
        contentContainerClassName="pb-4"
        contentContainerStyle={{ gap: 17 }}
        renderItem={({ item }: { item: IGame | IGameDetails }) => (
          <>
            <GameCard onPress={() => navigateGameDetails(item?.slug)} data={item} />
            {screenType === 'Favorites' && (
              <RoundedButton
                style={{ position: 'absolute', right: 12, top: 12 }}
                type={'actionButton'}
                onPress={() => handleRemoveFromFavorites(item)}>
                <IconTrash />
              </RoundedButton>
            )}
          </>
        )}
      />
    </Native.View>
  );
};

export default GameList;
