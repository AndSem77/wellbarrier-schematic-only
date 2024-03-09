import React, { useContext, forwardRef, useState, useEffect } from 'react';
import { Flex, IconButton, Button, Text } from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { BarrierContext } from '../context/BarrierContext';
import moment from 'moment';
import DiagramSVG from './schematic/DiagramSVG';

const ConfigHistory = forwardRef((props, printRef) => {
  const { wellData, setWellData, setComponent } = useContext(BarrierContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // useEffect(() => {
  //   setCurrentConfig(configHistory?.configs[currentIndex]);
  // }, [currentIndex]);

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
          <IconButton
            variant='outline'
            size='xs'
            aria-label='Close history'
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
            isDisabled={currentIndex >= wellData?.cdft?.length - 1}
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
            <Flex flexDir='column' align='center'>
              <Text fontWeight='bold'>{wellData?.wellName}</Text>
              <Text fontSize='xs'>
                {wellData?.cdft[currentIndex]?.configName}
              </Text>
              <Text fontSize='xs'>
                {moment(wellData?.updatedAt).format('DD/MM/YYYY')}
              </Text>
              <Text fontSize='xs'>{`Configuration ${currentIndex + 1} of ${
                wellData?.cdft?.length
              }`}</Text>
            </Flex>
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
