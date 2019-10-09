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
    const btn = document.querySelector(button),
          btnBlock = document.querySelector(buttonBlock),
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
        top = $(id)[0].offsetTop - 25;
    $('#tabCaworking').animate({
      scrollTop: top
    }, 1000);
  });
  $("#tabNavEvents").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id)[0].offsetTop - 25;
    $('#tabEvents').animate({
      scrollTop: top
    }, 1000);
  });
});
//# sourceMappingURL=main.js.map
