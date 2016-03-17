// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  },

  // events: {
  //   'click': function() {
  //     // this.model.play();
  //     // console.log(this);
  //     // console.log(this.model);
  //     this.model.enqueue();
  //   }
  // },

  render: function() {
    console.log("Song Queue View render called");
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});