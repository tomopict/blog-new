module.exports = {
  // Title of your website
  title: 'tomopictのblog',

  // Description of your website
  description: 'Tomopict',

  head: [
    [
      'link',
      {
        href: '/css/style.css',
        rel: 'stylesheet'
      }
    ]
  ],      

  // Language of your website
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'tomopictのblog',
      description: 'VuePress Blog'
    }
  },

  // Theme to use
  theme: 'meteorlxy',

  // Theme config
  themeConfig: {
    // Language of this theme. See the [Theme Language] section below.
    lang: require('./public/lang/ja-JP'),

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'tomopict',

      // Introduction of yourself
      description: '',

      // Email
      email: '',

      // Your location
      location: 'Japan',

      // Your organization
      organization: '',

      // Your avatar image
      // Set to external link
      avatar: '/img/avatar.png',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'tomopict',
          link: 'https://github.com/tomopict',
        },
        
        // // Facebook account and link
        // facebook: {
        //   account: '',
        //   link: '',
        // },

        // // LinkedIn account and link
        // linkedin: {
        //   account: '',
        //   link: '',
        // },

        // Twitter account and link
        twitter: {
          account: 'tomopict',
          link: 'https://twitter.com/tomopict',
        },

        // weibo: {
        //   account: '',
        //   link: '',
        // },


        // // Instagram account and link
        // instagram: {
        //   account: '',
        //   link: '',
        // },

        // // GitLab account and link
        // gitlab: {
        //   account: '',
        //   link: '',
        // },

        // // Bitbucket account and link
        // bitbucket: {
        //   account: '',
        //   link: '',
        // },

        // // Docker Hub account and link
        // docker: {
        //   account: '',
        //   link: '',
        // },
      },
    },

    // Header Config
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        // url: '/img/bg.png',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Github', link: 'https://github.com/meteorlxy/vuepress-theme-meteorlxy' },
    ],

    // Comments config. See the [Posts Comments] section below.
    comments: {
      owner: 'meteorlxy',
      repo: 'vuepress-theme-meteorlxy',
      clientId: 'MY_CLIENT_ID',
      clientSecret: 'MY_CLIENT_SECRET',
    },

    // Pagination config
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}