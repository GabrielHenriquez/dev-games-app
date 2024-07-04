import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ReactNode } from 'react';

type ButtonTypes = 'read_description' | 'category' | 'back';

interface IButton extends TouchableOpacityProps {
  type: ButtonTypes;
  children: ReactNode;
}

const TYPES_STYLES: Record<ButtonTypes, string> = {
  back: 'w-16 justify-center items-center',
  read_description: 'w-full bg-light_blue h-10 justify-center items-center rounded-lg',
  category: 'h-10 px-3 rounded-xl bg-gray_blue justify-center items-center',
};

const Button = ({ children, type, ...rest }: IButton) => (
  <TouchableOpacity className={TYPES_STYLES[type]} {...rest}>
    {children}
  </TouchableOpacity>
);

export default Button;
