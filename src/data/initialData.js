import { nanoid } from 'nanoid';
const timestamp = Date.now();

export const initialData = {
  configId: timestamp,
  configName: '',
  barrierElements: [
    {
      id: nanoid(),
      name: 'crown valve',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'surface safety valve',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'safety valve control line',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'wing valve',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'lower master valve',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'kill wing valve',
      barrier: 'secondary',
      quantity: 1,
    },

    {
      id: nanoid(),
      name: 'production casing valves',
      barrier: 'secondary',
      quantity: 2,
    },

    {
      id: nanoid(),
      name: 'intermediate casing',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'intermediate casing valves',
      barrier: 'secondary',
      quantity: 2,
    },
    {
      id: nanoid(),
      name: 'cement ( intermediate casing )',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'surface casing',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'surface casing valves',
      barrier: 'secondary',
      quantity: 2,
    },
    {
      id: nanoid(),
      name: 'cement ( surface casing )',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'conductor casing',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'cement ( conductor casing )',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'conductor casing valves',
      barrier: 'none',
      quantity: 0,
    },

    {
      id: nanoid(),
      name: 'casing hanger',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'tubing hanger',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'caprock',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'void area',
      barrier: 'secondary',
      quantity: 1,
    },

    {
      id: nanoid(),
      name: 'VR plug',
      barrier: 'none',
      quantity: 0,
    },
    {
      id: nanoid(),
      name: 'BPV / TWCV',
      barrier: 'none',
      quantity: 0,
    },
    {
      id: nanoid(),
      name: 'production casing ( above packer )',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'production casing ( below packer )',
      barrier: 'primary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'production tubing ( above DHSV )',
      barrier: 'secondary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'production tubing ( below DHSV )',
      barrier: 'primary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'cement ( production casing )',
      barrier: 'primary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'downhole safety valve',
      barrier: 'primary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'downhole safety valve control line',
      barrier: 'primary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'downhole safety valve landing nipple',
      barrier: 'primary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'gas lift mandrel',
      barrier: 'primary',
      quantity: 5,
    },
    {
      id: nanoid(),
      name: 'sliding side door',
      barrier: 'none',
      quantity: 0,
    },
    {
      id: nanoid(),
      name: 'production packer',
      barrier: 'primary',
      quantity: 1,
    },
    {
      id: nanoid(),
      name: 'tubing plug',
      barrier: 'none',
      quantity: 0,
    },
    {
      id: nanoid(),
      name: 'in-situ formation',
      barrier: 'primary',
      quantity: 1,
    },
  ],
};

export const initialWells = [
  {
    id: 1,
    wellName: 'Resak A1U',
  },
  {
    id: 2,
    wellName: 'Resak A2U',
  },
  {
    id: 3,
    wellName: 'Resak A3U',
  },
];
