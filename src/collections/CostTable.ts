import type { CollectionConfig } from 'payload';

const CostTable: CollectionConfig = {
  slug: 'costtable',
  admin: {
    useAsTitle: 'program',
    defaultColumns: ['program', 'price'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),

  },
  fields: [
    {
      name: 'program',
      type: 'text',
      required: true,
      label: 'Программа',
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Стоимость',
    },
    {
      name: 'note',
      type: 'text',
      required: true,
      label: 'Примечание',
    },
  ],
};

export default CostTable;