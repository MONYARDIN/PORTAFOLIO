particlesJS(
    {
        "particles": {
          "number": {
            "value": 75,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#eee"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0.5,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.3,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 5,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3.4,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 20,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#555",
            "opacity": 0.5,
            "width": 1.1
          },
          "move": {
            "enable": true,
            "speed": 5,
            "direction": "false",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
              "enable": false,
              "rotateX": 2645.6299004281127,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 190,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
)

(function() {
  $(".skills-prog li")
    .find(".skills-bar")
    .each(function(i) {
      $(this)
        .find(".bar")
        .delay(i * 150)
        .animate(
          {
            width:
              $(this)
                .parents()
                .attr("data-percent") + "%"
          },
          1000,
          "linear",
          function() {
            return $(this).css({
              "transition-duration": ".5s"
            });
          }
        );
    });

  $(".skills-soft li")
    .find("svg")
    .each(function(i) {
      var c, cbar, circle, percent, r;
      circle = $(this).children(".cbar");
      r = circle.attr("r");
      c = Math.PI * (r * 2);
      percent = $(this)
        .parent()
        .data("percent");
      cbar = (100 - percent) / 100 * c;
      circle.css({
        "stroke-dashoffset": c,
        "stroke-dasharray": c
      });
      circle.delay(i * 150).animate(
        {
          strokeDashoffset: cbar
        },
        1000,
        "linear",
        function() {
          return circle.css({
            "transition-duration": ".3s"
          });
        }
      );
      $(this)
        .siblings("small")
        .prop("Counter", 0)
        .delay(i * 150)
        .animate(
          {
            Counter: percent
          },
          {
            duration: 1000,
            step: function(now) {
              return $(this).text(Math.ceil(now) + "%");
            }
          }
        );
    });
}.call(this));