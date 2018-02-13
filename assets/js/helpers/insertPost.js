import { format } from 'date-fns'
const ruLocale = require('date-fns/locale/ru')
import templates from './templates'

export function insertPost(post, options) {
  //start the inserting of the html
  const { primary_tag, feature_image, url, title, author, published_at } = post

  const excerpt = post.custom_excerpt 
  ? post.custom_excerpt 
  : $(post.html)
    .text()
    .split(' ')
    .slice(0, 20)
    .join(' ')

  let classList = 'post post-card'
  classList += options ? (options.addClass ? options.addClass : '') : ''

  // if post data contains html - show excerpt, if not - show expty string

  return `
    <article class="${classList}">
      ${templates.if(options && options.includeTags && primary_tag, 
        `<a class="tag" href="${primary_tag.url}"><span>${primary_tag.name}</span></a>`
      )}
      ${
        templates.if(feature_image, `
        <a class="post-card-image__link" href="${url}">
          <div class="post-card__image" style="background-image: url(${feature_image})"></div>
        </a>
        `
      )}
      <div class="post-card__content post-card-content">
        <a class="post-card-content__link" href="${url}">
          <header class="post-card__header">
            <h2 class="post-card-title">
              ${title}
            </h2>
          </header>
          ${
            templates.if(post.html, `
            <section class="post-card__excerpt">
              <p> 
                ${excerpt}
              </p>
            </section>
            `
          )}
        </a>
        <footer class="post-card__meta">
          <a href=${author.url}>${author.name}</a>
          <span>${format(published_at, 'D MMMM', { locale: ruLocale })}</span>
        </footer>
      </div>
      
    </article>
  `
}
