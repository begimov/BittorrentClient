'use strict';

const fs = require('fs');

const bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('test.torrent'));

const tracker = require('./tracker.js');

console.log(tracker.getPeers());
