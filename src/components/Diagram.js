import React, {
  useContext,
  forwardRef,
  useState,
  useEffect,
  useRef,
} from 'react';
import Popup from 'reactjs-popup';

import {
  Flex,
  IconButton,
  Input,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { BarrierContext } from '../context/BarrierContext';
import { nanoid } from 'nanoid';
import { useDrop, useDrag } from 'react-dnd';
import AnnotationList from './AnnotationList';
import { useForm, useFieldArray } from 'react-hook-form';
import _ from 'lodash';
import { useMouse } from '@uidotdev/usehooks';
import { defaultElements } from '../data/defaultElements';
import Xmas from './schematic/Xmas';
import TestDiagram from './schematic/TestDiagram';

const Diagram = forwardRef((props, printRef) => {
  // const [mouse, containerRef] = useMouse();

  const {
    currentData,
    setCurrentData,
    handleCreateTemplate,
    setShowDiagram,
    isCurrent,
    setIsCurrent,
    updateBarriers,
  } = useContext(BarrierContext);

  // const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  // console.log('mouse coords', mouseCoords);

  // const handleMouseMove = (event) => {
  //   setMouseCoords({
  //     x: event.clientX - event.target.offsetLeft,
  //     y: event.clientY - event.target.offsetTop,
  //   });
  // };

  const { register, handleSubmit, control, watch, setValue } = useForm({
    defaultValues: {
      name: isCurrent ? currentData?.name : '',
      elements: isCurrent ? currentData?.barrierElements : defaultElements,
    },
  });

  const popupRef = useRef();
  const closePopup = () => popupRef.current.close();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'elements',
  });

  const capitalizeFirst = (str) => {
    const words = str.split(' ');

    const capWords = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(' ');

    return capWords;
  };

  const barrierElements = watch('elements');

  useEffect(() => {
    setCurrentData((prev) => ({ ...prev, barrierElements }));
  }, [barrierElements]);

  // useEffect(() => {
  //   if (isCurrent) {
  //     setValue('name', currentData?.name);
  //     setValue('elements', currentData?.barrierElements);
  //   }
  // }, [isCurrent, currentData]);

  useEffect(() => {
    if (updateBarriers) {
      setValue('elements', currentData?.barrierElements);
    }
  }, [updateBarriers]);

  const onSubmit = (data) => console.log('form', data);

  return (
    // handleCreateTemplate
    <form id='diagramForm' onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
      <Flex w='640px' flexDir='column'>
        <Flex w='640px' justify='space-between' overflowY zIndex={40} mb={3}>
          <Button
            variant='solid'
            colorScheme='blue'
            size='sm'
            type='submit'
            form='diagramForm'
          >
            Save Diagram
          </Button>
          <IconButton
            variant='outline'
            size='xs'
            aria-label='Close diagram'
            icon={<SmallCloseIcon />}
            onClick={() => {
              setCurrentData(null);
              setShowDiagram(false);
              setIsCurrent(false);
            }}
          />
        </Flex>
      </Flex>
      <div ref={printRef} id='diagram'>
        <div
          // ref={drop}
          className='flex flex-col w-full h-[1040px] border overflow-y-auto scrollbar-hide'
        >
          <div className='p-2 border-b'>
            <Input
              placeholder='Diagram Name'
              variant='unstyled'
              textAlign='center'
              className='font-bold'
              {...register('name', {
                required: true,
              })}
            />
          </div>
          <div
            className='grid grid-cols-12 w-full h-full'
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          >
            <div
              // ref={containerRef}
              className='relative border col-span-6 m-4 snapContainer flex'
            >
              {/* {true ? <Xmas /> : 'current'} */}
              {true ? <TestDiagram /> : 'current'}
            </div>
            <div className='col-span-6 m-4 border'>
              <div className='grid grid-cols-12 border-b h-5'>
                <div className='flex items-center justify-center col-span-1 border-r text-xs font-bold'>
                  No.
                </div>
                <div className='flex items-center col-span-7 border-r text-xs ml-1 font-bold'>
                  Well Barrier Element
                </div>
                <div className='flex w-full h-full justify-center items-center col-span-3 border-r text-xs font-bold'>
                  Barrier
                </div>
                <div className='flex items-center justify-center col-span-1 text-xs font-bold'>
                  Qty
                </div>
              </div>
              {barrierElements?.map((item, index) => (
                <div
                  key={item.id}
                  className='grid grid-cols-12 border-b h-5 hover:bg-slate-100'
                >
                  <div className='flex items-center justify-center col-span-1 border-r text-[8px]'>
                    {index + 1}
                  </div>
                  <div className='flex items-center col-span-7 border-r text-[8px]'>
                    <span className='ml-1'>{capitalizeFirst(item.name)}</span>
                  </div>

                  <Popup
                    ref={popupRef}
                    position='bottom center'
                    trigger={
                      item.barrier === 'primary' ? (
                        <div
                          style={{
                            fontSize: '8px',
                          }}
                          className='flex w-full h-full justify-center items-center col-span-3 border-r text-xs cursor-pointer border-l-4 border-l-[#0000ff]'
                        >
                          {_.upperFirst(item.barrier)}
                        </div>
                      ) : item.barrier === 'secondary' ? (
                        <div
                          style={{
                            fontSize: '8px',
                          }}
                          className='flex w-full h-full justify-center items-center col-span-3 border-r text-xs cursor-pointer border-l-4 border-l-[#ff0000]'
                        >
                          {_.upperFirst(item.barrier)}
                        </div>
                      ) : item.barrier === 'none' ? (
                        <div
                          style={{
                            fontSize: '8px',
                          }}
                          className='flex w-full h-full justify-center items-center col-span-3 border-r text-xs cursor-pointer '
                        >
                          {_.upperFirst(item.barrier)}
                        </div>
                      ) : (
                        'none'
                      )
                    }
                  >
                    <div className='bg-slate-100 w-[100px] text-[10px] p-2 -ml-[1px] -mt-[7px]'>
                      <RadioGroup onChange={closePopup}>
                        <Stack direction='column' spacing='1'>
                          <Radio
                            value='primary'
                            colorScheme='blue'
                            size='sm'
                            {...register(`elements.${index}.barrier`)}
                            // onChange={(e) => {
                            //   if (e.target.value === 'primary') {
                            //     setValue(`elements.${index}.quantity`, 1);
                            //     setValue(
                            //       `elements.${index}.barrier`,
                            //       'primary'
                            //     );
                            //   }
                            //   if (e.target.value === 'none') {
                            //     setValue(`elements.${index}.quantity`, 0);
                            //     setValue(`elements.${index}.barrier`, 'none');
                            //   }
                            // }}
                          >
                            <Text fontSize='10px'>Primary</Text>
                          </Radio>

                          <Radio
                            value='secondary'
                            colorScheme='red'
                            size='sm'
                            {...register(`elements.${index}.barrier`)}
                            onChange={(e) => {
                              if (e.target.value === 'secondary') {
                                setValue(`elements.${index}.quantity`, 1);
                                setValue(
                                  `elements.${index}.barrier`,
                                  'secondary'
                                );
                              }
                              if (e.target.value === 'none') {
                                setValue(`elements.${index}.quantity`, 0);
                                setValue(`elements.${index}.barrier`, 'none');
                              }
                            }}
                          >
                            <Text fontSize='10px'>Secondary</Text>
                          </Radio>
                          <Radio
                            value='none'
                            colorScheme='gray'
                            size='sm'
                            {...register(`elements.${index}.barrier`)}
                            onChange={(e) => {
                              if (e.target.value === 'none') {
                                setValue(`elements.${index}.quantity`, 0);
                                setValue(`elements.${index}.barrier`, 'none');
                              }
                            }}
                          >
                            <Text fontSize='10px'>None</Text>
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </div>
                  </Popup>

                  <div className='flex items-center justify-center col-span-1 text-[8px]'>
                    <Input
                      textAlign='center'
                      size='8px'
                      variant='unstyled'
                      type='number'
                      {...register(`elements.${index}.quantity`, {
                        valueAsNumber: true,
                      })}
                      onChange={(e) => {
                        if (e.target.value <= 0) {
                          setValue(`elements.${index}.barrier`, 'none');
                        }
                        // if (e.target.value > 0) {
                        //   setValue(`elements.${index}.barrier`, 'secondary');
                        // }
                      }}
                    />
                  </div>
                </div>
              ))}
              {/* <div className='flex justify-end m-3 saveTemplateBtn'>
                <Button
                  variant='solid'
                  colorScheme='blue'
                  size='sm'
                  type='submit'
                  form='diagramForm'
                >
                  Save Template
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
});

export default Diagram;
