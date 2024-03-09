const configData = {
  barrierElements: [
    {
      name: 'cv',
      barrier: 'primary',
      quantity: 1,
      status: null,
    },
  ],
};

const setFill = (name) => {
  let el = configData?.barrierElements?.find((item) => item?.name === name);

  if (!el?.status) {
    return 'none';
  }

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

const setStroke = (name) => {
  let el = configData?.barrierElements?.find((item) => item?.name === name);

  if (el?.status) {
    return 'black';
  }

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
};

const setColor = (name) => {
  let el = configData?.barrierElements?.find((item) => item?.name === name);

  if (!el?.status) {
    return 'none';
  }
};
