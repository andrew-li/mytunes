// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    // making the html for the entire SongQueue
    this.render();

    // this is the event listener for a collection of models (SongQueue)
    this.collection.on('showQueue', this.render, this);
  },

//listen to libraryentry for enqueue events, and sends intent to songqueue to enqueue

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

    //return this.$el;
  }

//make playerlist view to check the queue to add a playlist

});
