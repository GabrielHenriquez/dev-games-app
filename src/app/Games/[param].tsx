import Container from '@components/Container';
import GameList from '@components/GameList';
import LoadingGames from '@components/LoadingGames';
import Header from '@components/Header';
import Spacer from '@components/Spacer';
import Button from '@components/Button';
import GameNotFound from '@components/GameNotFound';
import IconArrowBack from '@assets/icons/arrow-left.svg';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useGamesViewModel } from './view.model';
import { DataTypeScreen } from './model';

const GamesView = () => {
  const { back } = useRouter();
  const VIEW_MODEL = useGamesViewModel();

  return (
    <Container>
      <Header>
        <Button onPress={back} type="back">
          <IconArrowBack width={38} />
        </Button>
        <Text style={{ fontSize: 26 }} className="pl-2 font-medium text-white">
          {VIEW_MODEL?.GENRE ?? VIEW_MODEL.DATA_TYPE_SCREEN}
        </Text>
      </Header>
      <Spacer className="h-4" />
      {VIEW_MODEL?.GAME!?.length === 0 && <GameNotFound />}
      {VIEW_MODEL.isLoading || VIEW_MODEL.isRefetching ? (
        <LoadingGames />
      ) : (
        <GameList
          screenType={VIEW_MODEL.DATA_TYPE_SCREEN as DataTypeScreen}
          data={VIEW_MODEL.GAME!}
        />
      )}
    </Container>
  );
};

export default GamesView;
