
$(function () {

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));  
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, eventText);
  });

  function updateColors() {
    var currentHour = dayjs().hour();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      $(this).removeClass("past present future");

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
          $(this).addCLass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  updateColors();

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedEvent = localStorage.getItem(timeBlockId);

    if (savedEvent !== null) {
      $(this).children(".description").val(savedEvent);
    }
  });

  setInterval(updateColors, 60000);

});

