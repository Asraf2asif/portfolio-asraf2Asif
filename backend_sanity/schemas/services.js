export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'serial',
      title: 'Serial',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          name: 'info',
          title: 'Info',
          type: 'string',
        },
      ],
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
