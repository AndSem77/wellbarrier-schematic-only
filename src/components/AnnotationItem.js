import { useContext, useEffect, useState, useRef } from 'react';
import { BarrierContext } from '../context/BarrierContext';
import Rectangle from './annotations/Rectangle';
import Text from './annotations/Text';
import { useClickAway } from '@uidotdev/usehooks';

export default function AnnotationItem({ item }) {
  const { setIsCurrentAnno } = useContext(BarrierContext);

  const targetRef = useClickAway(() => {
    setIsCurrentAnno(null);
  });

  const renderAnno = (type) => {
    switch (type) {
      case 'text':
        return <Text item={item} />;
        break;
      case 'rectangle':
        return <Rectangle item={item} />;
        break;
      default:
        return null;
    }
  };

  return (
    <div ref={targetRef} onClick={() => setIsCurrentAnno(item)}>
      {renderAnno(item.type)}
    </div>
  );
}
