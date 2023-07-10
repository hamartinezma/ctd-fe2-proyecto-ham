import React from 'react';
import ModalFree from './ModalLibre';
import ModalPremium from './ModalPremium';
import useModal from '../contextModal';
import { ContenedorModal } from '../styled';

const ModalNoticias: React.FC = () => {
    const { modal } = useModal();

    return (
        <>
            {modal && (
                <ContenedorModal>
                    {modal?.esPremium ? <ModalPremium /> : <ModalFree />}
                </ContenedorModal>
            )}
        </>
    );
};

export default ModalNoticias;
