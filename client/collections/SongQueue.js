// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // console.log('This collection: ' + this);
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

  },

  playFirst: function() {
    // console.log(this.at(0));
    this.at(0).play();
  },

  dequeue: function(song) {
    if (this.at(0) === song) {
      this.remove(song);
      if (this.length) {
        this.playFirst();
      }
    } else {
      this.remove(song);
    }
  }

});