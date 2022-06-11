//mobile nav//

const btn = document.querySelector('.mobile-nav-button');
const icon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

btn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    icon.classList.toggle('active');
    document.body.classList.toggle('no-scroll')
})


// video

const videoBtn = document.querySelector('#story-video-btn');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', () => {

    if (videoFile.paused) {
        videoFile.play()
    } else {
        videoFile.pause()
    }


})



