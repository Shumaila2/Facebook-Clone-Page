function toggleOverflow() {
    var aboutSection = document.getElementById("about-section");
    var otherSections = document.querySelectorAll(".photo-section, .video-section");
    var lastSections = document.querySelectorAll(".page-transparency-section");
    var paragraph = document.querySelector('.lowerside-left-text.text-preview');

    paragraph.classList.toggle('lowerside-left-fulltext');

    if (paragraph.classList.contains('lowerside-left-fulltext')) {
        // Expand the About section
        var aboutHeight = aboutSection.offsetHeight;
        aboutSection.style.marginTop = "-6%";

        // Adjust other sections
        otherSections.forEach(section => {
            section.style.marginTop = "19%";
        });

        // Adjust Page-Transparency sections
        lastSections.forEach(section => {
            section.style.marginTop = "49%";
        });

    } else {
        // Collapse the About section
        aboutSection.style.marginTop = "";

        // Reset other sections
        otherSections.forEach(section => {
            section.style.marginTop = "";
        });

        // Reset Page-Transparency sections
        lastSections.forEach(section => {
            section.style.marginTop = "24%";
        });
    }
}

//To adjust all sections when 'See more' text clicked 