import React from 'react';
import { TarjetaModal, DescripcionModal, ImagenModal, TituloModal, ContenedorTexto, CloseButton } from '../styled';
import { CloseButton as Close } from '../../../assets';
import useModal from '../contextModal';

const ModalFree: React.FC = () => {
  const { modal, setModal } = useModal();

  const closeModal = () => {
    setModal(null);
  };

  return (
    <TarjetaModal>
      <CloseButton onClick={closeModal}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      <ImagenModal src={modal?.imagen} alt="news-image" />
      <ContenedorTexto>
        <TituloModal>{modal?.titulo}</TituloModal>
        <DescripcionModal>{modal?.descripcion}</DescripcionModal>
      </ContenedorTexto>
    </TarjetaModal>
  );
};

export default ModalFree;
