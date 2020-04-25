import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Octicons, MaterialIcons, Feather } from '@expo/vector-icons';

import IMAGES from './Images.js';
import FONTS from './Fonts.js';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });
}

export default async function cacheAssetsAsync() {
  const imageAssets = cacheImages(Object.values(IMAGES));
  const fontAssets = Font.loadAsync(FONTS);
  const iconAssets = Font.loadAsync({
    ...Octicons,
    ...MaterialIcons,
    ...Feather,
  });

  await Promise.all([...imageAssets, fontAssets, iconAssets]);
}
