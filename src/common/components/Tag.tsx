import { View, ViewProps } from 'react-native';
import { ReactNode } from 'react';

export type TagTypes = 'platform' | 'genre' | 'store';

interface ITag extends ViewProps {
  children: ReactNode;
  type: TagTypes;
}

const TYPE_STYLES: Record<TagTypes, string> = {
  store: 'h-8 px-4 items-center justify-center rounded-lg bg-dark_blue_secondary',
  platform: 'h-8 px-4 items-center justify-center rounded-lg bg-dark_blue_secondary',
  genre: 'h-8 px-4 items-center justify-center rounded-lg bg-gray_blue',
};

const Tag = ({ children, type, ...rest }: ITag) => (
  <View {...rest} className={TYPE_STYLES[type]}>
    {children}
  </View>
);

export default Tag;
