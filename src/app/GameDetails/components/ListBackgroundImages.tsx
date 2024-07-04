import * as Native from 'react-native';
import React from 'react';

interface IListBackground {
  images: string[];
  styles: any;
}

const ListBackgroundImages = ({ images, styles }: IListBackground) => (
  <>
    {images.map((image, index) => (
      <Native.View style={styles.slide} key={index}>
        <Native.Image style={{ height: 275, width: '100%' }} source={{ uri: image }} />
      </Native.View>
    ))}
  </>
);

export default ListBackgroundImages;
