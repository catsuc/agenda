import { Label } from './label-form';
import { FiSave } from 'react-icons/fi';
import RadioGroupInputs from './group-radios-inputs';

export const Form: React.FC = () => {
  return (
    <form className="w-full max-w-md transform overflow-hidden bg-white text-left align-middle transition-all">
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
          className='rounded-lg bg-gray-100 outline[#4338ca] mx-1 p-2'
        />
        <section className='flex mt-4 flex-col'>
        <Label
          title='Descrição'
          id='description'
        />
          <textarea
            id="description"
            maxLength={24}
            className='h-24 p-2 mx-1 resize-none outline[#4338ca] bg-gray-100 rounded' />
        </section>  
        <section className='mt-4 mr-8 w-full flex gap-4 justify-between'>
          <div>
            <Label
              title='Começa em'
              id='start'
            />
            <input 
              type="datetime-local" 
              id='start'
              className='h-8 text-gray-900 py-5 w-full ml-1 px-3 rounded-lg bg-gray-100'
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
              className='h-8 text-gray-900 w-full px-3 bg-gray-100 py-5 rounded-lg'
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
        <button className='p-[0.6rem] transition-colors flex gap-2 justify-center items-center hover:bg-[#4f46e5] w-full mt-10 rounded-lg text-white bg-[#6366f1]'
        >
          <FiSave /> Salvar
        </button>
      </div>
    </form>
  );
};

