export enum FbStatus {
  UserNoFound = 'auth/user-not-found',
  WrongPassword = 'auth/wrong-password',
  TooManyRequests = 'auth/too-many-requests',
  InvalidEmail = 'auth/invalid-email',
  EmailAlreadyInuse = 'auth/email-already-in-use',
}

export enum HttpResponse {
  Success = 200,
}
