import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import IconSearch from '@assets/icons/search.svg';

const SearchButton = ({ ...rest }: TouchableOpacityProps) => (
  <TouchableOpacity className="h-14 w-14 items-center justify-center" {...rest}>
    <IconSearch />
  </TouchableOpacity>
);

export default SearchButton;
