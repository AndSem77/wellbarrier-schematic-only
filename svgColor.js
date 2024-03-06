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

const test = (name) => name;

// stroke={previewCDFT ? 'black' : setBarrierColor('crown valve')}
// fill={previewCDFT ? setStatusColor('crown valve') : 'none'}

const switchColor = (name, option) => {
  switch ((name, option)) {
    case 'cv' && 'status':
      return test(name);
      break;
    case 'status color':
      return 'status';
      break;
    default:
      return null;
  }
};

console.log(switchColor('crown valve', 'status'));

const renderAnno = (type) => {
  switch (type) {
    case 'text':
      return <Text item={item} />;
      break;
    case 'rectangle':
      return <Rectangle item={item} />;
      break;
    default:
      return null;
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
