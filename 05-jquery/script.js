$(document).ready(function() {
  
  // Smooth scroll to sections on nav link click
  $('.nav-link').click(function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    const section = $(href);
    
    // Update active link styling
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    
    // Smooth scroll
    $('html, body').animate({
      scrollTop: section.offset().top - 50
    }, 800);
  });

  // Highlight skills on hover with animation
  $('.skill-card').hover(
    function() {
      $(this).animate({
        backgroundColor: '#0066cc',
        color: 'white'
      }, 200);
      $(this).css({
        'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'transform': 'translateY(-2px)'
      });
    },
    function() {
      $(this).animate({
        backgroundColor: '#f9f9f9',
        color: '#333'
      }, 200);
      $(this).css({
        'box-shadow': 'none',
        'transform': 'translateY(0)'
      });
    }
  );

  // Toggle project details with slide animation
  $('.toggle-details').click(function(e) {
    e.preventDefault();
    $(this).closest('.project-card').find('.project-details').slideToggle(300);
  });

  // Handle form submission
  $('#contactForm').submit(function(e) {
    e.preventDefault();
    
    const email = $('#emailInput').val();
    const message = $('#messageInput').val();
    
    // Show success message
    const $form = $(this);
    $form.find('input[type="submit"]').prop('disabled', true);
    $('#successMessage').fadeIn();
    
    // Reset form
    setTimeout(function() {
      $form[0].reset();
      $form.find('input[type="submit"]').prop('disabled', false);
      $('#successMessage').fadeOut();
    }, 2000);
  });

  // Update active nav link on scroll
  $(window).scroll(function() {
    let current = '';
    
    $('section').each(function() {
      let sectionTop = $(this).offset().top;
      let sectionHeight = $(this).outerHeight();
      
      if($(window).scrollTop() >= sectionTop - 100) {
        current = $(this).attr('id');
      }
    });

    $('.nav-link').removeClass('active');
    $('a[href="#' + current + '"]').addClass('active');
  });

});
