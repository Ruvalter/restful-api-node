var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CardSchema   = new Schema({
  name: String,
  title: String,
  grammarClass: String, //Ex.: Verbs, Nouns...
  meaning: String,
  example: String,
  lastSeenAt: Date,
  deckId: Array //Array - for the type many to many
});

module.exports = mongoose.model('Card', CardSchema);