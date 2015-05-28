// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
//listen for end of song, send intent to songqueue for natural dequeue
    var oldThis = this;
    this.$el.on('ended', function() {
      oldThis.model.playFirst();
    });
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

//listen for click to remove current song, send intent to remove current song

  render: function(){
//show current song
//extra credit: play count and upvote/downvote
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
