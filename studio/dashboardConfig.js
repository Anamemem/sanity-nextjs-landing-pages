export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615718e87cf3220a49392883',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y7q4ywhn',
                  apiId: '3316cdfb-af8f-43b2-900c-66b02347dc7b'
                },
                {
                  buildHookId: '615718e9593bdd09f721d51a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-88kprk8x',
                  apiId: 'da87e5a6-45d4-4563-ae6f-666900281c23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Anamemem/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-88kprk8x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
