// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'ended': function() {
      // this.model.play();
      // console.log(this);
      // console.log(this.model);
      this.ended();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes)); // what is this.model?
  }
});
