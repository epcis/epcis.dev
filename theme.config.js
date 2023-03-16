import { useRouter } from 'next/router'
import Footer from './components/Footer'

const Logo = ({ height }) => (
  <svg height={height} viewBox='0 0 70 70' fill='none'>
    <circle cx='35' cy='35' r='35' fill='currentColor' />
  </svg>
)

export default {
  // projectLink: 'https://github.com/shuding/cobe',
  docsRepositoryBase: 'https://github.com/epcis/epcis.dev/blob/main/pages',
  // search: true,
  // titleSuffix: '',
  // unstable_flexsearch: true,
  // unstable_faviconGlyph: '☁︎',
  // floatTOC: true,
  chat: {
    link: 'https://discord.gg/8qZ3Y4J',
    // icon: <svg width="24" height="24" viewBox="0 0 248 204"><path fill="currentColor" d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07a50.338 50.338 0 0 0 22.8-.87C27.8 117.2 10.85 96.5 10.85 72.46v-.64a50.18 50.18 0 0 0 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71a143.333 143.333 0 0 0 104.08 52.76 50.532 50.532 0 0 1 14.61-48.25c20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26a50.69 50.69 0 0 1-22.2 27.93c10.01-1.18 19.79-3.86 29-7.95a102.594 102.594 0 0 1-25.2 26.16z"/></svg>,
  },
  project: {
    link: 'https://github.com/epcis/epcis',
    // icon: <svg width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="m231.9 169.8l-94.8 65.6a15.7 15.7 0 0 1-18.2 0l-94.8-65.6a16.1 16.1 0 0 1-6.4-17.3L45 50a12 12 0 0 1 22.9-1.1L88.5 104h79l20.6-55.1A12 12 0 0 1 211 50l27.3 102.5a16.1 16.1 0 0 1-6.4 17.3Z"></path></svg>,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  gitTimestamp: <div></div>,
  logo: () => {
    const { route } = useRouter()
    return (
      <>
        {/* <Logo height={18} /> */}
        
        <span
            className='mx-2 text-2xl font-extrabold select-none '
            title='Visibility.Cloud'
            style={{ whiteSpace: 'nowrap' }}
          >
            {/* Visibility<span className='font-thin'>.Cloud</span> {route === '/' ? null : ''} */}
            EPCIS<span className='font-thin'>.Dev</span> {route === '/' ? null : ''}
          </span>
      </>
    )
  },
  head: ({ title, meta }) => {
    const ogImage =
      'https://repository-images.githubusercontent.com/429536908/62a4e686-8613-4b45-b7bb-fa35b558ae8e'

    return (
      <>
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='description'
          content='A 5kB WebGL globe library.'
        />
        <meta
          name='og:description'
          content='A 5kB WebGL globe library.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@shuding_' />
        <meta name='twitter:image' content={ogImage} />
        <meta name='og:title' content={title ? title + ' – COBE' : 'COBE'} />
        <meta name='og:image' content={ogImage} />
        <meta name='apple-mobile-web-app-title' content='COBE' />
      </>
    )
  },
  footer: {
    component: <div></div>
  },
  // footerEditLink: () => {
  //   const { route } = useRouter()
  //   if (route.includes('/showcases/')) {
  //     return null
  //   }
  //   return 'Edit this page on GitHub'
  // },
  // gitTimestamp: false,
}
