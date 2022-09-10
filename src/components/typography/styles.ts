import {StyleSheet} from 'react-native';
import {TextColors} from '../../theme';

export const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontFamily: 'Avenir-Black',
    color: TextColors.grayBackBtn,
    letterSpacing: 0.95,
  },
  h2: {fontSize: 22, fontFamily: 'Avenir-Roman', color: TextColors.grayBackBtn},
  title: {
    fontSize: 18,
    fontFamily: 'Avenir-Black',
    color: TextColors.simpleText,
  },
  subtitle1: {
    fontSize: 18,
    fontFamily: 'Avenir-Roman',
    color: TextColors.simpleText,
  },
  subtitle2: {
    fontSize: 16,
    fontFamily: 'Avenir-Black',
    color: TextColors.simpleText,
  },
  description1: {
    fontSize: 16,
    fontFamily: 'Avenir-Roman',
    color: TextColors.grayBackBtn,
  },
  description2: {
    fontSize: 14,
    fontFamily: 'Avenir-Roman',
    color: TextColors.simpleText,
  },
});
