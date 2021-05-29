let advantages = document.querySelectorAll('.advantage .close-image');

window.onscroll = function () {
    for (let advantage of advantages) {
        if (window.pageYOffset > 200) {
            advantage.classList.remove('close-image');
        } else {
            advantage.classList.add('close-image');
        }
    }
};
