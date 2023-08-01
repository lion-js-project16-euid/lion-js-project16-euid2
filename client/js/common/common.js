import { getNode, insertLast, nowTime } from '/lib/index.js';

let time = getNode('.nowTime');
insertLast(time, nowTime());
