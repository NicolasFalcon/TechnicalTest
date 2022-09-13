import {StyleSheet} from 'react-native';

import {TextColors, ThemeColors} from '../../theme';
import {TVariantButton} from '../../models/components/IButton';

export const styles = StyleSheet.create({
  container: {
    height: 41,
    borderRadius: 41,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  badgeContainer: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: TextColors.simpleText,
    borderRadius: 50,
  },
  solid: {backgroundColor: ThemeColors.blueTaxdown},
  outline: {borderWidth: 1, borderColor: TextColors.simpleText},
  default: {},
  mr10: {marginRight: 10},
  textContainer: {flexDirection: 'row', alignItems: 'center'},
  textSolid: {color: ThemeColors.white, fontSize: 18},
  textOutline: {color: TextColors.simpleText, fontSize: 14},
  textDefault: {
    color: ThemeColors.blueTaxdown,
    fontSize: 18,
    fontFamily: 'Avenir-Black',
  },
  badgeOutline: {
    fontSize: 13,
    color: 'blue',
    borderColor: 'blue',
    paddingVertical: 4,
    paddingHorizontal: 5,
  },
  disabled: {opacity: 0.3},
});

export const styleContainer = (variant: TVariantButton) => {
  switch (variant) {
    case 'default':
    case 'solid':
    case 'outline':
      return styles.container;
    case 'badgeOutline':
      return styles.badgeContainer;
  }
};

export const styleTextButton = (variant: TVariantButton) => {
  switch (variant) {
    case 'default':
      return styles.textDefault;
    case 'solid':
      return styles.textSolid;
    case 'outline':
      return styles.textOutline;
    case 'badgeOutline':
      return styles.badgeOutline;
    default:
      return {};
  }
};
