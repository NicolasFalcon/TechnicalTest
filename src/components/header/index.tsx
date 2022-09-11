import {Share, View} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import CustomButton from '../customButton';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconLogo from '../icon';
import {useNavigation} from '@react-navigation/native';
import {auth} from '../../../firebase';
import {EScreens} from '../../enums/EScreens';
import {Constants} from '../../utils/contants';
import {ThemeColors} from '../../theme';

const Header = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace(EScreens.Login);
      })
      .catch((error: any) => console.log(error));
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: Constants.successMessages.SuccessShare,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: Constants.erroMessages.UnableToShare,
      });
    }
  };

  return (
    <View style={styles.header}>
      <CustomButton
        iconLeft
        variant="solid"
        style={styles.buttonGreen}
        styleText={styles.buttonText}
        title="Share"
        onPress={() => onShare()}
      />
      <IconLogo />

      <CustomButton
        variant="solid"
        style={styles.buttonGreen}
        styleText={styles.buttonText}
        title="Logout"
        onPress={() => handleSignOut()}
      />
    </View>
  );
};

export default Header;
