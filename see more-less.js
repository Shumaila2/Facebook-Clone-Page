function toggleOverflow() {
    var paragraph = document.querySelector('.lowerside-left-text.text-preview');
    var seeMore = document.querySelector('.seemore');
    var seeLess = document.querySelector('.seeless');

    if (paragraph.classList.contains('lowerside-left-fulltext')) {
    // If the text is in full view, clicking "See more" should show truncated text
    paragraph.classList.remove('lowerside-left-fulltext');
    seeMore.style.display = 'block';
    seeLess.style.display = 'none';
    } else {
    // If the text is truncated, clicking "See more" should show the full text
    paragraph.classList.add('lowerside-left-fulltext');
    seeMore.style.display = 'none';
    seeLess.style.display = 'block';
    }
    }

    //About 'See more' and 'See less' text