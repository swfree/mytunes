// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  called: false,

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    
  },

  setSong: function(song) {
    this.model = song;
    this.render();
    if (this.called === false) {
      this.$el.on('ended', function(e) {
        song.ended();
      });
      this.called = true;
    }
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
