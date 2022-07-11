// const video = {
//     title: 'a',
//     sequense: '2',
//     continues: 3.43,
//     play() {
//         console.log(this);
//     }
// };

// video.play();

// video.stop = function () {
//     console.log(this);
// };

// video.stop();

// function playViedo() {
//     console.log(this);
// };

// playViedo();

// function Movie(title, sequense) {
//     this.title = title;
//     this.sequense = sequense;
//     console.log(this);
// };

// const m = new Movie('b', 1.56);

'use strict'

const movie = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
    this.tags.forEach(function(tag){
        console.log(tag);
    });
}
};

movie.showTags();