// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  queuedSongs: [],
  initialize: function() {
    this.on('enqueue', this.enqueue);
    this.on('ended', this.remove, this);
  },

  add: function(newSong) {
    // console.log(this.model.get('songQueue'));
    // this.get('storeSongQueue');

    var model = new SongModel(songData);

    this.queuedSongs.push(model);
    if (this.queuedSongs.length === 1) {
      this.playFirst();
      
    }
    // add newSong to queue
    // init an array that stores new songs we pass in
    // array[0] will be current song
    // call PlayFirst --> playView.setSong(first song)
    // whenever current song ends
    // get rid of current song
    // move up next song
  },

  remove: function() {
    this.queuedSongs.splice(0, 1);
  },

  // this.queuedSongs.on('ended', this)
    // this.queuedSongs.splice(0)

  enqueue: function() {

  },

  playFirst: function() {}

});