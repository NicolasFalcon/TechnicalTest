export class Constants {
  public static readonly loadingMessages = {
    default: 'Cargando',
    MiniprogramLocal: 'Cargando locales',
    MiniprogramBuySalcobrand: 'Cargando productos',
    MiniprogramProductsMiSalcobrand: 'Cargando productos con descuento',
  };

  public static readonly erroMessages = {
    Success: 'Signed in!',
    TemporarilyDisabled:
      'Access to this account has been temporarily disabled due to many failed login attempts.',
    UserNotFound: 'User not found',
    WrongPassword:
      'The password is invalid or the user does not have a password.',
    InvalidEmail: 'The email address is badly formatted.',
    EmailInUse: 'The email address is already in use by another account.',
    AccountCreated: 'User account created & signed in!',
  };

  public static readonly backgroundImages = {
    background1: './../assets/background.png',
    background2: './../assets/background2.png',
  };
}
