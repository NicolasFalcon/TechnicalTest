export namespace Authenticate {
  export interface ILoginRequest {
    email: string;
    password: string;
  }

  export interface ISignUpRequest {
    email: string;
    password: string;
  }

  export interface IFirebaseError {
    code: string;
    message: string;
  }

  export interface CustomInput {
    label?: string;
    control: any;
    name: string;
    maxLength?: number;
    type?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    rules: {};
  }
}
