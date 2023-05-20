import { IGenericListProps } from '@/components/GenericList/GenericList.types';

const GenericList = (props: IGenericListProps) => {
  const { list } = props;

  return (
    <>
      {list.map(({ As = 'div', text, onClick = () => {}, className, id, href }) => (
        <As className={className} onClick={() => onClick(id)} key={id} href={href}>
          {text}
        </As>
      ))}
    </>
  );
};

export default GenericList;
