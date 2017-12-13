import { convertDate } from './convertDate'

export function insertPost(postData, options) {
  const { html, tags, image, url, title, published_at, author } = postData

  const excerpt = $(html)
    .text()
    .split(' ')
    .slice(0, 20)
    .join(' ')

  const tagText = options
    ? options.includeTags
      ? `<span class="type"> 
                    ${tags[0].name}
                  </span>`
      : ''
    : ''

  let classList = options ? (options.addClass ? options.addClass : '') : ''
  let date = options ? (options.includeDate ? `<p>${convertDate(published_at)}</p>` : '') : ''

  let imageContainer = ''
  if (image) {
    imageContainer = ``
  }

  return `
    <article class="post-card ${classList}">
    ${image &&
      `<a class="post-card-image__link" href="${url}">
        <div class="post-card__image" style="background-image: url(${image})"></div>
      </a>`
    }
    <div class="post-card__content post-card-content">
      <a class="post-card-content__link" href="${url}">
        <header class="post-card__header">
          <h2 class="post-card-title">
            ${title}
          </h2>
        </header>
        <section class="post-card__excerpt">
          <p> ${excerpt} ... </p>
        </section>
      </a>
      <footer class="post-card__meta">
        ${author &&
        `<a href="/author/${author.slug}">${author.name}</a>`
        }
      </footer>
    </div>
  </article>`
}
