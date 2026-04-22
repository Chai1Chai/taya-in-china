import type { CollectionConfig } from 'payload';

const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title', // В админке будет отображаться заголовок услуги
    defaultColumns: ['title', 'price', 'duration'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),

  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Название услуги',
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      label: 'Иконка',
      options: [
        { label: 'Чайник (TeaPot)', value: 'TeaPot' },
        { label: 'Свиток (Scroll)', value: 'Scroll' },
        { label: 'Ворота (Gates)', value: 'Gates' },
        { label: 'Гонг (Gong)', value: 'Gong' },
        { label: 'Лапша (Noodles)', value: 'Noodles' },
        { label: 'ИньЯнь (BaGua)', value: 'BaGua' },
        { label: 'Барабан (Drum)', value: 'Drum' },
        { label: 'Мудрец (Sage)', value: 'Sage' },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      label: 'Длительность',
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Стоимость',
    },
    {
      name: 'short',
      type: 'textarea',
      required: true,
      label: 'Краткое описание',
    },
    {
      name: 'full',
      type: 'textarea',
      required: true,
      label: 'Полное описание',
    },
  ],
};

export default Services;