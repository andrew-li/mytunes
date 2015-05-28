// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    this.set({
      played : 0,
      votes: 0
    });
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  //send intent to enqueue the song
  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },
  //send intent to dequeue the song
  dequeue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },
  //send intent to shift the queue and play the first available song
  playFirst: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('playFirst');
  }

//extra credit properties:
//upvotes
//count
//maybe on playlist model song extension??


});
