import { createContext, useState, useEffect, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { initialConfigData } from '../data/initialConfigData';
import { dummyCdftData } from '../data/dummyCdftData';
export const BarrierContext = createContext();

export const BarrierProvider = ({ children }) => {
  const timestamp = Date.now();
  const configsURL = 'http://localhost:4000/configs';
  const wellsURL = 'http://localhost:4000/wells';

  const toast = useToast();
  const [allConfigs, setAllConfigs] = useState([]);
  const [configData, setConfigData] = useState(initialConfigData);
  const [allWells, setAllWells] = useState([]);
  const [wellData, setWellData] = useState(null);
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
  const [cdft, setCdft] = useState(false);

  const [multipleElements, setMultipleElements] = useState({
    packerQty: 1,
    glmQty: 0,
    ssdQty: 0,
  });

  const [currentConfig, setCurrentConfig] = useState(null);

  // console.log('curr in ctx', data);

  // console.log('selected well', selectedWell);

  const handleGetAllConfigs = async () => {
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
      handleGetAllConfigs();
      handleGetAllWells();
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

  useEffect(() => {
    setWellData((prev) => ({
      ...prev,
      ...wellData,
      configs: wellData?.configs?.map((item) =>
        item?.configId === currentConfig?.configId
          ? {
              ...currentConfig,
            }
          : item
      ),
    }));
  }, [currentConfig]);

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
        status: null,
      }));
      setConfigData({ ...configData, barrierElements: updated });
      setUpdate(true);
    }

    if (currentConfig) {
      const updated = currentConfig?.barrierElements?.map((item) => ({
        ...item,
        barrier: 'none',
        status: null,
      }));
      setCurrentConfig({ ...currentConfig, barrierElements: updated });
      setUpdate(true);
    }
  };

  const getConfigHistory = async () => {
    const isFoundWell = allWells?.find(
      (item) => item.wellName === selectedWell
    );

    if (selectedWell && isFoundWell) {
      setWellData((prev) => ({ ...prev, ...isFoundWell }));
      setComponent('config history');
    }
  };

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
    let el = currentConfig?.barrierElements?.find(
      (item) => item?.name === name
    );

    if (el.status) {
      if (el.status === 'pass') {
        return 'green';
      } else if (el.status === 'degraded') {
        return 'yellow';
      } else if (el.status === 'fail') {
        return 'red';
      } else {
        return 'none';
      }
    }
  };

  const setStroke = (name) => {
    let el = currentConfig?.barrierElements?.find(
      (item) => item?.name === name
    );

    if (!el.status) {
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

  const handleUpdate = async () => {
    const isFoundWell = allWells?.find(
      (item) => item.wellName === selectedWell
    );

    // new well
    if (configData?.configName && selectedWell && !isFoundWell) {
      const newWell = {
        id: timestamp,
        wellName: selectedWell,
        configs: [
          {
            cdftDate: null,
            preventiveMaintenanceId: null,
            configId: 1709718224354,
            configName: configData?.configName,
            updatedAt: timestamp,
            barrierElements: configData?.barrierElements,
          },
        ],
      };

      try {
        await fetch(`${wellsURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWell),
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

    // existing well
    if (configData?.configName && selectedWell && isFoundWell) {
      const existingWell = {
        configs: [
          ...isFoundWell?.configs,
          {
            cdftDate: null,
            preventiveMaintenanceId: null,
            updatedAt: timestamp,
            ...configData,
          },
        ],
      };

      try {
        await fetch(`${wellsURL}/${isFoundWell?.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(existingWell),
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

  const previewCdft = () => {
    const barrierElementsWithStatus = currentConfig?.barrierElements?.map(
      (item1) => {
        const updatedItem = dummyCdftData.find(
          (item2) => item2.name === item1.name
        );
        return { ...item1, ...updatedItem };
      }
    );

    setCurrentConfig((prev) => ({
      ...prev,
      barrierElements: barrierElementsWithStatus,
    }));
    setCdft(true);
  };

  const handleSaveCdft = async () => {
    try {
      // 'http://localhost:3000' + var'
      await fetch(`${wellsURL}/${wellData?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(wellData),
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
  };

  // console.log('allWells', allWells);
  // console.log('configData', configData);
  // console.log('wellData', wellData);
  // console.log('curr config', currentConfig);

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
        previewCdft,
        wellData,
        setWellData,
        cdft,
        setCdft,
        setFill,
        setStroke,
        setColor,
        currentConfig,
        setCurrentConfig,
        handleSaveCdft,
      }}
    >
      {children}
    </BarrierContext.Provider>
  );
};
