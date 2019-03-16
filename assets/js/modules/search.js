import { insertPost } from '../helpers'

$('#search').on('submit', function(e) {
  var value = $('.js-searchInput').get(0).value
  $('.js-searchResults').empty()
  e.preventDefault()

  $('.js-loadingSpin').show()

  $.ajax({
    url: ghost.url.api('posts', {
      limit: 'all',
      order: 'published_at desc',
      fields: 'title,url,published_at'
    }),
    type: 'get'
  }).done(function(data) {
    $('.js-loadingSpin').hide()
    var found = data.posts.filter(function(post) {
      return post.title.toLowerCase().indexOf(value) !== -1
    })

    $('.js-searchResults').empty()
    if (found.length) {
      found.forEach(function(item) {
        // hide additional posts in case they were shown
        $('.nothing').hide()
        // if found - append the results
        $('.js-searchResults').append(
          insertPost(item, {
            includeTags: false,
            includeDate: true,
            addClass: 'block--search'
          })
        )
      })
    } else {
      // if nothing is found - show some posts instead
      $('.nothing').show()
    }
  })
})

$('.js-searchInput')
  .on('focusin', function() {
    $('#search').addClass('js-isActive')
  })
  .on('focusout', function() {
    $('#search').removeClass('js-isActive')
  })

$('.js-searchStart').on('click', function() {
  $('.js-searchOverlay').show()
  $('body').addClass('pmt')
  $('.js-searchInput').focus()
})

$('.js-searchClose').on('click', function() {
  hideSearch()
})

function hideSearch() {
  $('.js-searchOverlay').hide()
  $('body').removeClass('pmt')
  $('.js-loadingSpin').hide()
  $('.js-searchResults').empty()
  $('.js-searchInput').val('')
}

$('.js-searchOverlay').on('click', e => {
  if ($(e.target).is('.js-searchOverlay')) {
    hideSearch()
  }
})
