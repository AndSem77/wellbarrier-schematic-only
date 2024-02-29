import { useContext, useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { BarrierContext } from '../context/BarrierContext';
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { useForm } from 'react-hook-form';
import Popup from 'reactjs-popup';

export default function ConfigHistory() {
  const {
    showConfigHistory,
    setShowConfigHistory,
    searchWell,
    setSearchWell,
    setSelectedWell,
  } = useContext(BarrierContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showDropdown, setShowDropdown] = useState(true);
  const [currentConfig, setCurrentConfig] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();

  const strings = [
    { id: 1, string: 'Resak A1U', name: 'Template 1', date: '01/01/2001' },
    { id: 2, string: 'Resak A1U', name: 'Template 2', date: '20/20/2021' },
    { id: 3, string: 'Resak A1U', name: 'Template 3', date: '11/11/2024' },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    setCurrentConfig(strings[currentIndex]);
  }, [currentIndex]);

  return (
    <Modal
      isOpen={showConfigHistory}
      onClose={onClose}
      size='2xl'
      className='h-[100px]'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={16}>Configuration History</ModalHeader>
        <ModalCloseButton onClick={() => setShowConfigHistory(false)} />
        <ModalBody>
          <form>
            <Popup className='z-[9999]' trigger={<Flex>ok</Flex>}>
              drop
            </Popup>
          </form>
          {/* <Flex w='full' justify='center' align='center' flexDir='column'>
            <Text fontWeight={'bold'}>Resak A1U</Text>
            <Text fontSize={'xs'}>Config Name</Text>
            <Text fontSize={'xs'}>Config Date</Text>
            <Text fontSize={'xs'}>{`Configuration ${currentIndex + 1} of ${
              strings?.length
            }`}</Text>
          </Flex>

          <Flex w='full' justify='space-between' mt={3}>
            <Button
              size='xs'
              onClick={prevSlide}
              isDisabled={currentIndex <= 0}
            >
              Prev
            </Button>
            <Button
              size='xs'
              onClick={nextSlide}
              isDisabled={currentIndex >= strings.length - 1}
            >
              Next
            </Button>
          </Flex>
          <div>svg here</div> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
