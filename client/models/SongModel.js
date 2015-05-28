// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  //send intent to queue the song
  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
 console.log("in song model");
    this.trigger('enqueue', this);
  }

//extra credit properties:
//upvotes
//count
//maybe on playlist model song extension??


});
