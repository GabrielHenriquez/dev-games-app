import LogoDevGames from '@assets/images/logo-small.svg';
import IconBookark from '@assets/icons/bookmark.svg';
import Container from '@components/Container';
import RoundedButton from '@components/RoundedButton';
import SearchInput from '@components/SearchInput';
import Spacer from '@components/Spacer';
import LoadingCategory from '@components/LoadingCategory';
import LoadingGames from '@components/LoadingGames';
import GameList from '@components/GameList';
import CategoriesList from '@components/CategoriesList';
import { colors } from '@styles/colors';
import { useGetAllCategories } from 'common/hooks/useGetAllCategories';
import { useGetAllGames } from 'common/hooks/useGetAllGames';
import * as Native from 'react-native';

const Home = () => {
  const { data: CATEGORIES, isLoading: LOADING_CATEGORIES } = useGetAllCategories();
  const { data: GAMES, isLoading: LOADING_ALL_GAMES } = useGetAllGames('40');

  return (
    <Container>
      <Native.StatusBar barStyle={'light-content'} />

      <Native.View className="flex-row items-center justify-between px-3">
        <LogoDevGames />

        <RoundedButton type={'headerLight'}>
          <IconBookark />
        </RoundedButton>
      </Native.View>

      <Spacer className="h-8" />

      <Native.View className="px-3">
        <SearchInput.Content>
          <SearchInput.Input
            placeholder="Looking for a game?"
            placeholderTextColor={colors.white_two}
          />
          <SearchInput.Button />
        </SearchInput.Content>
      </Native.View>

      <Spacer className="h-8" />

      {LOADING_ALL_GAMES && LOADING_CATEGORIES ? (
        <LoadingCategory />
      ) : (
        <CategoriesList data={CATEGORIES!} />
      )}

      <Spacer className="h-8" />

      <Native.Text className="px-3 pb-4 text-2xl font-medium text-white">
        Trending games
      </Native.Text>

      {LOADING_ALL_GAMES && LOADING_CATEGORIES ? <LoadingGames /> : <GameList data={GAMES!} />}
    </Container>
  );
};

export default Home;
