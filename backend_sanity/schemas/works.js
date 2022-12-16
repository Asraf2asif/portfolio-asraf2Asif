export default {
  name: "works",
  title: "Works",
  type: "document",
  fields: [
    {
      name: "serial",
      title: "Serial",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "projectLink",
      title: "Project Link",
      type: "string",
    },
    {
      name: "codeLink",
      title: "Code Link",
      type: "string",
    },
    {
      name: "codeIcon",
      title: "Code Icon",
      type: "string",
    },
    {
      name: "imgUrls",
      title: "ImageUrls",
      type: "array",
      of: [
        {
          name: "imgUrl",
          title: "ImageUrl",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "imgUrlsM",
      title: "ImageUrlsM",
      type: "array",
      of: [
        {
          name: "imgUrlM",
          title: "ImageUrlM",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
  ],
};
