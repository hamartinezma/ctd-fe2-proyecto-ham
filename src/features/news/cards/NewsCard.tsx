import React from 'react';
import useModal from '../contextModal';
import {
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  TarjetaNoticia,
  BotonLectura,
} from '../styled';
import { INoticiasNormalizadas } from '../types';

interface TarjetaNoticiasProps {
  noticia: INoticiasNormalizadas;
}

const TarjetaNoticias: React.FC<TarjetaNoticiasProps> = ({ noticia }) => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(noticia);
  };

  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={noticia.imagen} />
      <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>{noticia.descripcionCorta}</DescripcionTarjetaNoticia>
      <BotonLectura onClick={handleClick}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};

export default TarjetaNoticias;
