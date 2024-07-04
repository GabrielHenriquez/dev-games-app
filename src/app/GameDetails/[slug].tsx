import React from 'react';
import Animated from 'react-native-reanimated';
import Container from '@components/Container';
import Spacer from '@components/Spacer';
import RoundedButton from '@components/RoundedButton';
import IconBookmark from '@assets/icons/bookmark.svg';
import IconBack from '@assets/icons/arrow-left.svg';
import IconStar from '@assets/icons/star.svg';
import Button from '@components/Button';
import ImageIndicators from './components/ImageIndicators';
import SectionTitle from './components/SectionTitle';
import TagList from './components/TagList';
import ListBackgroundImages from './components/ListBackgroundImages';
import Group from './components/Group';
import ModalReadDescription from './components/ModalReadDescription';
import Loading from './components/Loading';
import { GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './styles';
import { useGameDetailsViewModel } from './view.model';
import { useRouter } from 'expo-router';
import * as Native from 'react-native';

const GameDetailsView = () => {
  const VIEW_MODEL = useGameDetailsViewModel();
  const ROUTER = useRouter();

  return (
    <GestureHandlerRootView>
      <Container>
        {VIEW_MODEL.isLoading ? (
          <Loading />
        ) : (
          <>
            <Native.View className="absolute top-20 z-50 w-full flex-row justify-between px-4">
              <RoundedButton type="headerDark" onPress={ROUTER.back}>
                <IconBack width={34} />
              </RoundedButton>
              <RoundedButton
                type={VIEW_MODEL?.isFavorite ? 'actionButton' : 'headerDark'}
                onPress={VIEW_MODEL.handleToggleFavorites}>
                <IconBookmark />
              </RoundedButton>
            </Native.View>

            <Native.ScrollView showsVerticalScrollIndicator={false}>
              <Native.View>
                <Spacer h-12 />
                <GestureDetector gesture={VIEW_MODEL.panGesture}>
                  <Animated.View style={[styles.container, VIEW_MODEL.animatedStyle]}>
                    <ListBackgroundImages images={VIEW_MODEL?.images} styles={styles} />
                  </Animated.View>
                </GestureDetector>
                <ImageIndicators
                  images={VIEW_MODEL?.images}
                  styles={styles}
                  currentIndex={VIEW_MODEL?.currentIndex}
                />
              </Native.View>

              <Spacer className="h-8" />

              <Native.View className="px-4 pb-10">
                <Native.View className="flex-row items-center gap-2">
                  <IconStar />
                  <Native.Text className="text-white">
                    {VIEW_MODEL?.GAME_DETAILS?.rating}/{VIEW_MODEL?.GAME_DETAILS?.rating_top}
                  </Native.Text>
                </Native.View>

                <Spacer className="h-2" />

                <Native.Text className="text-2xl font-bold text-white">
                  {VIEW_MODEL?.GAME_DETAILS?.name}
                </Native.Text>

                <Spacer className="h-6" />

                <Group>
                  <SectionTitle>Genres</SectionTitle>

                  <TagList
                    items={VIEW_MODEL?.GAME_DETAILS?.genres || []}
                    type="genre"
                    getName={({ name }) => name}
                  />
                </Group>

                <Group>
                  <SectionTitle>Description</SectionTitle>

                  <Native.Text numberOfLines={7} className="text-sm text-white_three opacity-70">
                    {VIEW_MODEL?.GAME_DETAILS?.description_raw}
                  </Native.Text>

                  <Spacer className="h-2" />

                  <Button
                    type="read_description"
                    onPress={() => VIEW_MODEL.setOpenModalDescription(true)}>
                    <Native.Text className="text-white">Read full description</Native.Text>
                  </Button>
                </Group>

                <Group>
                  <SectionTitle>Platforms</SectionTitle>

                  <TagList
                    items={VIEW_MODEL?.GAME_DETAILS?.parent_platforms || []}
                    type="platform"
                    getName={({ platform }) => platform?.name}
                  />
                </Group>

                <Group>
                  <SectionTitle>Stores</SectionTitle>

                  <TagList
                    items={VIEW_MODEL?.GAME_DETAILS?.stores || []}
                    type="store"
                    getName={({ store }) => store?.name}
                  />
                </Group>
              </Native.View>
            </Native.ScrollView>

            <ModalReadDescription
              visible={VIEW_MODEL.openModalDescription}
              closeModal={() => VIEW_MODEL.setOpenModalDescription(false)}
              description={VIEW_MODEL?.GAME_DETAILS?.description_raw!}
              animationType="slide"
              transparent
            />
          </>
        )}
      </Container>
    </GestureHandlerRootView>
  );
};

export default GameDetailsView;
