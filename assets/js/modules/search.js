import { insertPost } from '../helpers'

document.getElementById('search').addEventListener('submit', (event) => {
  event.preventDefault()

  const searchResultsContainer = $('.js-searchResults')
  const emptyListContainer = $('.nothing')
  const loadingAnimation = $('.js-loadingSpin')
  
  const query = event.target.elements.search.value

  searchResultsContainer.empty()
  emptyListContainer.hide()
  
  if (query && query.length) {
  
    loadingAnimation.show()

    $.ajax({
      url: ghost.url.api('posts', {
        limit: 'all',
        order: 'published_at desc',
        fields: 'title, url, published_at, primary_tag, author, html',
        include: 'tags, author'
      }),
      type: 'get'
    })
    .done(function(data) {
      loadingAnimation.hide()

      var found = data.posts.filter(function(post) {
        return post.title.toLowerCase().indexOf(query) !== -1
      })

      searchResultsContainer.empty()
      emptyListContainer.hide()

      if (found.length) {
        found.forEach(function(item) {
          // hide additional posts in case they were shown
          $('.nothing').hide()
          // if found - append the results
          $('.js-searchResults').append(
            insertPost(item, {
              includeDate: true,
              addClass: 'block--search'
            })
          )
        })
      } else {
        // if nothing is found - show some posts instead
        emptyListContainer.show()
      }
    })
  }
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
