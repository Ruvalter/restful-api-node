var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DeckSchema   = new Schema({
  name: String,
  category: String //Ex.: Animais, Objetos...
},

{ 
	collection : 'decks' 
}
);

module.exports = mongoose.model('Deck', DeckSchema);