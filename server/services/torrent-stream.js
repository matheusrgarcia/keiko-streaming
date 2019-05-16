var torrentStream = require("torrent-stream");

var engine = torrentStream("magnet:my-magnet-link");

engine.on("ready", function() {
  engine.files.forEach(function(file) {
    console.log("filename:", file.name);
    var stream = file.createReadStream();
    // stream is readable stream to containing the file content
  });
});

var stream = file.createReadStream({
  start: 10,
  end: 100
});
