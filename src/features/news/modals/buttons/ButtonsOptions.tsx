import React from 'react';
import useModal from '../../contextModal';
import { CloseButton } from '../../styled';
import { CloseButton as Close } from '../../../../assets';

interface ButtonsOptionsProps {
  handleSuscribir: () => void;
}

const ButtonsOptions: React.FC<ButtonsOptionsProps> = ({ handleSuscribir }) => {
  const { setModal } = useModal();

  const closeModal = () => {
    setModal(null);
  };

  return (
    <>
      <CloseButton onClick={closeModal}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      <button onClick={handleSuscribir}>Suscríbete</button>
    </>
  );
};

export default ButtonsOptions;
