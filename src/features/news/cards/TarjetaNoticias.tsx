import { Dispatch, SetStateAction } from "react";
import { IModal, INoticiasNormalizadas } from "../types";
import {
  BotonLectura,
  DescripcionTarjetaNoticia,
  FechaTarjetaNoticia,
  ImagenTarjetaNoticia,
  TarjetaNoticia,
  TituloTarjetaNoticia,
} from "../styled";

interface IProps {
  noticia: INoticiasNormalizadas;
  setModal: Dispatch<SetStateAction<IModal>>;
}

const TarjetaNoticias = ({ noticia, setModal }: IProps) => {
  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={noticia.imagen} />
      <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>
        {noticia.descripcionCorta}
      </DescripcionTarjetaNoticia>
      <BotonLectura
        onClick={() => {
          setModal({ noticia: noticia, visible: true });
        }}
      >
        Ver más
      </BotonLectura>
    </TarjetaNoticia>
  );
};

export default TarjetaNoticias;