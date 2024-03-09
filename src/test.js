// cdft: [
//     {
//       cdftDate: null,
//       preventiveMaintenanceId: null,
//       configId: 1709718224354,
//       configName: data?.configName,
//       equipmentStatus: [
//         {
//           id: 'iq_krYL97dZD6WtscUi3S',
//           name: 'crown valve',
//           barrier: 'secondary',
//           quantity: 1,
//           status: null,
//         },
//       ],
//     },

// const dataObj = {
//   id: timestamp,
//   wellName: selectedWell,
//   updatedAt: timestamp,
//   configs: [
//     {
//       cdftDate: null,
//       preventiveMaintenanceId: null,
//       configId: 1709718224354,
//       configName: data?.configName,
//       equipmentStatus: [...configWithStatusNull],
//     },
//   ],
// };

// const noStatus = [
//   { name: 'crown valve', status: null },
//   { name: 'wing valve', status: null },
//   { name: 'surface safety valve', status: null },
// ];

// const withStatus = [
//   { name: 'crown valve', status: 'pass' },
//   { name: 'wing valve', status: 'pass' },
//   { name: 'surface safety valve', status: 'fail' },
// ];

// let finalArray = [];
// noStatus.map((item1) => {
//   withStatus.map((item2) => {
//     if (item1.name === item2.name) {
//       finalArray.push({ name: item2.name, status: item2.status });
//     }
//   });
// });

// console.log(finalArray);

// const configData = {
//   barrierElements: [
//     {
//       name: 'cv',
//       barrier: 'primary',
//       quantity: 1,
//     },
//   ],
// };
// const setBarrierColor = (name) => {
//   let element = configData?.barrierElements?.find(
//     (item) => item?.name === name
//   );
//   console.log(element);
//   if (element) {
//     if (element.quantity === 0) {
//       return 'none';
//     } else if (element.barrier === 'primary') {
//       return 'blue';
//     } else if (element.barrier === 'secondary') {
//       return 'red';
//     } else if (element.barrier === 'none') {
//       return 'black';
//     } else {
//       return 'none';
//     }
//   }
// };
// const setColorOld = (option, name) => {
//   switch (option) {
//     case 'barrier':
//       return setBarrierColor(name);
//       break;
//     case 'status':
//       return setStatus(name);
//       break;
//     default:
//       return null;
//   }
// };

// const previewCdft = true;

// setColor('barrier', 'cv');

// // stroke={true ? 'black' : setColor('barrier', 'crown valve')}
// // fill={true ? setColor('status', 'crown valve') : 'none'}

// const setColor = (option, name) => {
//   const setBarrierColor = (name) => {
//     let element = configData?.barrierElements?.find(
//       (item) => item?.name === name
//     );
//     if (element) {
//       if (element.quantity === 0) {
//         return 'none';
//       } else if (element.barrier === 'primary') {
//         return 'blue';
//       } else if (element.barrier === 'secondary') {
//         return 'red';
//       } else if (element.barrier === 'none') {
//         return 'black';
//       } else {
//         return 'none';
//       }
//     }
//   };
//   const setStatusColor = (name) => {
//     let element = configData?.barrierElements?.find(
//       (item) => item?.name === name
//     );
//     if (element) {
//       if (element.status === 'pass') {
//         return 'green';
//       } else if (element.status === 'fail') {
//         return 'red';
//       } else if (element.status === 'degraded') {
//         return 'yellow';
//       } else {
//         return setBarrierColor(name);
//       }
//     }
//   };
//   switch (option) {
//     case 'barrier':
//       return setBarrierColor(name);
//       break;
//     case 'status':
//       return setStatusColor(name);
//       break;
//     default:
//       return null;
//   }
// };

const setColor = (option, name) => {
  const setBarrierColor = (name) => {
    let element = configData?.barrierElements?.find(
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
  };
  const setStatusColor = (name) => {
    let element = configData?.barrierElements?.find(
      (item) => item?.name === name
    );
    if (element) {
      if (element.status === 'pass') {
        return 'green';
      } else if (element.status === 'fail') {
        return 'red';
      } else if (element.status === 'degraded') {
        return 'yellow';
      } else if (element.status === null) {
        return setBarrierColor(name);
      } else {
        return 'none';
      }
    }
  };
  switch (option) {
    case 'barrier':
      return setBarrierColor(name);
      break;
    case 'status':
      return setStatusColor(name);
      break;
    default:
      return null;
  }
};

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

const color = (name) => {
  let el = configData?.barrierElements?.find((item) => item?.name === name);

  if (el) {
    if (!el.status) {
      return 'none';
    } else if (el.status === 'pass') {
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

color('cv');
