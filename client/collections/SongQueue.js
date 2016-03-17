// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    
  },

  finished: function() {
    this.remove(this.at(0));
    if (this.length >= 1 ) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  }

});