// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  enqueue: function(song){
//console.log("in songQ");
    this.add(song);
    if(this.models.length === 1)
      song.play();
    this.trigger('showQueue');
  },

  dequeue: function(song){
console.log("DQ called");
console.log(this.models);
    this.remove(song);
console.log(this.models);
    this.trigger('showQueue');
  },

  playFirst: function(){
console.log("playfirst called");
console.log(this.models);
    this.shift();
console.log(this.models);
    if (this.models.length >= 1) {
      this.at(0).play();
    }
    this.trigger('showQueue');
  }

//actions
//enqueue
//natural dequeue (remove from front, put onto player)
//unnatural dequeue (remove anywhere in queue)

});
