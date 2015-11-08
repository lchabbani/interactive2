var letters = $('.letters').html().split('');
var letterArray = [];

for (i = 0; i < letters.length; i++) {
    console.log(letters[i]);
 
	var character = letters[i];
    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
	var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
    
    letterArray.push(characterHTML);
};

$('.letters').html(letterArray);


var letters2 = $('.letters2').html().split('');
var letterArray = [];

for (i = 0; i < letters2.length; i++) {
    console.log(letters2[i]);
 
	var character = letters2[i];
    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
	var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
    
    letterArray.push(characterHTML);
};

$('.letters2').html(letterArray);


var letters3 = $('.letters3').html().split('');
var letterArray = [];

for (i = 0; i < letters3.length; i++) {
    console.log(letters3[i]);
 
	var character = letters3[i];
    var chracterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
	var characterHTML = '<div class="letter" data-character="' + character + '">' + chracterDefinition + '</div>';
    
    letterArray.push(characterHTML);
};

$('.letters3').html(letterArray);




