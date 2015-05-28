// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  enqueue: function(song){
    this.add(song);
    this.trigger('showQueue');
  }

//actions
//enqueue
//natural dequeue (remove from front, put onto player)
//unnatural dequeue (remove anywhere in queue)

});
