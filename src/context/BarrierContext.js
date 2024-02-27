import { createContext, useState, useEffect, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

export const BarrierContext = createContext();

export const BarrierProvider = ({ children }) => {
  const timestamp = Date.now();
  const configsURL = 'http://localhost:4000/configs';
  // const stringsURL = 'http://localhost:3001/strings';

  // const templatesURL = 'https://mock-server-ytzw.onrender.com/templates';
  // const stringsURL = 'https://mock-server-ytzw.onrender.com/strings';
  const toast = useToast();
  const [configs, setConfigs] = useState([]);
  const [isCurrent, setIsCurrent] = useState(false);
  const [showDiagram, setShowDiagram] = useState(false);
  const [showConfigHistory, setShowConfigHistory] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [update, setUpdate] = useState(false);

  const [selectedString, setSelectedString] = useState('');
  // const [resetBarriers, setResetBarriers] = useState(false);

  const [strings, setStrings] = useState([
    {
      id: 1,
      name: 'Resak A1U',
    },
    {
      id: 2,
      name: 'Resak A2U',
    },
    {
      id: 3,
      name: 'Resak A3U',
    },
  ]);
  const [isCrosshair, setIsCrosshair] = useState(false);
  const [isNewAnno, setIsNewAnno] = useState({});
  const [isCurrentAnno, setIsCurrentAnno] = useState(null);
  const [bgColor, setBgColor] = useState('#000000');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [searchString, setSearchString] = useState('');
  const [annotations, setAnnotations] = useState([
    {
      id: nanoid(),
      type: 'rectangle',
      position: {
        x: 100,
        y: 100,
      },
      rotation: 0,
      size: {
        width: 60,
        height: 60,
      },
      background: {
        color: '#000000',
      },
      border: {
        color: '#000000',
        width: 1,
        radius: '10% 30% 50% 70%',
      },
      isLocked: true,
      constrainProportions: true,
      text: {
        fontSize: 12,
        fontFamily: 'Arial',
        fontWeight: 'Bold',
      },
    },
  ]);
  const [updateBarriers, setUpdateBarriers] = useState(false);

  const handleGetConfigs = async () => {
    try {
      await fetch(`${configsURL}`)
        .then((res) => res.json())
        .then((res) => setConfigs(res));
    } catch (e) {
      console.log(e);
    }
  };

  const handleDuplicate = async (item) => {
    const newId = nanoid();
    try {
      await fetch(`${configsURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...item,
          id: newId,
          configId: newId,
          configName: `${item?.configName} copy`,
          updatedAt: timestamp,
        }),
      })
        .then((res) => {
          if (res.ok) {
            toast({
              title: 'Duplicated',
              status: 'success',
              position: 'top-right',
              duration: 1500,
              isClosable: true,
              variant: 'subtle',
            });
          }
          return res.json();
        })
        .then(() => setUpdate(true));
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${configsURL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            toast({
              title: 'Deleted',
              status: 'success',
              position: 'top-right',
              duration: 1500,
              isClosable: true,
              variant: 'subtle',
            });
          }
          return res.json();
        })
        .then(() => setUpdate(true));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      handleGetConfigs();
      // handleGetStrings();
      setUpdate(false);
    }
    return () => {
      subscribed = false;
    };
  }, [update]);

  useEffect(() => {
    setAnnotations(
      annotations?.map((item) =>
        item.id === isCurrentAnno?.id
          ? {
              ...isCurrentAnno,
            }
          : item
      )
    );
  }, [isCurrentAnno]);

  const filteredStrings = useMemo(() => {
    if (!searchString) return strings;

    return strings.filter((item) => {
      return item.name.toLowerCase().includes(searchString.toLowerCase());
    });
  }, [strings, searchString]);

  const setBarrierColor = (name) => {
    let current = currentData?.barrierElements?.find(
      (item) => item?.name === name
    );

    if (current) {
      if (current.barrier === 'primary') {
        return 'blue';
      } else if (current.barrier === 'secondary') {
        return 'red';
      } else if (current.barrier === 'none') {
        return 'black';
      } else {
        return 'none';
      }
    }
  };
  const setElementStatusColor = (name) => {
    let current = currentData?.barrierElements?.find(
      (item) => item?.name === name
    );

    if (current) {
      if (current.barrier === 'primary') {
        return 'blue';
      } else if (current.barrier === 'secondary') {
        return 'red';
      } else if (current.barrier === 'none') {
        return 'black';
      } else {
        return 'none';
      }
    }
  };

  const resetBarriers = () => {
    if (currentData) {
      const updated = currentData?.barrierElements?.map((item) => ({
        ...item,
        barrier: 'none',
      }));
      setCurrentData({ ...currentData, barrierElements: updated });
      setUpdateBarriers(true);
      setTimeout(() => setUpdateBarriers(false), 1000);
    }
  };

  return (
    <BarrierContext.Provider
      value={{
        configs,
        setConfigs,
        currentData,
        setCurrentData,
        showDiagram,
        setShowDiagram,
        isCurrent,
        setIsCurrent,
        selectedString,
        setSelectedString,
        strings,
        isCrosshair,
        setIsCrosshair,
        isNewAnno,
        setIsNewAnno,
        annotations,
        setAnnotations,
        isCurrentAnno,
        setIsCurrentAnno,
        bgColor,
        setBgColor,
        strokeColor,
        setStrokeColor,
        showConfigHistory,
        setShowConfigHistory,
        searchString,
        setSearchString,
        filteredStrings,
        setBarrierColor,
        resetBarriers,
        updateBarriers,
        setUpdateBarriers,
        handleDuplicate,
        handleDelete,
      }}
    >
      {children}
    </BarrierContext.Provider>
  );
};
