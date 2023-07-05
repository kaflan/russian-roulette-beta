import React, {
  FC,
  useEffect,
  useRef,
  PropsWithChildren,
  useState,
  Dispatch,
} from 'react';
import { View, Animated, Easing, TouchableOpacity, Text } from 'react-native';

import { useTheme } from '../../hooks';
import Star from '../../theme/assets/images/star.svg';
import BavovnaCloseEYES from '../../theme/assets/images/bavovna-close-eyes.svg';
import BavovnaOpenEYES from '../../theme/assets/images/bavovna-open-eyes.svg';
import RouletteSVG from '../../theme/assets/images/roulette.svg';
import WhatPoRusni from '../../theme/assets/images/what-porusni.svg';

type FadeInViewProps = PropsWithChildren;
interface IStarView {
  top: number;
  left: number;
}

const StarView: FC<IStarView> = ({ top, left }) => (
  <View
    style={{
      position: 'absolute',
      top,
      left,
    }}
  >
    <Star />
  </View>
);

const FadeInViewLoop: FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        delay: 3000,
        useNativeDriver: true,
      }),
    ).start();
  }, [fadeAnim]);
  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
const FadeBavovnaAnimView: FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
interface IBavovna {
  counter: number;
  changeCounter: Dispatch<React.SetStateAction<number>>;
}
const Bavovna: FC<IBavovna> = ({ counter, changeCounter }) => {
  const { Layout } = useTheme();
  useEffect(() => {
    const interval = setInterval(() => {
      changeCounter(prevCounter => prevCounter + 1);
      if (counter + 1 === 100) {
        changeCounter(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View
      style={{
        ...Layout.absolute,
        top: 500,
      }}
    >
      {counter % 2 === 0 ? <BavovnaCloseEYES /> : <BavovnaOpenEYES />}
    </View>
  );
};

const Roulette = () => {
  const { Layout } = useTheme();
  const [spinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 950,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });

  return (
    <View style={{ flex: 1, ...Layout.absolute, top: 150, left: 100 }}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <RouletteSVG />
      </Animated.View>
    </View>
  );
};

const HeaderText = () => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 40,
      }}
    >
      <WhatPoRusni />
    </View>
  );
};

const BottomButton = () => {
  const { Layout } = useTheme();
  const onPress = () => {};
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
        <Text>Дізнатися</Text>
      </TouchableOpacity>
    </View>
  );
};

const Example = () => {
  const { Layout } = useTheme();
  const [bavovnaCounter, changeCounter] = useState(0);
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
      <Roulette />
      <BottomButton />
      <FadeBavovnaAnimView>
        <Bavovna counter={bavovnaCounter} changeCounter={changeCounter} />
      </FadeBavovnaAnimView>
    </View>
  );
};

export default Example;
