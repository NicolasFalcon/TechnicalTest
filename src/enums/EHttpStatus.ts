export enum FbStatus {
  Success = 200,
  UserNoFound = 'auth/user-not-found',
  WrongPassword = 'auth/wrong-password',
  TooManyRequests = 'auth/too-many-requests',
  InvalidEmail = 'auth/invalid-email',
  EmailAlreadyInuse = 'auth/email-already-in-use',
}
