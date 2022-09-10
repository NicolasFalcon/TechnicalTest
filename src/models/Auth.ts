export namespace Authenticate {
  export interface ILoginRequest {
    email: string;
    password: string;
  }

  export interface IFirebaseError {
    code: string;
    message: string;
  }

  export interface CustomInput {
    control: any;
    name: string;
    placeholder: string;
    secureTextEntry: boolean;
    rules: {};
  }
}
