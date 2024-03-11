import { useContext, useState } from 'react';
import { BarrierContext } from '../../context/BarrierContext';

export default function DiagramSVGSmall() {
  const { setColor, multipleElements } = useContext(BarrierContext);

  const { packerQty, glmQty, ssdQty } = multipleElements;

  return <>svg</>;
}
