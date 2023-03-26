import "@fontsource/roboto";
import "@fontsource/roboto-condensed";
import "@fontsource/roboto-flex";
import "@fontsource/roboto-serif";
import './src/stylesheets/style.css';
import 'ol/ol.css';
import initconfig from './src/config.js';
import netWorker from './src/workers/networker?worker';
import syncWorker from './src/workers/syncworker?worker';
import reqWorker from './src/workers/reqworker?worker';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import OSM from 'ol/source/OSM.js';
import { Circle as CircleStyle, RegularShape, Text, Fill, Stroke, Style } from 'ol/style.js';
import { defaults as defaultControls } from 'ol/control.js';
import { transform } from 'ol/proj.js';

if('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      let registeredSW;
      if (import.meta.env?.DEV){
        registeredSW = await navigator.serviceWorker.register('./src/workers/service-worker.js', {
          type: 'module',
        });
      } else {
        registeredSW = await navigator.serviceWorker.register('/service-worker.js');
      }
      //console.log('Service worker registered! 😎', registeredSW);
    } catch (err){
      //console.log('😥 Service worker registration failed: ', err);
    }
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  const workers = [netWorker, syncWorker, reqWorker];
  const toggleSidebarBtn = document.querySelector('.mobile-menu-button');
  const prefsTogglerBtn = document.querySelector('.main-application-submenu-toggler');
  const sideBar = document.querySelector('.sidebar');
  const mainView = document.getElementById('mainview');
  const prefsSubmenus = document.getElementById('preferences-submenus');
  const collapseIcon = document.querySelector('.icon-collapse-updown');
  toggleSidebarBtn.addEventListener('click', () => {
    document.querySelector('.mobile-top-brand-nav').classList.toggle('hidden');
    document.querySelector('.slide-aside-button-icon').classList.toggle('button-forwardburger');
    document.querySelector('.slide-aside-button-icon').classList.toggle('button-backburger');
    setTimeout(() => {
      sideBar.classList.toggle('-translate-x-full');
      mainView.classList.toggle('hidden');
    }, 100);
  });
  prefsTogglerBtn.addEventListener('click', () => {
    prefsSubmenus.classList.toggle('hidden');
    prefsSubmenus.classList.toggle('-translate-y-full');
    collapseIcon.classList.toggle('rotate-180');
  });
  let map;
  const style = new Style({
    fill: new Fill({
      color: '#eeeeee',
    }),
    stroke: new Stroke({
      color: '#ff0000',
      width: 2,
    }),
  });
  map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      }),
      new VectorLayer({
        source: new VectorSource({
          url: '../api/bus-routes',
          format: new GeoJSON(),
        }),
        style: function (feature, resolution) {
          console.log(resolution);
          if(feature.get('name') == 'Trans Jogja 1B'){
            style.getFill().setColor('#f4a2a6');
            style.getStroke().setColor('#f4a2a6');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 2B'){
            style.getFill().setColor('#a0cfeb');
            style.getStroke().setColor('#a0cfeb');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 3A'){
            style.getFill().setColor('#e36b00');
            style.getStroke().setColor('#e36b00');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 3B'){
            style.getFill().setColor('#ffae66');
            style.getStroke().setColor('#ffae66');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 4A'){
            style.getFill().setColor('#66ab08');
            style.getStroke().setColor('#66ab08');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 4B'){
            style.getFill().setColor('#c1d5a5');
            style.getStroke().setColor('#c1d5a5');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 5A'){
            style.getFill().setColor('#c1d5a5');
            style.getStroke().setColor('#c1d5a5');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 5B'){
            style.getFill().setColor('#c2a0dd');
            style.getStroke().setColor('#c2a0dd');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 6A'){
            style.getFill().setColor('#5c4137');
            style.getStroke().setColor('#5c4137');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 6B'){
            style.getFill().setColor('#a29590');
            style.getStroke().setColor('#a29590');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 7'){
            style.getFill().setColor('#9c1b13');
            style.getStroke().setColor('#9c1b13');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 8'){
            style.getFill().setColor('#005ea5');
            style.getStroke().setColor('#005ea5');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 9'){
            style.getFill().setColor('#40b6b5');
            style.getStroke().setColor('#40b6b5');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 10'){
            style.getFill().setColor('#f7c42f');
            style.getStroke().setColor('#f7c42f');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 11'){
            style.getFill().setColor('#c1d01b');
            style.getStroke().setColor('#c1d01b');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 13'){
            style.getFill().setColor('#bd9d3d');
            style.getStroke().setColor('#bd9d3d');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 14'){
            style.getFill().setColor('#457800');
            style.getStroke().setColor('#457800');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Trans Jogja 15'){
            style.getFill().setColor('#9c1b13');
            style.getStroke().setColor('#9c1b13');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Teman Bus K1J'){
            style.getFill().setColor('#e83d46');
            style.getStroke().setColor('#e83d46');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Teman Bus K2J'){
            style.getFill().setColor('#1a94d9');
            style.getStroke().setColor('#1a94d9');
            style.getStroke().setWidth(6);
            return style;
          } else if(feature.get('name') == 'Teman Bus K3J'){
            style.getFill().setColor('#a14d01');
            style.getStroke().setColor('#a14d01');
            style.getStroke().setWidth(6);
            return style;
          } else {
            style.getFill().setColor('#eeeeee');
            style.getStroke().setColor('#eeeeee');
            style.getStroke().setWidth(1);
            return style;
          }
        },
      }),
      new VectorLayer({
        source: new VectorSource({
          url: '../api/bus-stops',
          format: new GeoJSON(),
        }),
      }),
    ],
    controls: defaultControls({zoom: false,}),
    view: new View({
      center: transform([110.367088, -7.782928], 'EPSG:4326','EPSG:3857'),
      zoom: 11
    })
  });
  map.once('postrender', function(e){
    e.stopPropagation();
    this.updateSize();
    return false;
  });
  map.on('moveend', function(e){
    e.stopPropagation();
    this.updateSize();
    return false;
  });
});
