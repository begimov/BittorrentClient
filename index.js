'use strict';

const fs = require('fs');

const bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('test.torrent'));

console.log(torrent.announce.toString('utf-8'));