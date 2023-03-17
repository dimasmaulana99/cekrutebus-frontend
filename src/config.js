var cTimestamp = new Date().valueOf();
var initconfig = {
  state: 'default',
  uid: cTimestamp,
  netstate: 1,
  nettimeout: 30,
  version: { build: '0.1.8', codebase: 'Bhoot Jolokia' },
  userprofile: {
    registered: false,
    uuid: null,
    group: {
      guid: null
    }
  },
  mapconfig: {
    mapstate: 'default',
    initcentroid: { x: '110.367088', y: '-7.782928' },
    initzoom: '14',
    lastcentroid: { x: '110.367088', y: '-7.782928' },
    lastzoom: '14',
    zoomcontrol: true,
    basemaps: {
      flag: 1,
      online: {
        default: {flag: 1, type: 'tileserver', provider: 'osm', id: 'osm', displayopt: 'default', label: 'OpenStreetMap Standard'},
        userdefined: [],
        nobasemap: {flag: 1, type: 'none', provider: null, id: 'nobasemap', displayopt: 'option', label: 'No Basemap'}
      },
      offline: { file: null }
    },
    draw: {
      flag: true,
      components: [
        {type: 'Point', active: 1, snap: true, pxtolerance: 10, modify: true},
        {type: 'LineString', active: 1, snap: true, pxtolerance: 10, modify: true},
        {type: 'Polygon', active: 1, snap: true, pxtolerance: 10, modify: true},
        {type: 'Circle', active: 1, snap: true, pxtolerance: 10, modify: true}
      ]
    },
    locate: true,
    tracking: true
  },
  maindata: {
    projectname: 'myproject',
    syncinterval: 60,
    points: [],
    linestring: [],
    polygon: [],
    circle: [],
    text: []
  },
  tracks: {
    flag: true,
    trackinterval: 60,
    default: [],
    user: []
  }
};

export default initconfig;
