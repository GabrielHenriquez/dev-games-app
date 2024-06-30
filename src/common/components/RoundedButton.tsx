import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { ReactNode } from 'react';

export type ButtonTypes = 'headerLight' | 'headerDark' | 'actionButton';

interface IButton extends TouchableOpacityProps {
  children: ReactNode;
  type: ButtonTypes;
}

const TYPE_STYLES: Record<ButtonTypes, string> = {
  headerLight: 'h-12 w-12 items-center justify-center rounded-full bg-dark_blue_tertiary',
  actionButton: 'bg-bright h-16 w-16 items-center justify-center rounded-full bg-bright_red',
  headerDark: 'h-14 w-14 items-center justify-center rounded-full bg-dark_blue_secondary',
};

const RoundedButton = ({ children, type }: IButton) => (
  <TouchableOpacity className={TYPE_STYLES[type]}>{children}</TouchableOpacity>
);

export default RoundedButton;
