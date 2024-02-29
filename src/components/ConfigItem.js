import { useContext, useRef } from 'react';
import Popup from 'reactjs-popup';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { EditIcon, DeleteIcon, CopyIcon } from '@chakra-ui/icons';
import { nanoid } from 'nanoid';
import { IoMdCheckmark } from 'react-icons/io';
import { BarrierContext } from '../context/BarrierContext';

export default function ConfigItem({ item }) {
  const {
    currentData,
    setCurrentData,
    handleDelete,
    handleDuplicate,
    setIsCurrent,
    setShowDiagram,
  } = useContext(BarrierContext);
  // console.log(currentData);

  return (
    <div
      className='relative w-full h-24 border rounded flex justify-between p-1 space-x-1 my-1 hover:border-sky-600'
      onDoubleClick={() => {
        setIsCurrent(true);
        setCurrentData((prev) => ({ ...prev, ...item }));
        setShowDiagram(true);

        console.log('curr', item);
      }}
    >
      <div className='w-full h-full text-xs'>{item.configName}</div>
      <div className='w-full h-full bg-gray-50'>svg</div>

      {item?.id === currentData?.id ? (
        <div className='absolute bottom-1 right-2'>
          <IoMdCheckmark />
        </div>
      ) : null}

      <div className='h-full justify-start'>
        <Popup
          // ref={popupRef}
          position='bottom center'
          trigger={
            <div className='p-1 cursor-pointer'>
              <BsThreeDotsVertical />
            </div>
          }
        >
          <div className=' bg-white border rounded-md cursor-pointer'>
            <div
              className='flex w-full items-center hover:bg-[#EDF2F7] px-3 py-1'
              onClick={() => {
                setIsCurrent(true);
                setCurrentData((prev) => ({ ...prev, ...item }));
                setShowDiagram(true);
              }}
            >
              <EditIcon />
              <div className='ml-2 text-xs'>View & Edit</div>
            </div>
            <div
              className='flex w-full items-center hover:bg-[#EDF2F7] px-3 py-1'
              onClick={() => {
                handleDuplicate(item);
              }}
            >
              <CopyIcon />
              <div className='ml-2 text-xs'>Duplicate</div>
            </div>
            <div
              className='flex w-full items-center hover:bg-[#EDF2F7] px-3 py-1'
              onClick={() => {
                handleDelete(item?.id);
              }}
            >
              <DeleteIcon />
              <div className='ml-2 text-xs'>Delete</div>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}
