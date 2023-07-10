import React from 'react';
import TarjetaNoticias from './cards/NewsCard';
import { ListaNoticias } from './styled';
import { INoticiasNormalizadas } from './types';

interface ListadoNoticiasProps {
  noticias: INoticiasNormalizadas[];
}

const ListadoNoticias: React.FC<ListadoNoticiasProps> = ({ noticias }) => {
  return (
    <ListaNoticias>
      {noticias.map((noticia) => (
        <TarjetaNoticias noticia={noticia} key={noticia.id} />
      ))}
    </ListaNoticias>
  );
};

export default ListadoNoticias;
