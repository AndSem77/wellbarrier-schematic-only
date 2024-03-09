import { useContext, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import {
  Flex,
  IconButton,
  HStack,
  Button,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';

import { AddIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { BsPrinterFill } from 'react-icons/bs';
import ReactToPrint from 'react-to-print';
import { BarrierContext } from './context/BarrierContext';
import DiagramList from './components/ConfigList';
import { nanoid } from 'nanoid';
import _ from 'lodash';
import { PiFilePngFill } from 'react-icons/pi';
import { PiTextTFill } from 'react-icons/pi';
import { MdEdit } from 'react-icons/md';
import DesignPanel from './components/DesignPanel';
import Popup from 'reactjs-popup';
import SelectWellDropdown from './components/SelectWellDropdown';
import ConfigHistory from './components/ConfigHistory';
import DiagramForm from './components/DiagramForm';

function App() {
  const {
    configData,
    setConfigData,
    setIsNewAnno,
    resetBarriers,
    component,
    setComponent,
    getConfigHistory,
    updateCdft,
    setShowCdft,
  } = useContext(BarrierContext);

  const annotationMenu = [
    {
      id: nanoid(),
      type: 'Line',
      shortcut: 'l',
      imageURL: './icons/solid-line.svg',
    },

    {
      id: nanoid(),
      type: 'Arrow',
      shortcut: 'a',
      imageURL: './icons/arrow.svg',
    },

    {
      id: nanoid(),
      type: 'Rectangle',
      shortcut: 'r',
      imageURL: './icons/rectangle.svg',
    },
    {
      id: nanoid(),
      type: 'Ellipse',
      shortcut: 'o',
      imageURL: './icons/ellipse.svg',
    },
  ];

  const componentRef = useRef();
  const buttonsBg = useColorModeValue('white', 'gray.800');

  const renderComponent = (component) => {
    switch (component) {
      case 'diagram':
        return <DiagramForm ref={componentRef} />;
        break;
      case 'config history':
        return <ConfigHistory ref={componentRef} />;
        break;
      default:
        return null;
    }
  };

  return (
    <Flex w='100vw' h='100vh'>
      <Navbar />
      {/* buttons start */}
      <Flex
        pos='absolute'
        top={12}
        left='0'
        w='full'
        borderBottomWidth='1px'
        h={12}
        align='center'
        zIndex={998}
        bg={buttonsBg}
        justify='space-between'
      >
        <Flex justify='space-between' align='center'>
          <Flex w='360px'>
            <Flex w='full' align='center' justify='space-between'>
              <HStack spacing='16px' ml={2}>
                <IconButton
                  mr={6}
                  variant='outline'
                  colorScheme='blue'
                  size='sm'
                  icon={<AddIcon />}
                  onClick={() => {
                    setConfigData({ id: nanoid(), ...configData });
                    setComponent('diagram');
                  }}
                />

                <IconButton
                  variant='outline'
                  colorScheme='blue'
                  size='sm'
                  icon={<PiTextTFill />}
                  onClick={() =>
                    setIsNewAnno((prev) => ({ ...prev, type: 'text' }))
                  }
                />

                <Popup
                  trigger={
                    <IconButton
                      variant='outline'
                      colorScheme='blue'
                      size='sm'
                      icon={<MdEdit />}
                    />
                  }
                >
                  <div className='w-36 border-r bg-white border rounded-md'>
                    {annotationMenu?.map((item) => (
                      <div
                        key={item.id}
                        className='hover:bg-[#EDF2F7] w-full flex items-center justify-start text-xs px-3 py-1 '
                      >
                        <div>
                          <Image src={item.imageURL} boxSize={4} mr={3} />
                        </div>
                        <div>
                          <p>{item.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popup>

                <IconButton
                  variant='outline'
                  colorScheme='blue'
                  size='sm'
                  icon={<PiFilePngFill />}
                />

                <ReactToPrint
                  trigger={() => (
                    <IconButton
                      variant='outline'
                      colorScheme='blue'
                      size='sm'
                      icon={<BsPrinterFill />}
                    />
                  )}
                  content={() => componentRef.current}
                />
              </HStack>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* buttons end */}

      {/* main start */}
      <Flex w='full' justify='space-between'>
        {/* left sidebar start */}
        <Flex
          minW='220px'
          h='100vh'
          borderRightWidth='1px'
          overflowY
          p={2}
          flexDir='column'
        >
          <div className='mt-[100px]'>
            <SelectWellDropdown />
          </div>

          <div className='overflow-y-auto w-full scrollbar-hide mt-3 mb-3'>
            <DiagramList />
            <Stack mt={6}>
              <Button
                size='sm'
                onClick={
                  getConfigHistory
                  // setComponent('config history');
                }
              >
                Configuration history
              </Button>
              <Button size='sm' onClick={resetBarriers}>
                Reset barriers
              </Button>
              <Button
                size='sm'
                onClick={() => {
                  updateCdft();
                  setShowCdft(true);
                }}
              >
                Preview CDFT
              </Button>
            </Stack>
          </div>
        </Flex>
        {/* left sidebar end */}

        <Flex w='640px' h='100vh' overflowY>
          <div className='overflow-y-auto w-full scrollbar-hide mt-[108px] mb-3'>
            {renderComponent(component)}
          </div>
        </Flex>

        {/* right sidebar start */}
        <Flex
          minW='220px'
          h='100vh'
          borderLeftWidth='1px'
          overflowY
          p={2}
          flexDir='column'
        >
          <DesignPanel />
        </Flex>
        {/* right sidebar end */}
      </Flex>

      {/* main end */}
    </Flex>
  );
}

export default App;
