import { useFavorites } from '@hooks/useFavorites';
import { useGetGameDetails } from '@hooks/useGetGameDetails';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import { useAnimatedStyle, useSharedValue, withTiming, runOnJS } from 'react-native-reanimated';

export const useGameDetailsViewModel = () => {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const { slug } = useLocalSearchParams();
  const { data, isLoading } = useGetGameDetails(slug as string);
  const [images, setImages] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean | null>(false);
  const [openModalDescription, setOpenModalDescription] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { favorites, isAlreadyFavorited, addToFavorites, removeFromFavorites } = useFavorites();

  const translateX = useSharedValue(0);
  const currentIndexRef = useRef(0);

  const updateIndex = (newIndex: number) => {
    setCurrentIndex(newIndex);
    currentIndexRef.current = newIndex;
  };

  const panGesture = Gesture.Pan().onEnd((event) => {
    const threshold = SCREEN_WIDTH / 10;
    let newIndex = currentIndexRef.current;

    if (event.translationX < -threshold && newIndex < images?.length - 1) {
      newIndex += 1;
    } else if (event.translationX > threshold && currentIndexRef.current > 0) {
      newIndex -= 1;
    }

    runOnJS(updateIndex)(newIndex);
    translateX.value = withTiming(-newIndex * SCREEN_WIDTH);
  });

  function setMapBackgroundImages() {
    if (data) setImages([data?.background_image, data?.background_image_additional]);
  }

  const handleSetIsFavorite = useCallback(() => {
    const RESULT = isAlreadyFavorited(data?.id!);
    setIsFavorite(RESULT);
  }, [favorites, data]);

  function handleToggleFavorites() {
    !isFavorite ? addToFavorites(data!) : removeFromFavorites(data!);
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  useLayoutEffect(
    function setBackgroundImages() {
      setMapBackgroundImages();
    },
    [data]
  );

  useLayoutEffect(
    function setFavorites() {
      handleSetIsFavorite();
    },
    [favorites]
  );

  return {
    currentIndex,
    GAME_DETAILS: data,
    isLoading,
    animatedStyle,
    panGesture,
    images,
    translateX,
    openModalDescription,
    favorites,
    isFavorite,
    handleSetIsFavorite,
    handleToggleFavorites,
    setMapBackgroundImages,
    setImages,
    setOpenModalDescription,
  };
};
