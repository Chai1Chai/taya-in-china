import type { CollectionConfig } from 'payload';

const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'category',
    defaultColumns: ['category', 'text'],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),

  },
  fields: [
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Категория отзыва',
      options: [
        { label: 'О консультации по поступлению', value: 'О консультации по поступлению' },
        { label: 'О сопровождении', value: 'О сопровождении' },
        { label: 'Отзывы о подборе университетов', value: 'Отзывы о подборе университетов' },
      ],
    },
    {
      name: 'text',
      type: 'textarea', // Используем textarea, чтобы не было проблем с объектами RichText
      required: true,
      label: 'Текст отзыва',
    },
  ],
};

export default Reviews;