import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello'){
throw new Error ('boom!');
}

if (capitalize('') !== ''){
throw new Error('boom!');
}





console.log('Okey, program work is work fine!');
