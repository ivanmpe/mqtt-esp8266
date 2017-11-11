var mqtt = require('mqtt')
 
client = mqtt.connect('mqtt://localhost:1883')


client.subscribe('MQTTRecebe');

client.on('message', function (topic, message) {
  console.log(message.toString());
 
});

console.log('Client started...');
