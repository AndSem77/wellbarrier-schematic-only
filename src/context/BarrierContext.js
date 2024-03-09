import { createContext, useState, useEffect, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { initialData } from '../data/initialData';

export const BarrierContext = createContext();

export const BarrierProvider = ({ children }) => {
  const timestamp = Date.now();
  const configsURL = 'http://localhost:4000/configs';
  const wellsURL = 'http://localhost:4000/wells';

  const toast = useToast();
  const [allConfigs, setAllConfigs] = useState([]);
  const [configData, setConfigData] = useState(initialData);
  const [allWells, setAllWells] = useState([]);
  const [wellData, setWellData] = useState({});
  const [wellList, setWellList] = useState([
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
  const [cdftData, setCdftData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [selectedWell, setSelectedWell] = useState('');
  const [searchWell, setSearchWell] = useState('');
  const [isCurrentAnno, setIsCurrentAnno] = useState(null);
  const [bgColor, setBgColor] = useState('#000000');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [component, setComponent] = useState(null);
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
  const [showCdft, setShowCdft] = useState(true);

  const [multipleElements, setMultipleElements] = useState({
    packerQty: 1,
    glmQty: 5,
    ssdQty: 0,
  });

  // console.log('curr in ctx', data);

  // console.log('selected well', selectedWell);

  const handleGetConfigs = async () => {
    try {
      await fetch(`${configsURL}`)
        .then((res) => res.json())
        .then((res) => setAllConfigs(res));
    } catch (e) {
      console.log(e);
    }
  };
  const handleGetAllWells = async () => {
    try {
      await fetch(`${wellsURL}`)
        .then((res) => res.json())
        .then((res) => setAllWells(res));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      handleGetConfigs();
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

  const filteredWells = useMemo(() => {
    if (!searchWell) return wellList;
    return wellList?.filter((item) => {
      return item.name.toLowerCase().includes(searchWell.toLowerCase());
    });
  }, [wellList, searchWell]);

  const handleSave = async (formData) => {
    const isFound = allConfigs?.some((item) => item.id === configData?.id);

    const dataObj = {
      id: timestamp,
      configId: timestamp,
      ...formData,
    };

    if (!isFound) {
      try {
        await fetch(`${configsURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataObj),
        })
          .then(() => setUpdate())
          .then(() => {
            toast({
              title: 'Saved',
              status: 'success',
              position: 'top-right',
              duration: 1500,
              isClosable: true,
              variant: 'subtle',
            });
          });
      } catch (e) {
        console.log(e);
      }
    }

    if (isFound) {
      try {
        await fetch(`${configsURL}/${configData?.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataObj),
        })
          .then(() => setUpdate())
          .then(() => {
            toast({
              title: 'Updated',
              status: 'success',
              position: 'top-right',
              duration: 1500,
              isClosable: true,
              variant: 'subtle',
            });
          });
      } catch (e) {
        console.log(e);
      }
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
        })
        .then(() => setUpdate(true));
    } catch (e) {
      console.log(e);
    }
  };

  const handleDuplicate = async (item) => {
    const dataObj = {
      ...item,
      id: timestamp,
      configName: `${item.configName} copy`,
    };

    try {
      await fetch(`${configsURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataObj),
      })
        .then(() => setUpdate())
        .then(() => {
          toast({
            title: 'Duplicated',
            status: 'success',
            position: 'top-right',
            duration: 1500,
            isClosable: true,
            variant: 'subtle',
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  const resetBarriers = () => {
    if (configData) {
      const updated = configData?.barrierElements?.map((item) => ({
        ...item,
        barrier: 'none',
      }));
      setConfigData({ ...configData, barrierElements: updated });
      setUpdate(true);
    }
  };

  const handleUpdate = async () => {
    const isFound = allWells?.some((item) => item.wellName === selectedWell);

    const { barrierElements } = configData;

    const dataObj = {
      id: timestamp,
      wellName: selectedWell,
      updatedAt: timestamp,
      cdft: [
        {
          cdftDate: null,
          preventiveMaintenanceId: null,
          configId: 1709718224354,
          configName: configData?.configName,
          equipmentStatus: [...barrierElements],
        },
      ],
    };

    if (configData?.configName && selectedWell && !isFound) {
      try {
        await fetch(`${wellsURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataObj),
        })
          .then((res) => {
            if (res.ok) {
              toast({
                title: `${selectedWell} updated`,
                status: 'success',
                position: 'top-right',
                duration: 1500,
                isClosable: true,
                variant: 'subtle',
              });
            }
          })
          .then(() => setUpdate(true));
      } catch (e) {
        console.log(e);
      }
    }

    if (configData?.configName && selectedWell && isFound) {
      try {
        await fetch(`${wellsURL}/1709890669913,`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataObj),
        })
          .then((res) => {
            if (res.ok) {
              toast({
                title: `${selectedWell} updated`,
                status: 'success',
                position: 'top-right',
                duration: 1500,
                isClosable: true,
                variant: 'subtle',
              });
            }
          })
          .then(() => setUpdate(true));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getConfigHistory = async () => {
    try {
      if (selectedWell) {
        await fetch(`http://localhost:4000/wells?wellName_like=${selectedWell}`)
          .then((res) => res.json())
          .then((res) => setWellData(res[0]))
          .then(() => setComponent('config history'));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateCdft = () => {
    let updatedElements = [];

    const config = [
      { name: 'crown valve', status: null },
      { name: 'wing valve', status: null },
      { name: 'surface safety valve', status: null },
    ];

    const cdftResult = [
      { name: 'crown valve', status: 'pass' },
      { name: 'wing valve', status: 'pass' },
      { name: 'surface safety valve', status: 'fail' },
    ];

    config?.map((item1) => {
      cdftResult?.map((item2) => {
        if (item1.name === item2.name) {
          updatedElements.push({ name: item2.name, status: item2.status });
        }
      });
    });

    setCdftData(updatedElements);
    console.log('cdft data', cdftData);
  };

  // console.log('wellData', wellData);
  // console.log('config data', configData);

  const setColor = (name) => {
    if (configData) {
      let el = configData?.barrierElements?.find((item) => item?.name === name);

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

  const setFill = (name) => {
    let el = configData?.barrierElements?.find((item) => item?.name === name);

    const setColor = (name) => {
      if (el?.status) {
        if (el.status === 'pass') {
          return 'green';
        } else if (el.status === 'fail') {
          return 'red';
        } else if (el.status === 'degraded') {
          return 'yellow';
        } else {
          return 'none';
        }
      }
    };

    if (!el?.status) {
      return 'none';
    }

    if (el?.status) {
      return setColor(name);
    }
  };

  const setStroke = (name) => {
    let el = configData?.barrierElements?.find((item) => item?.name === name);

    const setColor = (name) => {
      if (el?.status) {
        return 'black';
      }
    };

    if (!el?.status) {
      if (el.quantity === 0) {
        return 'none';
      } else if (el.barrier === 'primary') {
        return 'blue';
      } else if (el.barrier === 'secondary') {
        return 'red';
      } else {
        return 'none';
      }
    }

    if (el?.status) {
      return setColor(name);
    }
  };

  return (
    <BarrierContext.Provider
      value={{
        allConfigs,
        setAllConfigs,
        configData,
        setConfigData,
        selectedWell,
        setSelectedWell,
        wellList,
        annotations,
        setAnnotations,
        bgColor,
        setBgColor,
        strokeColor,
        setStrokeColor,
        searchWell,
        setSearchWell,
        filteredWells,
        resetBarriers,
        handleDuplicate,
        handleDelete,
        handleUpdate,
        handleSave,
        getConfigHistory,
        component,
        setComponent,
        multipleElements,
        setMultipleElements,
        update,
        setUpdate,
        updateCdft,
        wellData,
        setWellData,
        showCdft,
        setShowCdft,
        setFill,
        setStroke,
        setColor,
      }}
    >
      {children}
    </BarrierContext.Provider>
  );
};
