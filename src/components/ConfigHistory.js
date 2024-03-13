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
import { ChevronLeftIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { BarrierContext } from '../context/BarrierContext';
import { useForm, useFieldArray } from 'react-hook-form';
import _ from 'lodash';
import DiagramSVGwithCDFT from './schematic/DiagramSVGwithCDFT';
import moment from 'moment';

const ConfigHistory = forwardRef((props, printRef) => {
  const {
    setComponent,
    wellData,
    setWellData,
    currentConfig,
    setCurrentConfig,
    handleSaveCdft,
  } = useContext(BarrierContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log('config', currentConfig);

  useEffect(() => {
    setCurrentConfig(wellData?.configs[currentIndex]);
  }, [currentIndex]);

  const { register, handleSubmit, control, watch, setValue } = useForm({
    defaultValues: {
      barrierElements: [],
      equipmentStatus: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'equipment',
  });

  const equipmentStatus = watch('equipment');

  const popupRef = useRef();
  const closePopup = () => popupRef.current.close();

  const capitalizeFirst = (str) => {
    const words = str.split(' ');
    const capWords = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(' ');
    return capWords;
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // const handleSaveCdft = (data) => console.log('form', data);

  const setColor = (name) => {
    if (currentConfig) {
      let el = currentConfig?.barrierElements?.find(
        (item) => item?.name === name
      );

      if (el) {
        if (el.quantity === 0) {
          return 'none';
        } else if (el.barrier === 'primary') {
          return 'blue';
        } else if (el.barrier === 'secondary') {
          return 'red';
        } else if (el.barrier === 'none') {
          return 'black';
        } else {
          return 'none';
        }
      }
    }
  };

  useEffect(() => {
    setColor();
  }, [currentConfig]);

  return (
    <form
      id='diagramForm'
      onSubmit={handleSubmit(handleSaveCdft)}
      autoComplete='off'
    >
      <Flex w='640px' flexDir='column'>
        <Flex w='640px' justify='space-between' overflowY zIndex={40} mb={3}>
          <Button
            variant='solid'
            colorScheme='blue'
            size='sm'
            type='submit'
            form='diagramForm'
          >
            Save CDFT
          </Button>
          <IconButton
            variant='outline'
            size='xs'
            aria-label='Close diagram'
            icon={<SmallCloseIcon />}
            onClick={() => {
              setComponent(null);
              setWellData(null);
            }}
          />
        </Flex>
        <Flex w='full' justify='space-between' my={2}>
          <Button size='xs' onClick={handlePrev} isDisabled={currentIndex <= 0}>
            Prev
          </Button>
          <Button
            size='xs'
            onClick={handleNext}
            isDisabled={currentIndex >= wellData?.configs?.length - 1}
          >
            Next
          </Button>
        </Flex>
      </Flex>
      <div ref={printRef} id='diagram'>
        <div
          // ref={drop}
          className='flex flex-col w-full h-[1040px] border overflow-y-auto scrollbar-hide'
        >
          <div className='p-2 border-b flex flex-col items-center'>
            <Text fontWeight='bold'>{wellData?.wellName}</Text>
            <Text fontSize='xs'>
              Configuration: {currentConfig?.configName}
            </Text>
            <Text fontSize='xs'>
              Date: {moment(currentConfig?.updatedAt).format('DD/MM/YYYY')}
            </Text>
            <Text fontSize='xs'>{`Configuration ${currentIndex + 1} of ${
              wellData?.configs?.length
            }`}</Text>
          </div>
          <div
            className='grid grid-cols-1 w-full h-full'
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          >
            <div
              // ref={containerRef}
              className='relative col-span-6 m-4 snapContainer flex justify-center'
            >
              <DiagramSVGwithCDFT setColor={setColor} />
            </div>

            {/* status table start */}
            {/* <div className='col-span-6 m-4'>
              <div className='grid grid-cols-12 border h-5'>
                <div className='flex items-center justify-center col-span-1 border-r text-xs font-bold'>
                  No.
                </div>
                <div className='flex items-center col-span-8 border-r text-xs ml-1 font-bold'>
                  Well Barrier Element
                </div>
                <div className='flex w-full h-full justify-center items-center col-span-3  text-xs font-bold'>
                  Status
                </div>
              </div>
              {equipment?.map((item, index) => (
                <div
                  key={item.id}
                  className='grid grid-cols-12 border-b border-l border-r h-5 hover:bg-slate-100'
                >
                  <div className='flex items-center justify-center col-span-1 border-r text-[8px]'>
                    {index + 1}
                  </div>
                  <div className='flex items-center col-span-8  text-[8px]'>
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
                          className='flex w-full h-full justify-center items-center col-span-3 text-xs cursor-pointer border-l-4 border-l-[#0000ff]'
                        >
                          {_.upperFirst(item.barrier)}
                        </div>
                      ) : item.barrier === 'secondary' ? (
                        <div
                          style={{
                            fontSize: '8px',
                          }}
                          className='flex w-full h-full justify-center items-center col-span-3  text-xs cursor-pointer border-l-4 border-l-[#ff0000]'
                        >
                          {_.upperFirst(item.barrier)}
                        </div>
                      ) : item.barrier === 'none' ? (
                        <div
                          style={{
                            fontSize: '8px',
                          }}
                          className='flex w-full h-full justify-center items-center col-span-3  text-xs cursor-pointer '
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
                            {...register(`barrierElements.${index}.barrier`)}
                          >
                            <Text fontSize='10px'>Primary</Text>
                          </Radio>

                          <Radio
                            value='secondary'
                            colorScheme='red'
                            size='sm'
                            {...register(`barrierElements.${index}.barrier`)}
                          >
                            <Text fontSize='10px'>Secondary</Text>
                          </Radio>
                          <Radio
                            value='none'
                            colorScheme='gray'
                            size='sm'
                            {...register(`barrierElements.${index}.barrier`)}
                            onChange={(e) => {
                              if (e.target.value === 'none') {
                                setValue(
                                  `barrierElements.${index}.quantity`,
                                  0
                                );
                                setValue(
                                  `barrierElements.${index}.barrier`,
                                  'none'
                                );
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
                      {...register(`barrierElements.${index}.quantity`, {
                        valueAsNumber: true,
                      })}
                    />
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </form>
  );
});

export default ConfigHistory;
