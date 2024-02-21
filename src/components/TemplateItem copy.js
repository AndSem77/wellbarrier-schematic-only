import { useContext, useEffect, useRef } from 'react';
import {
  Flex,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CopyIcon } from '@chakra-ui/icons';
import { useDrag } from 'react-dnd';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BarrierContext } from '../context/BarrierContext';
import Popup from 'reactjs-popup';
import { IoMdCheckmark } from 'react-icons/io';

export default function TemplateItem({ template }) {
  const {
    currentData,
    setCurrentData,
    handleDelete,
    handleDuplicate,
    setIsCurrent,
    setShowDiagram,
  } = useContext(BarrierContext);

  const popupRef = useRef();
  const closePopup = () => popupRef.current.close();

  const { elements } = template;

  const setColor = (element) => {
    let current = elements?.find((item) => item.element === element);

    if (current) {
      if (current.barrier === 'primary') {
        return '#2C5282';
      } else if (current.barrier === 'secondary') {
        return '#C53030';
      } else {
        return 'none';
      }
    }
  };

  const { id, name } = template;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'template',
    template,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      className='relative grid grid-cols-12 w-full h-[100px] border my-1 rounded-md max-w-[202px] hover:border-blue-800 cursor-pointer'
      onDoubleClick={(e) => {
        setIsCurrent(true);
        setCurrentData((prev) => ({ ...prev, ...template }));
        setShowDiagram(true);
      }}
    >
      <div className='col-span-7 h-full p-1 text-xs'>{name}</div>
      <div className='col-span-4 h-full'>
        <svg
          width='50%'
          height='100%'
          viewBox='0 0 308 724'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='dummy'>
            <rect
              id='crown valve'
              width='308'
              height='308'
              fill={setColor('crown valve')}
            />
            <rect
              id='kill-wing-valve'
              x='33'
              width='242'
              height='432'
              fill={setColor('kill wing valve')}
            />
            <rect
              id='sliding-side-door'
              x='61'
              width='186'
              height='724'
              fill={setColor('sliding side door')}
            />
          </g>
        </svg>
      </div>
      <div className='col-span-1 flex justify-center'>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            variant='ghost'
            icon={<BsThreeDotsVertical />}
            size='xs'
            marginRight='6px'
          />
          <MenuList className='text-xs '>
            <MenuItem
              icon={<EditIcon />}
              className='hover:bg-slate-100 text-xs max-w-[120px] h-6'
              onClick={() => {
                setIsCurrent(true);
                setCurrentData((prev) => ({ ...prev, ...template }));
                setShowDiagram(true);
              }}
            >
              View & Edit
            </MenuItem>
            <MenuItem
              icon={<CopyIcon />}
              className='hover:bg-slate-100 max-w-[120px] h-6'
              onClick={() => {
                handleDuplicate(template);
              }}
            >
              Duplicate
            </MenuItem>

            <MenuItem
              icon={<DeleteIcon />}
              className='hover:bg-slate-100 max-w-[120px] h-6'
              onClick={() => handleDelete(id)}
            >
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      {template?.id === currentData?.id ? (
        <div className='absolute bottom-1 right-1'>
          <IoMdCheckmark />
        </div>
      ) : null}
    </div>
  );
}
