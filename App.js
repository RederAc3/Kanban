var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
'X-Client-Id': '3669',
  'X-Auth-Token': '2220a2a5999f62cd2b81494a9be658d2'
};

fetch(baseUrl + '/board', {headers: myHeaders})
    .then(function(resp) {
        return resp.json();
    })

    .then(function(resp) {
        setupColumns(resp.columns);
    });

function setupColumns(columns) {
    columns.forEach(function(column) {
            var col = new Column(column.id, column.name);
        board.addColumn(col);
        setupCards(col, coumn.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name);
          col.addCard(cardObj);
    });
}

// OGÓLNA FUNKCJA
// function randomString() {
// 	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
// 	var str = '', i;
// 	for (i = 0; i < 10; i++) {
// 	  str += chars[Math.floor(Math.random() * chars.length)];
// 	}
// 	return str;
// }

function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
}
