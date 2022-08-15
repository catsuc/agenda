interface LabelProps {
  title: string
  id: string
}
export const Label: React.FC<LabelProps> = ({title, id}) => {
  return (
    <label
    htmlFor={id}
    className='w-32 mb-2 mx-1'
    >
      {title}
    </label>
  );
};
