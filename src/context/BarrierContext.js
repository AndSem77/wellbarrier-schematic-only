import { createContext, useState, useEffect, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

export const BarrierContext = createContext();

export const BarrierProvider = ({ children }) => {
  const timestamp = Date.now();
  const configsURL = 'http://localhost:4000/configs';
  const wellsURL = 'http://localhost:4000/wells';

  // const templatesURL = 'https://mock-server-ytzw.onrender.com/templates';
  // const stringsURL = 'https://mock-server-ytzw.onrender.com/strings';
  const toast = useToast();
  const [configs, setConfigs] = useState([]);
  const [currentData, setCurrentData] = useState(null);
  const [update, setUpdate] = useState(false);
  const [wells, setWells] = useState([
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
  const [selectedWell, setSelectedWell] = useState('');
  const [searchWell, setSearchWell] = useState('');
  const [isNewAnno, setIsNewAnno] = useState({});
  const [isCurrentAnno, setIsCurrentAnno] = useState(null);
  const [bgColor, setBgColor] = useState('#000000');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const [configHistory, setConfigHistory] = useState(null);
  const [component, setComponent] = useState(null);
  const [previewCDFT, setPreviewCDFT] = useState(false);

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
  const [multipleElements, setMultipleElements] = useState({
    packerQty: 1,
    glmQty: 5,
    ssdQty: 0,
  });
  const [currentConfig, setCurrentConfig] = useState(null);

  // console.log('curr in ctx', currentData);

  // console.log('selected well', selectedWell);

  const handleGetConfigs = async () => {
    try {
      await fetch(`${configsURL}`)
        .then((res) => res.json())
        .then((res) => setConfigs(res));
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

  const filteredWells = useMemo(() => {
    if (!searchWell) return wells;
    return wells?.filter((item) => {
      return item.name.toLowerCase().includes(searchWell.toLowerCase());
    });
  }, [wells, searchWell]);

  const setBarrierColor = (name) => {
    let element = currentData?.barrierElements?.find(
      (item) => item?.name === name
    );

    if (element) {
      if (element.quantity === 0) {
        return 'none';
      } else if (element.barrier === 'primary') {
        return 'blue';
      } else if (element.barrier === 'secondary') {
        return 'red';
      } else {
        return 'none';
      }
    }
  };

  const setStatusColor = (name) => {
    let element = currentData?.barrierElements?.find(
      (item) => item?.name === name
    );

    if (element) {
      if (element.status === 'pass') {
        return 'green';
      } else if (element.barrier === 'fail') {
        return 'red';
      } else if (element.barrier === 'degraded') {
        return 'yellow';
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
      setTimeout(() => setUpdateBarriers(false), 500);
    }
  };

  const handleSave = async (formData) => {
    const isExisting = configs?.some((item) => item.id === currentData?.id);

    if (!isExisting) {
      try {
        await fetch(`${configsURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: timestamp,
            configId: timestamp,
            updatedAt: timestamp,
            ...formData,
          }),
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

    if (isExisting) {
      try {
        await fetch(`${configsURL}/${currentData?.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            updatedAt: timestamp,
            ...formData,
          }),
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
    try {
      await fetch(`${configsURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...item,
          id: timestamp,
          configId: timestamp,
          configName: `${item?.configName} copy`,
          updatedAt: timestamp,
        }),
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

  const handleUpdate = async () => {
    if (currentData && selectedWell) {
      try {
        await fetch(`${wellsURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: timestamp,
            wellName: selectedWell,
            updatedAt: timestamp,
            configs: [],
            cdft: [
              {
                cdftDate: '01-01-2000',
                preventiveMaintenenanceId: 777,
                configId: 1709718224354,
                configName: '1',
                equipmentStatus: [
                  {
                    id: 'iq_krYL97dZD6WtscUi3S',
                    name: 'crown valve',
                    barrier: 'secondary',
                    quantity: 1,
                    status: 'pass',
                  },
                ],
              },
            ],
          }),
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

  const handleConfigHistory = async () => {
    try {
      if (selectedWell) {
        await fetch(`http://localhost:4000/wells?wellName_like=${selectedWell}`)
          .then((res) => res.json())
          .then((res) => setConfigHistory(res[0]))
          .then(() => setComponent('config history'));
      }
    } catch (e) {
      console.log(e);
    }
  };

  // console.log('his', configHistory);

  const setColor = (name) => {
    if (currentData) {
      let element = currentData?.barrierElements?.find(
        (item) => item?.name === name
      );
      if (element) {
        if (element.quantity === 0) {
          return 'none';
        } else if (element.barrier === 'primary') {
          return 'blue';
        } else if (element.barrier === 'secondary') {
          return 'red';
        } else {
          return 'none';
        }
      }
    }

    if (currentConfig) {
      let element = currentConfig?.barrierElements?.find(
        (item) => item?.name === name
      );
      if (element) {
        if (element.quantity === 0) {
          return 'none';
        } else if (element.barrier === 'primary') {
          return 'blue';
        } else if (element.barrier === 'secondary') {
          return 'red';
        } else {
          return 'none';
        }
      }
    }
  };

  console.log('curr data', currentData);
  console.log('curr config', currentConfig);

  return (
    <BarrierContext.Provider
      value={{
        configs,
        setConfigs,
        currentData,
        setCurrentData,
        selectedWell,
        setSelectedWell,
        wells,
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
        searchWell,
        setSearchWell,
        filteredWells,
        setBarrierColor,
        setStatusColor,
        resetBarriers,
        updateBarriers,
        setUpdateBarriers,
        handleDuplicate,
        handleDelete,
        handleUpdate,
        handleSave,
        handleConfigHistory,
        component,
        setComponent,
        previewCDFT,
        setPreviewCDFT,
        multipleElements,
        setMultipleElements,
        configHistory,
        setConfigHistory,
        currentConfig,
        setCurrentConfig,
        setColor,
      }}
    >
      {children}
    </BarrierContext.Provider>
  );
};
