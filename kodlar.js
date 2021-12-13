$(window).load(function () {

  var body = $("body"),
    universe = $("#universe"),
    solarsys = $("#solar-system");

  var init = function () {
    body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function () {
      $(this).removeClass('hide-UI').addClass("set-speed");
      $(this).dequeue();
    });
  };

  var setView = function (view) { universe.removeClass().addClass(view); };

  $("#toggle-data").click(function (e) {
    body.toggleClass("data-open data-close");
    e.preventDefault();
  });

  $("#toggle-controls").click(function (e) {
    body.toggleClass("controls-open controls-close");
    e.preventDefault();
  });

  $("#data a").click(function (e) {
    var ref = $(this).attr("class");
    solarsys.removeClass().addClass(ref);
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

  $(".set-view").click(function () { body.toggleClass("view-3D view-2D"); });
  $(".set-zoom").click(function () { body.toggleClass("zoom-large zoom-close"); });
  $(".set-speed").click(function () { setView("scale-stretched set-speed"); });
  $(".set-size").click(function () { setView("scale-s set-size"); });
  $(".set-distance").click(function () { setView("scale-d set-distance"); });

  init();

});


function openCity(evt, cityName) {
  console.log("asd");
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
