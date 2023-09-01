

$(document).ready(function () {
  let currentTimeDay = dayjs();
  let hour = dayjs().format('HH');
  // Logic to determine if current time block is in the past, present or future.
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
  // Logic input the current date to the header in the format below.
  $('#currentDay').text(currentTimeDay.format('MMM D, YYYY'));

  // Logic to understand which save button had an input saved to its textarea.
  let saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {
    let input = $(this).siblings(".description").val();
    let key = $(this).parent().attr('id');
    localStorage.setItem(key, input);
    console.log(key, input);
  });
  
  // Logic to save the scheduled task after a page refresh. 
  $('.time-block').each( function (){
    let value = $(this).attr('id');
    let storedValue = localStorage.getItem(value);
    if (storedValue !== null) {
      $(this).children('.description').val(storedValue);
    }

})});
