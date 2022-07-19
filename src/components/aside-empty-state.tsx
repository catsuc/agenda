import choseImage from '../assets/choose.svg';

export const AsideEmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 my-auto text-center border border-gray-200 bg-gray-50 rounded-2xl">
      <img className="object-contain w-64 h-64" src={choseImage} />
      <h3 className="mt-6 text-2xl font-bold">Nenhum evento selecionado</h3>
      <p className="font-light">Selecione algum evento para ficar por dentro dos detalhes.</p>
    </div>
  );
};
