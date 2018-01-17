$(function() {
    // console.log('ready!');

    var root = 'https://jsonplaceholder.typicode.com';

  $.ajax({ // Ajax request for user with id 1
    url: root + '/users/1/albums',
    method: 'GET'
  }).then(function(data) {
    data.forEach(album => { // promise distribute data from ajax request

      $('.table').first().append(`
        <div id='make-drag' class='table__row'>
          <div class='table__cell table__cell--short'>${album.id}</div>
          <div class='table__cell'>${album.title}</div>
        </div>
        `);
    });
    $('.table .table__row').first().remove(); // removing first row
  });



  $.ajax({ // Ajax request for user with id 2
    url: root + '/users/2/albums',
    method: 'GET'
  }).then(function(data) {
    data.forEach(album => { // promise distribute data from ajax request

      $('.table').first().next().append(`
        <div id='make-drag' class='table__row'>
          <div class='table__cell table__cell--short'>${album.id}</div>
          <div class='table__cell'>${album.title}</div>
        </div>
        `);

    });
    $('.table').last().children().first().next().remove(); // removing first row
  });


  $( "#sortable1, #sortable2" ).sortable({
    items: '#make-drag',
    connectWith: '.table',
    activate: () => {
      $( "#sortable1, #sortable2, #make-drag" ).css({
        'background-color': 'rgba(255, 202, 0, 0.2)',
      });
    },
    deactivate: () => {
      $( "#sortable1, #sortable2, #make-drag" ).css({
        'background-color': ''
      });
    }
  }).disableSelection();

  $("#make-drag").draggable({
    revert: true,
    fixed: true
  });


  $('.table__header').draggable({'revert': 'invalid' });



});

function search(search_table){
  let input = $(`.${search_table}`).val().toLowerCase();
  let search_res;

  // in order to use one search function for both inputs, we need to determine which
  // search-input we are using, so we taking the last letter from argument string
  // and depends on letter '1' or '2' we are requesting an array-like DOM objects 'search_res'
  if(search_table[search_table.length-1] === '1'){
    search_res = $('.table').first().children().slice(1);
  } else {
    search_res = $('.table').last().children().slice(1);
  }

  // Since 'search_res' is an array-like object, to iterate through it we need to
  // convert it to actual array

  Array.from(search_res).forEach(el => {

    if (el.innerText.indexOf(input) > -1){
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
}

function searchUser(){
  var root = 'https://jsonplaceholder.typicode.com';

  let input = $('.search_user').val();
  users = $.ajax({
    url: root + '/users/',
    method: 'GET'
  });
  debugger


}
