import * as Native from 'react-native';
import React from 'react';

type IIndicator = {
  images: string[];
  currentIndex: number;
  styles: any;
};

const ImageIndicators = ({ images, currentIndex, styles }: IIndicator) => {
  return (
    <Native.View style={styles.indicators}>
      {images.map((_, index) => (
        <Native.View
          key={index}
          style={[styles.indicator, currentIndex === index ? styles.activeIndicator : null]}
        />
      ))}
    </Native.View>
  );
};

export default ImageIndicators;
