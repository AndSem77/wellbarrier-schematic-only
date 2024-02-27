import { useContext } from 'react';
import { BarrierContext } from '../context/BarrierContext';
import ConfigItem from './ConfigItem';

export default function ConfigList() {
  const { configs } = useContext(BarrierContext);

  return (
    <>
      {configs?.map((item) => (
        <ConfigItem item={item} key={item?.id} />
      ))}
    </>
  );
}
