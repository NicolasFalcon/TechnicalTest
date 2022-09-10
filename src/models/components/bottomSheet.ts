export namespace BottomSheetComponent {
  export interface IBottomSheetProps {
    name?: string;
    title?: string;
    titleCentered?: boolean;
    isOpen: boolean;
    content?: JSX.Element;
    footer?: JSX.Element;
    toggle: () => void;
    showCloseButton?: boolean;
    closeButtonText?: string;
    closeButtonAction?: () => void;
  }
  export interface defaultBottomSheetComponentProps {
    isOpen: boolean;
    toggle: (isOpen: boolean) => void;
  }
}
