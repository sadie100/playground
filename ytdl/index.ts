import * as fs from "fs";
import * as ytdl from "ytdl-core";

ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
  fs.createWriteStream("video.mp4")
);
