// Combined 'See more'/'See less' and section adjustment
function toggleOverflow() {
    var aboutSection = document.getElementById("about-section");
    var otherSections = document.querySelectorAll(".photo-section, .video-section");
    var lastSections = document.querySelectorAll(".page-transparency-section");
    var paragraph = document.querySelector('.lowerside-left-text.text-preview');
    var seeMore = document.querySelector('.seemore');
    var seeLess = document.querySelector('.seeless');

    if (paragraph.classList.contains('lowerside-left-fulltext')) {
        // If the text is in full view, clicking "See more" should show truncated text
        paragraph.classList.remove('lowerside-left-fulltext');
        seeMore.style.display = 'block';
        seeLess.style.display = 'none';

        // Reset the About section
        aboutSection.style.marginTop = "";
        otherSections.forEach(section => {
            section.style.marginTop = "";
        });
        lastSections.forEach(section => {
            section.style.marginTop = "24%";
        });
    } else {
        // If the text is truncated, clicking "See more" should show the full text
        paragraph.classList.add('lowerside-left-fulltext');
        seeMore.style.display = 'none';
        seeLess.style.display = 'block';

        // Adjust the About section
        aboutSection.style.marginTop = "-6%";

        // Adjust other sections
        otherSections.forEach(section => {
            section.style.marginTop = "19%";
        });

        // Adjust Page-Transparency sections
        lastSections.forEach(section => {
            section.style.marginTop = "49%";
        });
    }
}
