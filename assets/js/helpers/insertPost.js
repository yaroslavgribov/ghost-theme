import { convertDate } from './convertDate'

export function insertPost(postData, options) {
  //start the inserting of the html
  const { primary_tag, feature_image } = postData

  const postExcerpt = $(postData.html)
    .text()
    .split(' ')
    .slice(0, 20)
    .join(' ')

  const tagText =
    (options &&
      options.includeTags &&
      primary_tag &&
      `
    <span class="type"> 
      ${primary_tag.name}
    </span>
    `) ||
    ''

  let classList = 'block post '
  classList += options ? (options.addClass ? options.addClass : '') : ''
  const date = options
    ? options.includeDate
      ? `<p>${convertDate(postData.published_at)}</p>`
      : ''
    : ''

  const imageContainer = feature_image
    ? `<div class="rela post__image">
        <img src="${feature_image}" /> 
        ${tagText}
      </div>`
    : ''

  // if post data contains html - show excerpt, if not - show expty string
  const postContent = postData.html
    ? `<span class="text">${postExcerpt}...</span>`
    : ''

  return `
    <article class="${classList}">
      <a href="${postData.url}">
      ${imageContainer}
      <h2 class="post-title">
        ${postData.title}
        ${date}
      </h2>
      ${postContent}
      </a>
    </article>
  `
}
