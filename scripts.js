$( document ).ready(function(){
    // console.log('ready!');


    var root = 'https://jsonplaceholder.typicode.com';

  $.ajax({ // Ajax request for user with id 1
    url: root + '/users/1/albums',
    method: 'GET'
  }).then(function(data) {
    data.forEach(album => { // promise distribute data from ajax request

      $('.table').first().append(`
        <div id='make-drag' class='table-row'>
          <div class='table__cell table__cell--short'>${album.id}</div>
          <div class='table__cell'>${album.title}</div>
        </div>
        `);
    });
    $('.table .table-row').first().remove(); // removing first row
  });



  $.ajax({ // Ajax request for user with id 2
    url: root + '/users/2/albums',
    method: 'GET'
  }).then(function(data) {
    data.forEach(album => { // promise distribute data from ajax request

      $('.table').first().next().append(`
        <div id='make-drag' class='table-row'>
          <div class='table__cell table__cell--short'>${album.id}</div>
          <div class='table__cell'>${album.title}</div>
        </div>
        `);
    });
    $('.table').last().children().first().next().remove(); // removing first row
  });


  // $("#sortable1, #sortable2").sortable({
  //   items: '> :not(.tableheader)',
  //   connectWith: '.table',
  //   activate: () => { // highlight tables while dragging
  //     $( "#sortable1, #sortable2, #make-drag" ).css({
  //       'background-color': 'rgba(255, 202, 0, 0.2)',
  //     });
  //   },
  //   deactivate: () => { // dehighlight
  //     $( "#sortable1, #sortable2, #make-drag" ).css({
  //       'background-color': ''
  //     });
  //   },
  // }).disableSelection();

  $('.table').find('> .table-row').on({
    click: (e) => {
      console.log('yo');
    }
  });



    // var selectedClass = 'ui-state-highlight',
    //      clickDelay = 600,     // click time (milliseconds)
    //      lastClick, diffClick; // timestamps
    //
    //  $("#sortable1").on({
    //        mousedown: function(e){
    //          debugger
    //          // console.log('click');
    //            lastClick = e.timeStamp;
    //          },
    //        mouseup: function(e){
    //          diffClick = e.timeStamp - lastClick;
    //          if ( diffClick < clickDelay ) {
    //              // add selected class to group draggable objects
    //              $(this).toggleClass(selectedClass);
    //            }
    //          }
    //      })
    //      .draggable({
    //          revertDuration: 10, // grouped items animate separately, so leave this number low
    //          containment: '.tables',
    //          start: function(e, ui) {
    //            debugger
    //              ui.helper.addClass(selectedClass);
    //          },
    //          stop: function(e, ui) {
    //              // reset group positions
    //              debugger
    //              $('.' + selectedClass).css({ top:0, left:0 });
    //          },
    //          drag: function(e, ui) {
    //            debugger
    //              // set selected group position to main dragged object
    //              // this works because the position is relative to the starting position
    //              $('.' + selectedClass).css({
    //                  top : ui.position.top,
    //                  left: ui.position.left
    //              });
    //          }
    //      });
    //
    //  $("#sortable1, #sortable2")
    //      .sortable()
    //      .droppable({
    //          drop: function(e, ui) {
    //            debugger
    //              $('.' + selectedClass)
    //               .appendTo($(this))
    //               .add(ui.draggable) // ui.draggable is appended by the script, so add it after
    //               .removeClass(selectedClass)
    //               .css({ top:0, left:0 });
    //          }
    //      });
    //
    //
    //
    //

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
