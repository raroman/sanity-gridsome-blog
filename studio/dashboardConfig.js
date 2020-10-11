export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f838caaf2fb3e7125d438f5',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-vcvytftx',
                  apiId: '94a1189e-91c6-4282-a994-b552880f4467'
                },
                {
                  buildHookId: '5f838caa9559f96a661b5a40',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-7vk4swzj',
                  apiId: 'cb581b73-f326-4bd8-996e-70e2235a4146'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raroman/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-7vk4swzj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
