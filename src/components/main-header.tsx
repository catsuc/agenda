import { FiArrowLeft, FiArrowRight, FiCalendar, FiPlus } from 'react-icons/fi';

import { getDateFormatted } from '../utils/date-utils';

interface MainHeaderProps {
  modalOpen: boolean,
  setModalOpen: (status: boolean) => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({modalOpen, setModalOpen}) => {
  return (
    <header className="flex items-center justify-between gap-2 md:gap-4 px-4 sm:px-6 md:px-8 py-4 text-white bg-indigo-500 md:flex-row">
      <div className="flex items-center px-3 py-1.5 rounded-lg gap-2 bg-white/20 text-base">
        <FiCalendar />
        <span className="hidden sm:block">{getDateFormatted(new Date())}</span>
        <span className="block sm:hidden">{getDateFormatted(new Date(), true)}</span>
      </div>

      <div className="flex gap-2 items-center">
        <button
          className="flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg bg-white/20 transition-colors hover:bg-white/30 disabled:cursor-not-allowed disabled:hover:bg-white/20 disabled:opacity-60"
          onClick={() => setModalOpen(!modalOpen)}
        >
          <FiPlus className="h-6" />
          <span className="hidden sm:block">Adicionar Evento</span>
        </button>
        <button
          className="px-3 py-1.5 rounded-lg bg-white/20 transition-colors hover:b       :cursor-not-allowed disabled:hover:bg-white/20 disabled:opacity-60"
          disabled
        >
          <FiArrowLeft className="h-6" />
        </button>
        <button
          className="px-3 py-1.5 rounded-lg bg-white/20 transition-colors hover:bg-white/30 disabled:cursor-not-allowed disabled:hover:bg-white/20 disabled:opacity-60"
          disabled
        >
          <FiArrowRight className="h-6" />
        </button>
      </div>
    </header>
  );
};
