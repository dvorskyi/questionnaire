export type TButtonVariant = "default" | "active";

export interface IButtonProps {
  variant?: TButtonVariant;
  onClick?: () => void;
  children: React.ReactNode;
}
