import Type from './types';
const URL = process.env.NODE_ENV == 'production' ? "https://ufc.altcampus.in/" : "http://localhost:8000/";

export * from './event.js';
export * from './player.js';
export * from './fight.js';
export * from './result.js';
export * from './prediction.js';
export * from './user.js';
export * from './style.js';

