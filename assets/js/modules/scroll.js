let newsContainer = document.querySelector('#news'),
    postsContainer = document.querySelector('#content'),
    postsInnerContainer = document.querySelector('.mateblock'),
    allPosts = postsInnerContainer.querySelectorAll('.block'),
    latestPost = allPosts[allPosts.length - 3],
    latestPostBottom = latestPost ? latestPost.offsetTop : null,
    bottomCache = 0;


window.addEventListener('scroll', () => {
    if (newsContainer) {
        let newsBottom = newsContainer.getBoundingClientRect().bottom;
        
        let windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (!bottomCache && newsBottom < 0) {
            bottomCache = newsBottom + windowScrollTop;
        }

        if (bottomCache) {
            postsContainer.style.paddingTop = 800 +'px';
            postsContainer.classList.add('full');
            newsContainer.classList.add('hidden');
        } 
        
        if (windowScrollTop < bottomCache) {
            bottomCache = 0;
            postsContainer.style.paddingTop = 0;
            postsContainer.classList.remove('full');
            newsContainer.classList.remove('hidden');
        }
    }
})