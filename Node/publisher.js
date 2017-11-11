var mqtt = require('mqtt')
 
//client = mqtt.connect('mqtt://192.168.0.194:1883')
client = mqtt.connect('mqtt://localhost:1883')


client.subscribe('MQTTEnvia')
client.publish('MQTTEnvia', 'L')
client.end();
 
console.log('Client publishing...')
