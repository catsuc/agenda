import { useState } from "react";
import { MainHeader } from "../components/main-header";
import { Modal } from "../components/modal";
import { Form } from '../components/Form';
export const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <>
      <MainHeader
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => {}}
        title='Criar Evento'
        description='Crie eventos na sua agenda para manter seu dia organizado.'
        children={
          <Form />
        }
      />
    </>
   
  );
};
