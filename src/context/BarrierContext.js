import { createContext, useState, useEffect, useMemo } from 'react';
import { useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { initialData } from '../data/initialData';

export const BarrierContext = createContext();

export const BarrierProvider = ({ children }) => {
  const timestamp = Date.now();
  const configsURL = 'http://localhost:4000/configs';
  const wellsURL = 'http://localhost:4000/wells';

  // const templatesURL = 'https://mock-server-ytzw.onrender.com/templates';
  // const stringsURL = 'https://mock-server-ytzw.onrender.com/strings';
  const toast = useToast();
  const [data, setData] = useState(initialData);
  const [configs, setConfigs] = useState([]);
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

  const [cdft, setCdft] = useState([]);

  const [update, setUpdate] = useState(false);
  const [selectedWell, setSelectedWell] = useState('');
  const [searchWell, setSearchWell] = useState('');
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

  const [multipleElements, setMultipleElements] = useState({
    packerQty: 1,
    glmQty: 5,
    ssdQty: 0,
  });
  const [currentConfig, setCurrentConfig] = useState(null);

  // console.log('curr in ctx', data);

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
  const handleGetWellsData = async () => {
    try {
      await fetch(`${wellsURL}`)
        .then((res) => res.json())
        .then((res) => setCdft(res));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      handleGetConfigs();
      handleGetWellsData();
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
    let element = data?.barrierElements?.find((item) => item?.name === name);

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
    let element = data?.barrierElements?.find((item) => item?.name === name);

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

  const handleSave = async (formData) => {
    const isExisting = configs?.some((item) => item.id === data?.id);

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
        await fetch(`${configsURL}/${data?.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: timestamp,
            configId: timestamp,
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
          configName: `${item.configName} copy`,
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

  const setColor = (name) => {
    if (data) {
      let element = data?.barrierElements?.find((item) => item?.name === name);
      if (element) {
        if (element.quantity === 0) {
          return 'none';
        } else if (element.barrier === 'primary') {
          return 'blue';
        } else if (element.barrier === 'secondary') {
          return 'red';
        } else if (element.barrier === 'none') {
          return 'black';
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
        } else if (element.barrier === 'none') {
          return 'black';
        } else {
          return 'none';
        }
      }
    }
  };

  const resetBarriers = () => {
    if (data) {
      const updated = data?.barrierElements?.map((item) => ({
        ...item,
        barrier: 'none',
      }));
      setData({ ...data, barrierElements: updated });
      setUpdate(true);
    }
  };

  // const handleUpdate = async () => {
  //   const isExisting = cdft?.some((item) => item.wellName === selectedWell);

  //   if (data?.configName && selectedWell) {
  //     try {
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  const handleUpdate = async () => {
    const isExisting = cdft?.some((item) => item.wellName === selectedWell);

    if (data?.configName && selectedWell && !isExisting) {
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
            configs: [
              {
                ...data,
              },
            ],
            cdft: [
              {
                cdftDate: '01-01-2000',
                preventiveMaintenanceId: 777,
                configId: 1709718224354,
                configName: data?.configName,
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

  // console.log('curr data', data);
  // console.log('cdft', cdft);
  // console.log('curr config', currentConfig);

  return (
    <BarrierContext.Provider
      value={{
        configs,
        setConfigs,
        data,
        setData,
        selectedWell,
        setSelectedWell,
        wells,
        annotations,
        setAnnotations,
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
        update,
        setUpdate,
      }}
    >
      {children}
    </BarrierContext.Provider>
  );
};
