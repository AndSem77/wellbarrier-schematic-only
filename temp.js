import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { useToast } from '@chakra-ui/react';

const handleSave = async () => {
  try {
    const current = await fetch(`${baseURL}`)
      .then((res) => res.json())
      .then((res) => res.find((item) => item.id === data?.id));

    if (current?.id) {
      await fetch(`${baseURL}/${current?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            toast({
              title: 'Saved',
              status: 'success',
              position: 'top-right',
              duration: 1500,
              isClosable: true,
            });
          }
          return res.json();
        })
        .then((res) => console.log(res));
    }

    if (!current?.id) {
      await fetch(`${baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            toast({
              title: 'Saved',
              status: 'success',
              position: 'top-right',
              duration: 1500,
              isClosable: true,
            });
          }
          return res.json();
        })
        .then((res) => console.log(res));
    }
  } catch (e) {
    console.log(e);
  }
};

export const BarrierContext = createContext();

export const BarrierProvider = ({ children }) => {
  const timestamp = Date.now();
  const url = 'http://localhost:3001/wells';
  const toast = useToast();
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState(null);
  const [searchWell, setSearchWell] = useState('');
  const [showCurrentReport, setShowCurrentReport] = useState(false);
  const [showNewReport, setShowNewReport] = useState(false);
  const [rightClick, setRightClick] = useState(false);
  const [doubleClick, setDoubleClick] = useState(false);
  const [annotation, setAnnotation] = useState(null);
  const [contextMenuPosition, setContextMenuPosition] = useState({
    x: 0,
    y: 0,
  });
  const [statusMenuPosition, setStatusMenuPosition] = useState({
    x: 0,
    y: 0,
  });

  // console.log('allData', data);
  // console.log('currentData', currentData);

  useEffect(() => {
    if (data) {
      updateData();
    }
  }, [currentData]);

  const updateData = () => {
    if (data) {
      const newArr = [...data?.records];
      const updatedRecords = newArr.map((record) => {
        if (record.recordId === currentData?.recordId) {
          return currentData;
        }
        return record;
      });
      setData({ ...data, records: updatedRecords });
    }
  };

  const getData = async () => {
    try {
      await fetch(`${url}/${searchWell.toLowerCase()}`)
        .then((res) => {
          if (!res.ok) {
            toast({
              title: 'Not found',
              status: 'error',
              position: 'top-right',
              duration: 1500,
              isClosable: true,
            });
          }
          return res.json();
        })
        .then((res) => setData(res));
    } catch (e) {
      console.log(e);
    }
  };

  const deleteRecord = async (recordId) => {
    try {
      const records = data?.records?.filter(
        (item) => item.recordId !== recordId
      );
      setData({ ...data, records });
      await fetch(`${url}/${data?.id?.toLowerCase()}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, records }),
      });
    } catch (e) {
      console.log('error', e);
    }
  };

  const saveData = async () => {
    try {
      await fetch(`${url}/${data?.id?.toLowerCase()}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          toast({
            title: 'Saved',
            status: 'success',
            position: 'top-right',
            duration: 1500,
            isClosable: true,
          });
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const duplicateRecord = (id, record) => {
    try {
      setCurrentData({ wellName: id, ...record });
      const records = [{ ...record, recordId: timestamp }, ...data?.records];
      setData({ ...data, records });
    } catch (e) {
      console.log(e);
    }
  };

  const handleDuplicate = async (diagram) => {
    try {
      console.log(diagram);
      setCurrentData({ id: nanoid(), ...diagram });
      await fetch(`${baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentData),
      });
    } catch (e) {
      console.log(e);
    }
  };

  app.post('/users', (req, res) => {
    const { email } = req.body;
    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    res.json(req.body);
  });

  return (
    <BarrierContext.Provider
      value={{
        data,
        setData,
        currentData,
        setCurrentData,
        getData,
        searchWell,
        setSearchWell,
        showCurrentReport,
        setShowCurrentReport,
        showNewReport,
        setShowNewReport,
        saveData,
        deleteRecord,
        duplicateRecord,
        rightClick,
        setRightClick,
        contextMenuPosition,
        setContextMenuPosition,
        statusMenuPosition,
        setStatusMenuPosition,
        annotation,
        setAnnotation,
        doubleClick,
        setDoubleClick,
      }}
    >
      {children}
    </BarrierContext.Provider>
  );
};

// diagram div start

<div
  ref={ref}
  style={{ cursor: crosshair ? 'crosshair' : 'default' }}
  onContextMenu={(e) => {
    e.preventDefault();
  }}
  onMouseMove={handleMouseMove}
>
  {/* ref={drop} */}

  <div
    ref={drop}
    className='overflow-y-auto scrollbar-hide border h-[1040px]'
    onContextMenu={(e) => {
      e.preventDefault();
      setShowAnnotationsMenu(true);
      setAnnotationsMenuPosition({
        x: e.pageX,
        y: e.pageY,
      });
    }}
    onClick={(e) => {
      setAnnotations([
        {
          ...selectedAnnotation,
          id: nanoid(),
          position: {
            left: mouseCoords?.left,
            top: mouseCoords?.top,
          },
        },
        ...annotations,
      ]);
      setCrosshair(false);
      setSelectedAnnotation(null);
    }}
  >
    <Flex
      w='full'
      h='60px'
      borderBottomWidth='1px'
      flexDir='row'
      align='center'
      justify='center'
      style={{ userSelect: 'none' }}
    >
      <Input
        style={{ userSelect: 'none' }}
        variant='unstyled'
        textAlign='center'
        autoFocus
        required
        value={name}
        onChange={(e) => setName((prev) => (prev = e.target.value))}
      />
    </Flex>
    {/* {showAnnotationsMenu ? <AnnotationsMenu /> : null} */}
    {showStatusMenu ? <StatusMenu /> : null}
    {showBarrierMenu ? <BarrierMenu /> : null}
    <AnnotationList />

    {/* render diagram here */}
    <Flex w='full' h='full' align='start' justify='start' ml='160px' mt='60px'>
      {renderDiagram(config)}
    </Flex>

    {/* <Flex
      justify='space-evenly'
      position='relative'
      className='snapContainer'
      w='100%'
      h='100%'
    ></Flex> */}
  </div>
</div>;
