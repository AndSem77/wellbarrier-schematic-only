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
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { BarrierContext } from '../context/BarrierContext';
import { nanoid } from 'nanoid';
import AnnotationList from './AnnotationList';
import { useForm, useFieldArray } from 'react-hook-form';
import _ from 'lodash';

import moment from 'moment';

import DiagramSVG from './schematic/DiagramSVG';

const ConfigHistory = forwardRef((props, printRef) => {
  const {
    configHistory,
    setConfigHistory,
    setComponent,
    currentConfig,
    setCurrentConfig,
  } = useContext(BarrierContext);
  const { register, handleSubmit, control, watch, setValue } = useForm({
    defaultValues: {},
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // const configDate = configHistory?.configs[currentIndex]?.updatedAt;
  // const formattedDate = moment(configDate).format('DD/MM/YYYY');

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    setCurrentConfig(configHistory?.configs[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <Flex w='640px' flexDir='column'>
        <Flex
          w='640px'
          justify='end'
          align='center'
          overflowY
          zIndex={40}
          mb={2}
        >
          {/* <Flex p={0.5}>
            <InputGroup w='300px' size='sm' borderRadius='5px'>
              <Input
                placeholder='Search'
                borderRadius='5px'
                value={searchWell}
                {...register('searchWell', {
                  onChange: (e) => setSearchWell(e.target.value.toLowerCase()),
                })}
                onKeyDown={(e) => {
                  if (searchWell && e.key === 'Enter') {
                    handleConfigHistory();
                  }
                }}
              />
              <InputRightElement w='3rem'>
                <SmallCloseIcon
                  onClick={() => {
                    setSearchWell('');
                    setSelectedWell('');
                  }}
                />
              </InputRightElement>
            </InputGroup>
            <IconButton
              // isLoading
              ml={3}
              size='sm'
              aria-label='Search database'
              icon={<SearchIcon />}
              onClick={handleConfigHistory}
            />
          </Flex> */}

          <IconButton
            variant='outline'
            size='xs'
            aria-label='Close history'
            icon={<SmallCloseIcon />}
            onClick={() => {
              setComponent(null);
              setCurrentConfig(null);
              setConfigHistory(null);
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
            isDisabled={currentIndex >= configHistory?.configs?.length - 1}
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
          <div className='p-2 w-full flex justify-center min-h-[86px] mb-6'>
            {/* {configHistory ? (
              <Flex flexDir='column' align='center'>
                <Text fontWeight='bold'>{configHistory?.wellName}</Text>
                <Text fontSize='xs'>
                  {configHistory?.configs[currentIndex]?.configName}
                </Text>
                <Text fontSize='xs'>{formattedDate}</Text>
                <Text fontSize='xs'>{`Configuration ${currentIndex + 1} of ${
                  configHistory?.configs?.length
                }`}</Text>
              </Flex>
            ) : null} */}
          </div>
          <div
            className='flex w-full h-full justify-center items-start'
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          >
            <DiagramSVG />
          </div>
        </div>
      </div>
    </>
  );
});

export default ConfigHistory;
