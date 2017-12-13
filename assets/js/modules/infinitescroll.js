import { insertPost } from '../helpers/insertPost'

$(function($) {
  var currentPage = 1
  var pathname = window.location.pathname
  var $document = $(document)
  var $result = $('.post-feed')
  var buffer = 100

  var ticking = false
  var isLoading = false

  var lastScrollY = window.scrollY
  var lastWindowHeight = window.innerHeight
  var lastDocumentHeight = $document.height()
  var nextPage = 2,
    //Set this to match the pagination used in your blog

    filter = 'image:-null'

  // if homepage
  var path = window.location.pathname,
    pathParts = path.split('/'),
    page = pathParts[1],
    id = pathParts[2]

  if (path.length <= 1) {
  }

  // remove hash params from pathname
  pathname = pathname.replace(/#(.*)$/g, '').replace('///g', '/')

  function onScroll() {
    lastScrollY = window.scrollY
    requestTick()
    console.log('scroll')
  }

  function onResize() {
    lastWindowHeight = window.innerHeight
    lastDocumentHeight = $document.height()
    requestTick()
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(infiniteScroll)
    }
    ticking = true
  }

  function infiniteScroll() {
    // return if already loading
    if (isLoading) {
      return
    }

    // return if not scroll to the bottom
    if (lastScrollY + lastWindowHeight <= lastDocumentHeight - buffer) {
      ticking = false
      return
    }

    // return if currentPage is the last page already
    if (currentPage === maxPages) {
      return
    }

    isLoading = true

    // next page
    currentPage++

    // Load more

    $.ajax({
      url: ghost.url.api('posts', {
        order: 'published_at desc',
        include: 'tags, author',
        page: nextPage,
        filter: filter
      }),
      type: 'get'
    })
      .done(function(data) {
        $.each(data.posts, function(i, post) {
          var postHtml = insertPost(post)
          $('.mateblock').append(postHtml)
        })
        nextPage += 1
      })
      .done(function(data) {
        if (nextPage == data.meta.pagination.total || data.posts.length <= 0) {
          $('#load-posts').hide()
        }
      })
      .fail(function(xhr) {
        // 404 indicates we've run out of pages
        if (xhr.status === 404) {
          window.removeEventListener('scroll', onScroll, { passive: true })
          window.removeEventListener('resize', onResize)
        }
      })
      .always(function() {
        lastDocumentHeight = $document.height()
        isLoading = false
        ticking = false
      })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)

  infiniteScroll()
})
