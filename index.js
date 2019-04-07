function displayDogs(responseJson){
    console.log(responseJson);
    $('.results').append(`<img src="${responseJson.message}" class="dogImages">`);
    $('.results').removeClass('hidden');
}

function getDogImages(userInput){
    for ( let i = 0; i < userInput; i++) {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => displayDogs(responseJson));
    }
    
}

function watchForm(){
    $('form').submit(function(event){
        event.preventDefault();
        $('.dogImages').remove();
       let userInput = $('#userInput').val();
       console.log(userInput);
        getDogImages(userInput);
    })
}

$(function(){
    console.log('Dog randomizer loaded! Waiting for input.');
    watchForm();
})