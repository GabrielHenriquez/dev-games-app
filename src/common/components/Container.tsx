import { ReactNode } from 'react';
import { StatusBar, View, ViewProps } from 'react-native';

export interface IContainer extends ViewProps {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => (
  <View
    className="flex-1 bg-dark_blue_primary"
    style={{
      paddingTop: StatusBar.currentHeight! + 20,
    }}>
    {children}
  </View>
);

export default Container;
