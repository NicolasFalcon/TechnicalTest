export class Constants {
  public static readonly loadingMessages = {
    default: 'Loading',
  };

  public static readonly erroMessages = {
    TemporarilyDisabled:
      'Access to this account has been temporarily disabled due to many failed login attempts.',
    UserNotFound: 'User not found',
    WrongPassword:
      'The password is invalid or the user does not have a password.',
    InvalidEmail: 'The email address is badly formatted.',
    EmailInUse: 'The email address is already in use by another account.',
    AccountCreated: 'User account created & signed in!',
    UnableToShare: 'cannot share the content try again later',
    UnableSubmit: 'Unable submit data',
  };

  public static readonly successMessages = {
    SuccessShare: 'Check it out this Awesome App Taxdown',
    SuccessLogin: 'Signed in!',
    SucessSubmit: 'Submit Succesfully',
  };

  public static readonly informacionMessages = {
    taxesIfo: 'In here you can se all your taxes information',
  };

  public static readonly urlInputs = {
    baseUrl: 'http://localhost:3000/inputFields',
  };
}
