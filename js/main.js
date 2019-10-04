class Events {
  constructor() {
    this.init();
  }

  init() {
    const body = document.querySelector('body');
    this.addActiveClass(body);
    this.mainTab();
    this.navActive();
    this.tab('#caworkingAbout');
    this.tab('#eventsAbout');
    this.tab('#caworkingHall');
  }

  addActiveClass(box) {
    box.onclick = e => {
      this.toggleClass(e);
      this.popup(e);
    };
  }

  toggleClass(e) {
    const target = e.target;

    if (target.hasAttribute('data-active')) {
      e.preventDefault();
      target.classList.toggle('active');
    }
  }

  mainTab() {
    this.mainTabEvents('#caworking', '[data-block="caworking"]', '#tabCaworking', '.tab', '.main__block-button-arrow', '.header', '#caworkingSabmit');
    this.mainTabEvents('#events', '[data-block="events"]', '#tabEvents', '.tab', '.main__block-button-arrow', 'header');
  }

  mainTabEvents(button, buttonBlock, tabBlock, tab, arrow, header, buttonEx) {
    const btn = document.querySelector(button);

    if (btn) {
      const btnBlock = document.querySelector(buttonBlock),
            tabBox = document.querySelector(tabBlock),
            btnArrow = btnBlock.querySelector(arrow),
            headerBlock = document.querySelector(header),
            btnEx = document.querySelector(buttonEx) ? document.querySelector(buttonEx) : false;
      const block = document.querySelector(tab);

      btn.onclick = e => {
        if (btnBlock.classList.contains('active')) {
          btnBlock.classList.toggle('active');
          tabBox.classList.toggle('active');
          block.classList.add('removing');
          headerBlock.classList.toggle('active');
          btn.classList.toggle('hidden');

          if (btnEx) {
            btnEx.classList.toggle('hidden');
          }

          setTimeout(() => {
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
            case 'caworking':
              block.classList.toggle('to-left');
              break;

            case 'events':
              block.classList.toggle('to-right');
              break;
          }
        }

        new Masonry(`${tabBlock} .gallery__list`, {
          columnWidth: 280,
          itemSelector: '.gallery__item',
          gutter: 20,
          fitWidth: true
        });
      };

      btnArrow.onclick = e => {
        btnBlock.classList.toggle('active');
        tabBox.classList.toggle('active');
        block.classList.add('removing');
        headerBlock.classList.toggle('active');
        btn.classList.toggle('hidden');

        if (btnEx) {
          btnEx.classList.toggle('hidden');
        }

        setTimeout(() => {
          block.className = 'tab';
        }, 400);
      };
    }
  }

  navActive() {
    const boxes = document.querySelectorAll('.tab__nav');
    boxes.forEach(box => {
      box.onclick = e => {
        const target = e.target;
        box.querySelector('.active').classList.remove('active');

        if (target.classList.contains('tab__nav-link')) {
          target.classList.add('active');
        }
      };
    });
  }

  tab(box) {
    const tabBox = document.querySelector(box);

    if (tabBox) {
      tabBox.onclick = e => {
        const target = e.target;

        if (target.hasAttribute('data-tab')) {
          const attr = target.getAttribute('data-tab'),
                selectBlocks = tabBox.querySelectorAll(`[data-tab="${attr}"]`),
                allBlocks = tabBox.querySelectorAll('[data-tab]');
          allBlocks.forEach(item => {
            item.classList.remove('active');
          });
          selectBlocks.forEach(item => {
            item.classList.add('active');
          });
        }
      };
    }
  }

  popup(e) {
    const target = e.target;

    if (target.hasAttribute('data-popup')) {
      const name = target.getAttribute('data-popup'),
            popup = document.querySelectorAll(`[data-popup="${name}"]`);
      popup.forEach(item => {
        item.classList.toggle('active');
      });
    }
  }

}

new Events();
$(document).ready(function () {
  $("#tabNavCaworking").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id)[0].offsetTop;
    $('#tabCaworking').animate({
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
  $("#tabCaworking").on("scroll", onScrollCow);
  $("#tabEvents").on("scroll", onScrollEve);
});

function onScrollCow(event) {
  var scrollPos = $(document).scrollTop();
  $('#tabNavCaworking a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));

    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#tabNavCaworking ul li a').removeClass("active"); //added to remove active class from all a elements

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
//# sourceMappingURL=main.js.map
