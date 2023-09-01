// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements in the html.
// use ID in containing timeblock to save user input - local storage
// each on past present future
// need to do something to the id before checking against it.
// maybe stringify it or parse
// eventlistener make the key match with the id of the hour is clicked.
// make var that will target text area input
// need text area value and id of div where we click that save btn
// if currentTime == timeBlock remove class of past, present or future
// use below to save the input to local storage, need to save it after refresh
// let value = $(this).val();
// let name = $(this).parent().attr('id');
// maybe define a variable to equal the TEXTAREA div. $('textarea).

//function checkTimeSave() {
//};

$(document).ready(function () {
  let currentTimeDay = dayjs();
  let hour = dayjs().format('HH');

  console.log($('.container-fluid').find('.py-3'));
  $('.container-fluid').find('.py-3').each( function (){
    let timeBlock = $(this).data("time");
    if (timeBlock == hour) {
      $(this).parent().removeClass('past present future').addClass("present");
    }
    if (timeBlock < hour) {
      $(this).parent().removeClass('past present future').addClass("past");
    }
    if (timeBlock > hour) {
      $(this).parent().removeClass('past present future').addClass("future");
    }
  })
  $('#currentDay').text(currentTimeDay.format('MMM D, YYYY'));

  let saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {
    let input = $(this).siblings(".description").val();
    let key = $(this).parent().attr('id');
    localStorage.setItem(key, input);
    console.log(key, input);
  });
  
  $('.time-block').each( function (){
    //let name = $(this).children('.description');
    let value = $(this).attr('id');
    let storedValue = localStorage.getItem(value);
    if (storedValue !== null) {
      $(this).children('.description').val(storedValue);
    }
    

    
  
    // get item from localstorage based off of key (saveItem)
    // set that textarea to have the value I got from local storage
  //})
  //condition to check if id matches key value 
  
  
})});












// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? DONE

  // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage? DONE
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? DONE
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? DONE
  
  // TODO: Add code to display the current date in the header of the page. DONE!