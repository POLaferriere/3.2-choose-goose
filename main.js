document.querySelector('#update-button').addEventListener('click', function() {

var thimbles = document.querySelector('#thimbles').value;
var swords = document.querySelector('#swords').value;

var totalCost = function (thimbles, swords) {
  return Number(thimbles) + Number(swords)*37;
};

var total = null;

if (totalCost(thimbles, swords) < 2) {
  total = totalCost(thimbles, swords) + ' money';
} else {
  total = totalCost(thimbles, swords) + ' monies';
}

document.querySelector('#the-total').textContent = total;

});
