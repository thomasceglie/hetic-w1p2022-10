var ids = ["p1", "p2", "p3", "p4", "p5"];

ids.forEach(function(id) {
  var element = document.getElementById(id);

  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.classList.add("is-reached75");
    },
    offset: "75%"
  });
});

var ids = ["p1", "p2", "p3", "p4", "p5"];

ids.forEach(function(id) {
  var element = document.getElementById(id);

  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.className = "is-reached50";
    },
    offset: "50%"
  });
});

var ids = ["p1", "p2", "p3", "p4", "p5"];

ids.forEach(function(id) {
  var element = document.getElementById(id);

  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.className = "is-reached25";
    },
    offset: "25%"
  });
});

var ids = ["p1", "p2", "p3", "p4", "p5"];

ids.forEach(function(id) {
  var element = document.getElementById(id);

  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      element.className = "is-reached5";
    },
    offset: "5%"
  });
});
