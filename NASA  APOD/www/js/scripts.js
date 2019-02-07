var app = new Framework7({
    //App root element
    root: '#app',
    routes:[
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url:'pages/page2.html',
        }
    ]
});




// From https://framework7.io/docs/popover.html

var $$ = Dom7;
$$('.popover-about').on('popover:open', function (e, popover) {
    console.log('About popover open');
  });
  $$('.popover-about').on('popover:opened', function (e, popover) {
    console.log('About popover opened');
  });
  
  // Create dynamic Popover
  var dynamicPopover = app.popover.create({
    targetEl: 'a.dynamic-popover',
    content: '<div class="popover">'+
                '<div class="popover-inner">'+
                  '<div class="block">'+
                    '<p>Popover created dynamically.</p>'+
                    '<p><a href="#" class="link popover-close">Close me</a></p>'+
                  '</div>'+
                '</div>'+
              '</div>',
    // Events
    on: {
      open: function (popover) {
        console.log('Popover open');
      },
      opened: function (popover) {
        console.log('Popover opened');
      },
    }
  });
  
  // Open dynamic popover
  $$('.dynamic-popover').on('click', function () {
    dynamicPopover.open();
  });

var mainView = app.views.create('.view-main');