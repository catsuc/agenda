import { Dialog, Transition } from '@headlessui/react';
import { Label } from './label-form';
import {FiX} from "react-icons/fi";
import RadioGroupInputs from './group-radios-inputs';

export const Form: React.FC = () => {
  return (
    <form className="w-full max-w-md transform overflow-hidden  bg-white text-left align-middle transition-all">
      <div className='flex flex-col mt-4 text-gray-500'>
        <Label
          title='Título'
          id='title'
        />
        <input
          type="text"
          id='title'
          minLength={4}
          maxLength={24}
          className='rounded bg-gray-100 outline-gray-900 p-2'
        />
        <section className='flex mt-4 flex-col'>
        <Label
          title='Descrição'
          id='description'
        />
          <textarea
            id="description"
            maxLength={24}
            className='h-24 p-2 resize-none outline-gray-900 bg-gray-100 rounded' />
        </section>  
        <section className='mt-4 flex gap-2'>
          <div className='w-full'>
            <Label
              title='Começa em'
              id='start'
            />
            <input 
              type="datetime-local" 
              id='start'
              className='h-8 min-w-lg text-gray-900 px-1 py-5 rounded bg-gray-100'
              required
            />
          </div>
          <div>
            <Label
              title='Termina em'
              id='end'
            />
            <input
              type="datetime-local"
              id='end'
              className='h-8 text-gray-900 bg-gray-100 px-1 py-5 rounded'
              required
            />
          </div>
        </section>
        <section className='flex mt-4 flex-col'>
          <Label
            title='Estilo do evento'
            id='style-event'
          />
          <RadioGroupInputs />
        </section>
      </div>
    </form>
  );
};

