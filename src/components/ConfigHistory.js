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
import { useMouse } from '@uidotdev/usehooks';
import { defaultElements } from '../data/defaultElements';
import moment from 'moment';
import TestDiagram from './schematic/TestDiagram';

const ConfigHistory = forwardRef((props, printRef) => {
  const {
    showConfigHistory,
    setShowConfigHistory,
    searchWell,
    setSearchWell,
    setSelectedWell,
    handleSearchConfigHistory,
    currentConfigHistory,
    setCurrentConfigHistory,
  } = useContext(BarrierContext);
  const { register, handleSubmit, control, watch, setValue } = useForm({
    defaultValues: {},
  });
  const [showDropdown, setShowDropdown] = useState(true);
  const [currentConfig, setCurrentConfig] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const configDate = currentConfigHistory?.configs[currentIndex]?.updatedAt;
  const formattedDate = moment(configDate).format('DD/MM/YYYY');

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    setCurrentConfig(currentConfigHistory?.configs[currentIndex]);
  }, [currentIndex]);

  console.log('curr his', currentConfigHistory);

  // if (e.key === 'Enter') {
  //   console.log('enter');
  // }

  return (
    <>
      <Flex w='640px' flexDir='column'>
        <Flex
          w='640px'
          justify='space-between'
          align='center'
          overflowY
          zIndex={40}
          mb={2}
        >
          <Flex p={0.5}>
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
                    handleSearchConfigHistory();
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
              onClick={handleSearchConfigHistory}
            />
          </Flex>

          <IconButton
            variant='outline'
            size='xs'
            aria-label='Close history'
            icon={<SmallCloseIcon />}
            onClick={() => {
              setCurrentConfigHistory(null);
              setShowConfigHistory(false);
              // setIsCurrent(false);
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
            isDisabled={
              currentIndex >= currentConfigHistory?.configs?.length - 1
            }
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
          <div className='p-2 w-full flex justify-center min-h-[86px]'>
            {/* <div className='w-full flex'>
              <InputGroup
                size='sm'
                borderRadius='5px'
                onClick={() => setShowDropdown(true)}
              >
                <Input
                  placeholder='Select well'
                  borderRadius='5px'
                  {...register('searchWell', {
                    onChange: (e) => setSearchWell(e.target.value),
                  })}
                />
                <InputRightElement w='3rem'>
                  <SmallCloseIcon
                    onClick={() => {
                      setSearchWell('');
                      setSelectedWell('');
                    }}
                  />
                  <ChevronDownIcon ml={2} />
                </InputRightElement>
              </InputGroup>
              <IconButton
                size='sm'
                aria-label='Search database'
                icon={<SearchIcon />}
              />
            </div> */}

            {currentConfigHistory ? (
              <Flex flexDir='column' align='center'>
                <Text fontWeight='bold'>{currentConfigHistory?.wellName}</Text>
                <Text fontSize='xs'>
                  {currentConfigHistory?.configs[currentIndex]?.configName}
                </Text>
                <Text fontSize='xs'>{formattedDate}</Text>
                <Text fontSize='xs'>{`Configuration ${currentIndex + 1} of ${
                  currentConfigHistory?.configs?.length
                }`}</Text>
              </Flex>
            ) : null}
          </div>
          <div
            className='grid grid-cols-12 w-full h-full bg-slate-50'
            onContextMenu={(e) => {
              e.preventDefault();
            }}
          >
            svg here
          </div>
        </div>
      </div>
    </>
  );
});

export default ConfigHistory;
