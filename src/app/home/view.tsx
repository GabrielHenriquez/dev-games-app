import LogoDevGames from '@assets/images/logo-small.svg';
import IconBookmark from '@assets/icons/bookmark.svg';
import Container from '@components/Container';
import RoundedButton from '@components/RoundedButton';
import SearchInput from '@components/SearchInput';
import Spacer from '@components/Spacer';
import LoadingGames from '@components/LoadingGames';
import GameList from '@components/GameList';
import LoadingCategories from '@components/LoadingCategory';
import CategoriesList from '@components/GenresList';
import { colors } from '@styles/colors';
import { useHomeViewModel } from './view.model';
import * as Native from 'react-native';

const HomeView = () => {
  const VIEW_MODEL = useHomeViewModel();

  return (
    <Container>
      <Native.View className="flex-row items-center justify-between px-3">
        <LogoDevGames />

        <RoundedButton type={'headerLight'} onPress={VIEW_MODEL.navigateFavorites}>
          <IconBookmark />
        </RoundedButton>
      </Native.View>

      <Spacer className="h-8" />

      <Native.View className="px-3">
        <SearchInput.Content>
          <SearchInput.Input
            placeholder="Looking for a game?"
            placeholderTextColor={colors.white_two}
            value={VIEW_MODEL.valueText}
            onChangeText={VIEW_MODEL.setValueText}
          />
          <SearchInput.Button onPress={VIEW_MODEL.navigateGamesBySearch} />
        </SearchInput.Content>
      </Native.View>

      <Spacer className="h-8" />

      {VIEW_MODEL.LOADING_ALL_GAMES && VIEW_MODEL.LOADING_CATEGORIES ? (
        <LoadingCategories />
      ) : (
        <CategoriesList data={VIEW_MODEL.CATEGORIES!} />
      )}

      <Spacer className="h-8" />

      <Native.Text className="px-3 pb-4 text-2xl font-medium text-white">
        Trending games
      </Native.Text>

      {VIEW_MODEL.LOADING_ALL_GAMES && VIEW_MODEL.LOADING_CATEGORIES ? (
        <LoadingGames />
      ) : (
        <GameList data={VIEW_MODEL.GAMES!} />
      )}
    </Container>
  );
};

export default HomeView;
