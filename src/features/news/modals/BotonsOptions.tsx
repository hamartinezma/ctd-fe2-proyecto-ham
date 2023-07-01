import { Dispatch, SetStateAction } from "react";
import { CloseButton as Close } from "../../../assets";
import { IModal } from "../types";
import { CloseButton, BotonSuscribir } from "../styled";

interface IProps {
  setModal: Dispatch<SetStateAction<IModal>>;
}

const ModalBotonCerrar = ({ setModal }: IProps) => {
  return (
    <CloseButton onClick={() => setModal({ noticia: null, visible: false })}>
      <img src={Close} alt="close-button" />
    </CloseButton>
  );
};

const BotonSubscripcion = ({ setModal }: IProps) => {
  return (
    <BotonSuscribir
      onClick={() =>
        setTimeout(() => {
          alert("Suscripto!");
          setModal({ noticia: null, visible: false });
        }, 1000)
      }
    >
      Suscríbete
    </BotonSuscribir>
  );
};

export { ModalBotonCerrar, BotonSubscripcion };
