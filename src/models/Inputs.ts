export namespace Inputs {
  export interface InputFields {
    inputfields: InputField[];
  }

  export interface InputField {
    id: string;
    label: string;
    placeholder: string;
    type: string;
    maxLength?: number;
  }
}
