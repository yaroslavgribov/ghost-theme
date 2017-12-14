import {insertPost} from './insertPost'

export default (current, next = 2) => {
  const $result = $('.post-feed')

  const filter = 'image:-null'

  return $.ajax({
    url: ghost.url.api('posts', {
      order: 'published_at desc',
      include: 'tags, author',
      page: next,
      filter: filter
    }),
    type: 'get'
  })
    .done(function(data) {
      $.each(data.posts, function(i, post) {
        var postHtml = insertPost(post)
        $result.append(postHtml)
      })
    })
    .done(function(data) {
      if (next == data.meta.pagination.total || data.posts.length <= 0) {
        $('#load-posts').hide()
      }
    })
}
