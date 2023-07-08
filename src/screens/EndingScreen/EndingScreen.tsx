import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useTheme } from '../../hooks';
import { FadeInViewLoop, StarView } from '../Startup/Startup';
import Rusni from '../../theme/assets/images/rusni.svg';
import Puzda from '../../theme/assets/images/puzda.svg';
import BavovnaHeppy from '../../theme/assets/images/bavovna-happy.svg';
import { useNavigation } from '@react-navigation/native';

const HeaderText = () => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 40,
      }}
    >
      <Rusni />
      <Puzda />
    </View>
  );
};

const BottomButton = () => {
  const { Layout } = useTheme();
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          ...Layout.absolute,
          left: 50,
          top: 400,
          width: 300,
          alignItems: 'center',
          backgroundColor: '#FFFDFA',
          borderColor: '#F9CBFA',
          borderWidth: 4,
          padding: 10,
        }}
        onPress={onPress}
      >
        <Text>Ще раз</Text>
      </TouchableOpacity>
    </View>
  );
};
const EndingScreen: FC = () => {
  const { Layout } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        ...Layout.relative,
        ...Layout.fullSize,
        ...Layout.startColor,
      }}
    >
      <FadeInViewLoop>
        <StarView top={67} left={212} />
        <StarView top={137} left={105} />
        <StarView top={156} left={364} />
        <StarView top={271} left={314} />
        <StarView top={262} left={39} />
        <StarView top={374} left={376} />
        <StarView top={474} left={76} />
        <StarView top={574} left={36} />
        <StarView top={674} left={33} />
        <StarView top={574} left={336} />
        <StarView top={674} left={333} />
      </FadeInViewLoop>
      <HeaderText />
      <BottomButton />
      <View style={{ ...Layout.absolute, top: 500 }}>
        <BavovnaHeppy />
      </View>
    </View>
  );
};

export default EndingScreen;
