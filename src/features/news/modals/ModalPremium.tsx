import React, { useEffect, useRef } from 'react';
import { TarjetaModal, DescripcionModal, ImagenModal, TituloModal, ContenedorTexto } from '../styled';
import { SuscribeImage } from '../../../assets';
import useModal from '../contextModal';
import ButtonsOptions from '../modals/buttons/ButtonsOptions';

const ModalPremium: React.FC = () => {
  const { setModal } = useModal();
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      alert('Suscripto!');
      setModal(null);
    }, 1000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [setModal]);

  const handleSuscribir = () => {
    clearTimeout(timerRef.current);
    alert('Suscripto!');
    setModal(null);
  };

  return (
    <TarjetaModal>
      <ButtonsOptions handleSuscribir={handleSuscribir} />
      <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
      <ContenedorTexto>
        <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
        <DescripcionModal>
          Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos.
        </DescripcionModal>
      </ContenedorTexto>
    </TarjetaModal>
  );
};

export default ModalPremium;
