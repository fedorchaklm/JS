// const collection = document.querySelectorAll('[data-test-id = "audio-player"]');
// collection.forEach(item => console.log(item.getAttribute('data-audio-player-preview-url-value')));
// collection.forEach(item => console.log(item.dataset.audioPlayerPreviewUrlValue));

const items = document.querySelectorAll('.item-grid__item');
const itemsArray = [...items];

itemsArray.map(item => {
    const title = item.querySelector('.item-grid-card__title').innerText;
    const author = item.querySelector('.item-grid-music-preview__author').innerText;
    const mp3 = item.querySelector('[data-test-id = "audio-player"]').dataset.audioPlayerPreviewUrlValue;

    return {
        title,
        author,
        mp3
    }
});