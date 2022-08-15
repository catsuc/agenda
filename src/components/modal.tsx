import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {FiX} from "react-icons/fi";

interface ModalProps {
  setModalOpen: (value: boolean) => void
  title?: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialFocus?: React.MutableRefObject<HTMLElement | null>;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose: handleClose,
  description,
  initialFocus,
  title,
  setModalOpen,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={handleClose} className="relative z-50" initialFocus={initialFocus}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 mx-2 flex items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <Dialog.Panel className="relative max-w-xl max-h-full p-10 overflow-y-auto bg-white shadow-lg rounded-2xl">
              <div className='flex justify-end'><FiX className='text-2xl cursor-pointer' onClick={() => setModalOpen(false)} /></div>
              {title && (
                <Dialog.Title className="text-3xl mx-1 font-bold text-gray-900">{title}</Dialog.Title>
              )}
              {description && (
                <Dialog.Description className="mt-1 mx-1 font-light text-gray-500">
                  {description}
                </Dialog.Description>
              )}
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
