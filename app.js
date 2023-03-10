const starsEl = document.querySelectorAll('.fa-star')
const emojisEl = document.querySelectorAll('.fa-solid')
const colorsArray = ['red', 'orange', 'lightblue', 'green']

updateRating(0);

starsEl.forEach((starsEl, index) => {
    starsEl.addEventListener('click', () => {
        updateRating(index)
    });
});

function updateRating(index){
    starsEl.forEach((starEl, idx)=>{
        if(idx < index + 1) {
            starEl.classList.add('active');
        } else {
            starEl.classList.remove('active');
        }
    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index]
    });

}