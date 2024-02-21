import { useContext } from 'react';
import { BarrierContext } from '../../context/BarrierContext';

export default function DummyRect() {
  const { dummy, setDummy } = useContext(BarrierContext);
  return (
    <div
      style={{
        width: `${dummy?.size?.width}px`,
        height: `${dummy?.size?.height}px`,
        backgroundColor: `${dummy?.background?.color}`,
        borderWidth: `${dummy?.border?.width}px`,
        borderColor: `${dummy?.border?.color}`,
        position: 'absolute',
        left: `${dummy?.position?.x}px`,
        top: `${dummy?.position?.y}px`,
        transform: `rotate(${dummy.rotation}deg)`,
      }}
    ></div>
  );
}
