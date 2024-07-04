import * as Native from 'react-native';
import React from 'react';
import Spacer from '@components/Spacer';

const SectionTitle = ({ children }: { children: string }) => (
  <>
    <Native.Text className="text-2xl font-semibold text-white">{children}</Native.Text>
    <Spacer className="h-2" />
  </>
);

export default SectionTitle;
