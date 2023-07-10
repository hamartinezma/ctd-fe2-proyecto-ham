import { useEffect, useState } from "react";
import { obtenerNoticias } from "../../mocks/fakeRest";
import {
  ContenedorNoticias,
  TituloNoticias,
} from "./styled";
import { INoticiasNormalizadas } from "./types";
import { normalizarNoticia } from "./utils";
import ListadoNoticias from "./../news/NewsList";
import { ModalContextProvider } from "./contextModal";
import ModalNoticias from "./modals/ModalNoticias";



const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);


  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((noticia) => {
        return normalizarNoticia(noticia)
      });
      setNoticias(data);
    };
    obtenerInformacion();
  }, []);

  return (
    <ModalContextProvider>
      <ContenedorNoticias>
        <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
        <ListadoNoticias noticias={noticias} />
        <ModalNoticias />
      </ContenedorNoticias>
    </ModalContextProvider>
  );
};



export default Noticias;
