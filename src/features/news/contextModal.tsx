import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { IModal, INoticiasNormalizadas } from "./types";

const initialState: IModal = {
    modal: null,
    setModal: () => { },
};

interface ModalContextProps {
    children: ReactNode;
}

const ModalContext = createContext<IModal | undefined>(undefined);

export const ModalContextProvider: React.FC<ModalContextProps> = ({ children }) => {
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(initialState.modal);

    const value = useMemo(() => ({
        modal,
        setModal
    }), [modal]);

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};

const useModal = (): IModal => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used within a ModalContextProvider');
    }

    return context;
};

export default useModal;
