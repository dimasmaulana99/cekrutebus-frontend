import { defineConfig } from 'vite';
//import replace from '@rollup/plugin-replace';
//import { injectManifest } from 'rollup-plugin-workbox';
// import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      onwarn: function(warning, superOnWarn) {
        /*
         * skip certain warnings
         * https://github.com/openlayers/openlayers/issues/10245
         */
        if (warning.code === 'THIS_IS_UNDEFINED') {
          return;
        }
        superOnWarn(warning);
      },
    },
  }
});