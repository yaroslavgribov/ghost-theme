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

const menuButton = document.querySelector('.menu-button')
const menuList = document.querySelector('.menu')

menuButton.addEventListener('click', (event) => {
  menuButton.classList.toggle('active')
  menuList.classList.toggle('expand')
})

$('.menu-button').on('click', function() {
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
