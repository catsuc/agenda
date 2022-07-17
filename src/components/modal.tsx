import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface ModalProps {
  title?: string;
  description?: string;
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  handleClose,
  isOpen,
  description,
  title,
  children,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={handleClose} className="relative z-50">
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

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <Dialog.Panel className="relative max-w-xl max-h-full p-12 overflow-y-auto bg-white shadow-lg rounded-2xl">
              {title && (
                <Dialog.Title className="text-3xl font-bold text-gray-900">{title}</Dialog.Title>
              )}
              {description && (
                <Dialog.Description className="mt-1 font-light text-gray-500">
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
