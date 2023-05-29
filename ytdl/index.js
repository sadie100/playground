"use strict";
exports.__esModule = true;
var fs = require("fs");
var ytdl = require("ytdl-core");
ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(fs.createWriteStream("video.mp4"));
