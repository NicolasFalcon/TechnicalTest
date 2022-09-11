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
    label?: string;
    control: any;
    name: string;
    placeholder: string;
    secureTextEntry?: boolean;
    rules: {};
  }
}
