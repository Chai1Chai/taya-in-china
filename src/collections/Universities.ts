import type { CollectionConfig } from 'payload'

export const Universities: CollectionConfig = {
  slug: 'universities', 
  admin: {
    useAsTitle: 'name', 
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),

  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Название университета',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      label: 'Город',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Описание',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media', // Привязка к картинкам
      label: 'Фото',
    },
  ],
}