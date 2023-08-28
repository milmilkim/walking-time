import {PWA} from '../../config'

export const manifest = {
  name: PWA.APP_NAME,
  short_name: PWA.APP_SHORT_NAME,
  description: PWA.DESCRIPTION,
  theme_color: PWA.APP_THEME_COLOR,
  icons: [
    {
      src: 'images/icon-48x48.png',
      sizes: '48x48',
      type: 'image/png',
      purpose: 'maskable any',
    },
    {
      src: 'images/icon-72x72.png',
      sizes: '72x72',
      type: 'image/png',
      purpose: 'maskable any',
    },
    {
      src: 'images/icon-96x96.png',
      sizes: '96x96',
      type: 'image/png',
      purpose: 'maskable any',
    },
    {
      src: 'images/icon-128x128.png',
      sizes: '128x128',
      type: 'image/png',
      purpose: 'maskable any',
    },
    {
      src: 'images/icon-144x144.png',
      sizes: '144x144',
      type: 'image/png',
      purpose: 'maskable any',
    },
    {
      src: 'images/icon-152x152.png',
      sizes: '152x152',
      type: 'image/png',
      purpose: 'maskable any',
    },
    {
      src: 'images/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable any',
    },
    {
      src: 'images/icon-384x384.png',
      sizes: '384x384',
      type: 'image/png',
      purpose: 'maskable any',
    },
    {
      src: 'images/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable any',
    },
  ],
};
