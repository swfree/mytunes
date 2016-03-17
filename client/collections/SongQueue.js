// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('ended', this.ended, this);
    this.on('add', this.plus, this);
    this.on('dequeue', this.dequeue, this);
  },

  plus: function(newSong) {
    console.log(this.length);

    // console.log(this.model.get('songQueue'));
    // this.get('storeSongQueue');

    // var model = new SongModel({
    //   artist: 'Fakey McFakerson',
    //   title: 'Never Gonna Mock You Up',
    //   url: 'example/url',
    // });

    // this.queuedSongs.push(model);
    if (this.length === 1) {
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

  // this.queuedSongs.on('ended', this)
    // this.queuedSongs.splice(0)

  enqueue: function() {

  },

  ended: function() {
    console.log('inside Ended function');
    this.remove(this.at(0));
    if (this.length >= 1 ) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.at(0).play();
  }

});