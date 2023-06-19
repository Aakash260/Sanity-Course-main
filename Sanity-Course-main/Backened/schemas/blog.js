export default {
    name: 'blog',
    type: 'document',
      title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block'
          },
          {
            type: 'image'
          }
        ]
      },
      {
        title: 'Launch Scheduled At',
        name: 'launchAt',
        type: 'datetime'
      },
      {
        title: 'Meta-Description',
        name: 'descr',
        type: 'text'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        title: 'Image',
        name: 'blogimage',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        
      },
    ]
  }

