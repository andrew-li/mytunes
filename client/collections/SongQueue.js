// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  enqueue: function(song){

    this.add(song);
    if(this.models.length === 1)
      song.play();
    this.trigger('showQueue');

  },

  dequeue: function(song){

    if(song === this.at(0))
      this.playFirst();
    else
      this.remove(song);
    this.trigger('showQueue');

  },

  playFirst: function(){

    this.shift();
    if (this.models.length >= 1)
      this.at(0).play();
    this.trigger('showQueue');

  }

});
