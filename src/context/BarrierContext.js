import { createContext, useState, useEffect, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

export const BarrierContext = createContext();

export const BarrierProvider = ({ children }) => {
  const timestamp = Date.now();
  // const templatesURL = 'http://localhost:3001/templates';
  // const stringsURL = 'http://localhost:3001/strings';

  const templatesURL = 'https://mock-server-ytzw.onrender.com/templates';
  const stringsURL = 'https://mock-server-ytzw.onrender.com/strings';
  const toast = useToast();
  const [templates, setTemplates] = useState([]);
  const [isCurrent, setIsCurrent] = useState(false);
  const [showDiagram, setShowDiagram] = useState(false);
  const [showConfigHistory, setShowConfigHistory] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

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

  const [configs, setConfigs] = useState([
    {
      id: nanoid(),
      string: 'Resak A1U',
      diagrams: [
        { id: nanoid(), data: [] },
        { id: nanoid(), data: [] },
      ],
    },
  ]);

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
        templates,
        setTemplates,
        currentData,
        setCurrentData,
        showDiagram,
        setShowDiagram,
        isCurrent,
        setIsCurrent,
        selectedString,
        setSelectedString,
        strings,
        mousePos,
        setMousePos,
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
        configs,
        setConfigs,
        setBarrierColor,
        resetBarriers,
        updateBarriers,
        setUpdateBarriers,
      }}
    >
      {children}
    </BarrierContext.Provider>
  );
};
