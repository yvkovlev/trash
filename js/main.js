"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Events =
/*#__PURE__*/
function () {
  function Events() {
    _classCallCheck(this, Events);

    this.init();
  }

  _createClass(Events, [{
    key: "init",
    value: function init() {
      var body = document.querySelector('body');
      this.addActiveClass(body);
      this.mainTab();
      this.navActive();
      this.inputActive();
    }
  }, {
    key: "initTab",
    value: function initTab(items) {
      var _this = this;

      Array.prototype.slice.call(items).forEach(function (item) {
        _this.tab(item);
      });
    }
  }, {
    key: "addActiveClass",
    value: function addActiveClass(box) {
      var _this2 = this;

      box.onclick = function (e) {
        _this2.toggleClass(e);

        _this2.popup(e);
      };
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(e) {
      var target = e.target;

      if (target.hasAttribute('data-active')) {
        e.preventDefault();
        var attr = target.getAttribute('data-active') ? target.getAttribute('data-active') : false;

        if (attr) {
          var blocks = document.querySelectorAll("[data-active=\"".concat(attr, "\"]"));
          Array.prototype.slice.call(blocks).forEach(function (box) {
            box.classList.toggle('active');
          });
        } else {
          target.classList.toggle('active');
        }
      }
    }
  }, {
    key: "mainTab",
    value: function mainTab() {
      this.mainTabEvents('#coworking', '[data-block="coworking"]', '#tabcoworking', '.tab', '.main__block-button-arrow', '.header', '#coworkingSabmit');
      this.mainTabEvents('#events', '[data-block="events"]', '#tabEvents', '.tab', '.main__block-button-arrow', 'header');
    }
  }, {
    key: "mainTabEvents",
    value: function mainTabEvents(button, buttonBlock, tabBlock, tab, arrow, header, buttonEx) {
      var btn = document.querySelector(button);

      if (btn) {
        var btnBlock = document.querySelector(buttonBlock),
            tabBox = document.querySelector(tabBlock),
            btnArrow = btnBlock.querySelector(arrow),
            headerBlock = document.querySelector(header),
            btnEx = document.querySelector(buttonEx) ? document.querySelector(buttonEx) : false;
        var block = document.querySelector(tab);
        var masonry;

        btn.onclick = function (e) {
          if (btnBlock.classList.contains('active')) {
            btnBlock.classList.toggle('active');
            tabBox.classList.toggle('active');
            block.classList.add('removing');
            headerBlock.classList.toggle('active');
            btn.classList.toggle('hidden');

            if (btnEx) {
              btnEx.classList.toggle('hidden');
            }

            setTimeout(function () {
              block.className = 'tab';
            }, 400);
          } else {
            btnBlock.classList.toggle('active');
            tabBox.classList.toggle('active');
            block.classList.toggle('active');
            headerBlock.classList.toggle('active');
            btn.classList.toggle('hidden');

            if (btnEx) {
              btnEx.classList.toggle('hidden');
            }

            switch (btn.getAttribute('id')) {
              case 'coworking':
                block.classList.toggle('to-left');
                break;

              case 'events':
                block.classList.toggle('to-right');
                break;
            }
          }

          if (window.innerWidth <= 1024) {
            setTimeout(function () {
              new Swiper("".concat(tabBlock, " .swiper-container"), {
                width: 290
              });
            }, 500);
          } // new Masonry(`${tabBlock} .gallery__list`, {
          //     itemSelector: '.gallery__item',
          //     gutter: 20,
          //     fitWidth: true
          // });

        };

        btnArrow.onclick = function (e) {
          btnBlock.classList.toggle('active');
          tabBox.classList.toggle('active');
          block.classList.add('removing');
          headerBlock.classList.toggle('active');
          btn.classList.toggle('hidden');

          if (btnEx) {
            btnEx.classList.toggle('hidden');
          }

          setTimeout(function () {
            block.className = 'tab';
          }, 400);
        };
      }
    }
  }, {
    key: "navActive",
    value: function navActive() {
      var boxes = document.querySelectorAll('.tab__nav');
      Array.prototype.slice.call(boxes).forEach(function (box) {
        box.onclick = function (e) {
          var target = e.target;
          box.querySelector('.active').classList.remove('active');

          if (target.classList.contains('tab__nav-link')) {
            target.classList.add('active');
          }
        };
      });
    }
  }, {
    key: "tab",
    value: function tab(box) {
      var tabBox = document.querySelector(box);

      if (tabBox) {
        tabBox.onclick = function (e) {
          var target = e.target;

          if (target.hasAttribute('data-tab')) {
            var attr = target.getAttribute('data-tab'),
                selectBlocks = tabBox.querySelectorAll("[data-tab=\"".concat(attr, "\"]")),
                allBlocks = tabBox.querySelectorAll('[data-tab]');
            Array.prototype.slice.call(allBlocks).forEach(function (item) {
              item.classList.remove('active');
            });
            Array.prototype.slice.call(selectBlocks).forEach(function (item) {
              item.classList.add('active');
            });
          }
        };
      }
    }
  }, {
    key: "popup",
    value: function popup(e) {
      var target = e.target;

      if (target.hasAttribute('data-popup')) {
        var name = target.getAttribute('data-popup'),
            popup = document.querySelectorAll("[data-popup=\"".concat(name, "\"]"));
        Array.prototype.slice.call(popup).forEach(function (item) {
          item.classList.toggle('active');
        });
      }
    }
  }, {
    key: "inputActive",
    value: function inputActive() {
      var labels = document.querySelectorAll('.form__label');
      Array.prototype.slice.call(labels).forEach(function (label) {
        var input = label.querySelector('.form__input');

        input.onblur = function () {
          if (input.value != '') {
            label.classList.add('active');
          } else {
            label.classList.remove('active');
          }
        };
      });
    }
  }]);

  return Events;
}();

svg4everybody();
var events = new Events();
/* Тут прописывать инициализацию табов (id должен быть общим контейнером для кнопок и самих табов) */

events.initTab(['#coworkingAbout', '#eventsAbout', '#coworkingHall']);
/* ------- */

function onScrollCow(event) {
  var scrollPos = $(document).scrollTop();
  $('#tabNavcoworking a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));

    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#tabNavcoworking ul li a').removeClass("active"); //added to remove active class from all a elements

      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

function onScrollEve(event) {
  var scrollPos = $(document).scrollTop();
  $('#tabNavEvents a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));

    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#tabNavEvents ul li a').removeClass("active"); //added to remove active class from all a elements

      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}

$("#tabcoworking").on("scroll", onScrollCow);
$("#tabEvents").on("scroll", onScrollEve);
$("#tabNavcoworking").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id)[0].offsetTop;
  $('#tabcoworking').animate({
    scrollTop: top
  }, 1000);
});
$("#tabNavEvents").on("click", "a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
      top = $(id)[0].offsetTop;
  $('#tabEvents').animate({
    scrollTop: top
  }, 1000);
});
//# sourceMappingURL=main.js.map
