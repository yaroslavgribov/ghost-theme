import { hideMainBanner, insertPost, splitDateAndTitle } from './helpers'
import './modules/search'

$(document).ready(() => {
  splitDateAndTitle()
  hideMainBanner()
  //This is set to 2 since the posts already loaded should be page 1
  var nextPage = 2,
    //Set this to match the pagination used in your blog
    filter = 'feature_image:-null'

  // if homepage
  var path = window.location.pathname,
    pathParts = path.split('/'),
    page = pathParts[1],
    id = pathParts[2]

  if (path.length <= 1) {
    filter += '+primary_tag:-newsblock+featured:false'
  } else if (page == 'tag') {
    filter += '+tag:' + id
  } else if (page == 'author') {
    filter += '+author:' + id
  }

  //on button click
  $('#load-posts').click(function() {
    $.ajax({
      url: ghost.url.api('posts', {
        order: 'published_at desc',
        include: 'tags, author, excerpt',
        limit: 15,
        page: nextPage,
        filter: filter
      }),
      type: 'get'
    })
      .done(function(data) {
        $.each(data.posts, function(i, post) {
          var postHtml = insertPost(post, {
            includeTags: true
          })
          $('.mateblock').append(postHtml)
        })
        nextPage += 1
      })
      .done(function(data) {
        if (nextPage == data.meta.pagination.total || data.posts.length <= 0) {
          $('#load-posts').hide()
        }
      })
      .fail(function(err) {
        console.log(err)
      })
  })
})

$('.menu-button').on('click', function() {
  let nav = $('div.menu'),
    link_pad = $('div.menu a').height()
  $(this).toggleClass('active')
  $('body').toggleClass('pmt')
  let menu_oheight = nav.outerHeight(),
    menu_iheight = $('div.menu a:last-child').position()
})

$('.js-toggleBanner').on('click', function() {
  let imageContainer = $('.js-mainImageContainer'),
    src = imageContainer.attr('src')

  imageContainer.toggleClass('js-isVisible is-visible')

  if (imageContainer.hasClass('js-isVisible')) {
    imageContainer.show()
    window.localStorage.setItem('mainImgSrc', '')
  } else {
    imageContainer.hide()
    window.localStorage.setItem('mainImgSrc', src)
  }
})

$('img')
  .parent('p')
  .addClass('picture')
$('.cite')
  .parent('p')
  .addClass('paragraph--has-cite')
