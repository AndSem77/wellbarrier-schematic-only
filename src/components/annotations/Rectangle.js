import { useEffect, useState, useRef, useContext } from 'react';
import { useClickAway } from '@uidotdev/usehooks';
import Moveable from 'react-moveable';
import { BarrierContext } from '../../context/BarrierContext';

export default function Rectangle({ item }) {
  const { isCurrentAnno, setIsCurrentAnno } = useContext(BarrierContext);
  const targetRef = useRef(null);
  const moveableRef = useRef(null);

  // console.log('c', isCurrentAnno);
  return (
    <>
      {item.id === isCurrentAnno?.id ? (
        <>
          <div
            style={{
              position: 'absolute',
              left: `${item?.position?.x}px`,
              top: `${item?.position?.y}px`,
              width: `${item?.size?.width}px`,
              height: `${item?.size?.height}px`,
              borderColor: 'black',
              borderWidth: '1px',
              backgroundColor: item?.backgroundColor,
              transform: `rotate(${item?.rotation}deg)`,
            }}
            ref={targetRef}
            onDoubleClick={(e) => console.log(e.target.getBoundingClientRect())}
          >
            move
          </div>
          <Moveable
            roundable={true}
            ref={moveableRef}
            target={targetRef}
            draggable={true}
            resizable={true}
            throttleResize={1}
            renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
            throttleDrag={1}
            edgeDraggable={false}
            startDragRotate={0}
            throttleDragRotate={0}
            snappable={true}
            snapContainer={'.snapContainer'}
            bounds={{ left: 0, top: 0, right: 0, bottom: 0, position: 'css' }}
            // set position start
            onDrag={(e) => {
              e.target.style.transform = e.transform;
            }}
            onDragEnd={(e) => {
              console.log(e.target.getBoundingClientRect());
              // console.log(e);
            }}
            // set position end

            // set size start
            onResize={(e) => {
              e.target.style.width = `${e.width}px`;
              e.target.style.height = `${e.height}px`;
              e.target.style.transform = e.drag.transform;
            }}
            onResizeEnd={(e) =>
              setIsCurrentAnno((prev) => ({
                ...prev,
                size: {
                  width: e?.lastEvent?.width,
                  height: e?.lastEvent?.height,
                },
              }))
            }
            // set size end

            //set rotation start
            onRotate={(e) => {
              e.target.style.transform = e.drag.transform;
            }}
            onRotateEnd={(e) => {
              setIsCurrentAnno((prev) => ({
                ...prev,
                rotation: e?.lastEvent?.rotation,
              }));
            }}
            // set rotation end

            rotatable={true}
            throttleRotate={0}
            rotationPosition={'top'}
            snapRotationDegrees={[0, 45, 90, 135, 180, 225, 270, 315]}
          />
        </>
      ) : (
        <div
          // className='w-16 h-16 border-gray-700 border absolute flex items-center justify-center'
          style={{
            position: 'absolute',
            left: `${item?.position?.x}px`,
            top: `${item?.position?.y}px`,
            width: `${item?.size?.width}px`,
            height: `${item?.size?.height}px`,
            borderColor: 'black',
            borderWidth: '1px',
            backgroundColor: item?.backgroundColor,
            transform: `rotate(${item?.rotation}deg)`,
          }}
          onClick={() => setIsCurrentAnno(true)}
        >
          div
        </div>
      )}
    </>
  );
}
