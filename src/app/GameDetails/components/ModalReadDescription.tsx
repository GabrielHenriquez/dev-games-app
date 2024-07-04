import * as Native from 'react-native';
import React from 'react';
import Header from '@components/Header';
import RoundedButton from '@components/RoundedButton';
import IconBack from '@assets/icons/arrow-left.svg';
import Spacer from '@components/Spacer';

interface IModalReadDescription extends Native.ModalProps {
  closeModal: () => void;
  description: string;
}

const ModalReadDescription = ({ closeModal, description, ...rest }: IModalReadDescription) => {
  return (
    <Native.Modal {...rest}>
      <Native.View className="flex-1 bg-black/70">
        <Native.View
          style={{
            height: 650,
            marginTop: 'auto',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
          className="bg-dark_blue_secondary px-4">
          <Header style={{ marginTop: 20 }}>
            <RoundedButton style={{ zIndex: 50 }} type={'headerDark'} onPress={closeModal}>
              <IconBack width={34} />
            </RoundedButton>

            <Native.Text className="absolute w-full text-center text-2xl font-semibold text-white">
              Description
            </Native.Text>
          </Header>

          <Spacer className="h-4" />

          <Native.ScrollView>
            <Native.Text className="text-lg text-white_three opacity-70">{description}</Native.Text>
            <Spacer className="h-8" />
          </Native.ScrollView>
        </Native.View>
      </Native.View>
    </Native.Modal>
  );
};

export default ModalReadDescription;
