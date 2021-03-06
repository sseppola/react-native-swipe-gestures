declare module 'react-native-swipe-gestures' {
  import { Component, ReactNode } from 'react';
  import {
    StyleProp,
    ViewStyle,
    ViewProperties,
    PanResponderGestureState,
  } from 'react-native';

  export interface GestureRecognizerProps extends ViewProperties {
    config?: GestureRecognizerConfig;
    onSwipe?(gestureName: string, gestureState: PanResponderGestureState): void;
    onSwipeUp?(gestureState: PanResponderGestureState): void;
    onSwipeDown?(gestureState: PanResponderGestureState): void;
    onSwipeLeft?(gestureState: PanResponderGestureState): void;
    onSwipeRight?(gestureState: PanResponderGestureState): void;
  }

  interface GestureRecognizerConfig {
    /**
     * Velocity that has to be breached in order for swipe to be triggered (vx and vy properties of gestureState)
     * @default 0.3
     */
    velocityThreshold?: number;

    /**
     * Absolute offset that shouldn't be breached for swipe to be triggered (dy for horizontal swipe, dx for vertical swipe)
     * @default 80
     */
    directionalOffsetThreshold?: number;

    /**
     * enable/disable swipe up gesture detection
     * @default true
     */
    detectSwipeUp?: boolean;

    /**
     * enable/disable swipe down gesture detection
     * @default true
     */
    detectSwipeDown?: boolean;

    /**
     * enable/disable swipe left gesture detection
     * @default true
     */
    detectSwipeLeft?: boolean;

    /**
     * enable/disable swipe right gesture detection
     * @default true
     */
    detectSwipeRight?: boolean;
  }

  class GestureRecognizer extends Component<GestureRecognizerProps> {}

  export default GestureRecognizer;
}
