import {convertDate} from './convertDate';

export function insertPost(postData, options) {
  //start the inserting of the html
  let postExcerpt = $(postData.html).text().split(' ').slice(0, 20).join(' ');

  let tagText = options ? options.includeTags ?
    `<span class="type"> 
    ${postData.tags[0].name}
    </span>` : '' : '';

  let classList = 'block post ';
  classList += options ? options.addClass ? options.addClass : '' : '';
  let date = options ? options.includeDate ? `<p>${convertDate(postData.published_at)}</p>` : '' : '';

  let imageContainer = postData.image ?
    `<div class="rela post__image">
      <img src="${postData.image}" /> 
      ${tagText}
    </div>` : '';

  let postContent = postData.html ? `<span class="text">${postExcerpt}...</span>` : '';

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
    </article>`;
}