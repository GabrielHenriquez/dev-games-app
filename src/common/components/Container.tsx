import { colors } from '@styles/colors';
import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface IContainer extends ViewProps {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark_blue_primary }}>
    {children}
  </SafeAreaView>
);

export default Container;
