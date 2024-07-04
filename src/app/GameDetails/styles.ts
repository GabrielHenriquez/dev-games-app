import { colors } from '@styles/colors';
import { StyleSheet } from 'nativewind';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: SCREEN_WIDTH * 2,
  },
  slide: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  activeIndicator: {
    backgroundColor: colors.light_blue,
  },
});
