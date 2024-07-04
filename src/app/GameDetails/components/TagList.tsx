import Tag from '@components/Tag';
import React from 'react';
import * as Native from 'react-native';

type ITypeTags = 'platform' | 'genre' | 'store';

interface TagListProps<T> {
  items: T[];
  type: ITypeTags;
  getName: (item: T) => string;
}

const TYPE_STYLES: Record<ITypeTags, string> = {
  platform: 'font-regular text-lg text-white',
  genre: 'text-lg font-bold text-white',
  store: 'font-regular text-lg text-white',
};

const TagList = <T,>({ items, type, getName }: TagListProps<T>) => (
  <Native.View className="flex-row flex-wrap gap-2">
    {items.map((item, index) => (
      <Tag key={index} type={type}>
        <Native.Text className={TYPE_STYLES[type]}>{getName(item)}</Native.Text>
      </Tag>
    ))}
  </Native.View>
);

export default TagList;
