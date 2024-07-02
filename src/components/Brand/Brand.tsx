import React from 'react';
import { View, DimensionValue } from 'react-native';
import Bavovna from '../../theme/assets/images/bavovna-classic.svg';
type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

const Brand = ({ height, width }: Props) => {
  return (
    <View testID={'brand-img-wrapper'} style={{ height, width }}>
      <Bavovna />
    </View>
  );
};

Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
};

export default Brand;
