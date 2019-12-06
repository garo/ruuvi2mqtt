
const ruuvi = require('node-ruuvitag');

const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://mqtt.juhonkoti.net')

ruuvi.on('found', tag => {
  console.log('Found RuuviTag, id: ' + tag.id);
  tag.on('updated', data => {
    //console.log('Got data from RuuviTag ' + tag.id + ':\n' + JSON.stringify(data, null, '\t'));
    client.publish('harbonkatu/ruuvi/' + tag.id, JSON.stringify(data));
  });
});

/*
 * Got data from RuuviTag c19fc03e66d6:
 * {
 *   "dataFormat": 3,
 *   "rssi": -90,
 *   "humidity": 47.5,
 *   "temperature": 23.07,
 *   "pressure": 101852,
 *   "accelerationX": -499,
 *   "accelerationY": -383,
 *   "accelerationZ": 277,
 *   "battery": 3205
 * }
 *
 * */

