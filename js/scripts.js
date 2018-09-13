$(document).ready(function() 
{
    $(".close-menu").css("display", "none");
 
    var isMenuOpen = false;
 
    $('.menu_btn').click(function()
    {
        if (isMenuOpen == false)
        {
        //alert('je suis dans le bon cas')
            $("#menu").clearQueue().animate({
                left : '0'
            })
            $("#page").clearQueue().animate({
                "margin-left" : '290px'
            })
             
            $(this).fadeOut(200);
            $(".close-menu").fadeIn(300);
             
            isMenuOpen = true;
        } 
    });
     
    $('.close-menu').click(function()
    {
        if (isMenuOpen == true)
        {
            $("#menu").clearQueue().animate({
                left : '-240px'
            })
            $("#page").clearQueue().animate({
                "margin-left" : '0px'
            })
             
            $(this).fadeOut(200);
            $(".menu_btn").fadeIn(300);
             
            isMenuOpen = false;
        }
    });
	
  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
	
});