// 4. Write a JavaScript program to display the reading status
// (i.e. display book name, author name and reading status) of the following books. Go to the editor

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];

 //3rd Solution/////

    for (let index = 0; index < library.length; index++) {

        let currentBook = `Author: ${library[index].author}, Title: ${library[index].title}.`;
        if (library[index].readingStatus){
            console.log(`State: read, ${currentBook}`);
        }else{
            console.log(`State: not read, ${currentBook}`);
        }
    }
    

   //2nd Solution ///
//    function readingStatus(){
//     for (let i = 0; i <= library.length; i++) {
//         for (const key in library) {
//             console.log(`Author: ${library[i].author}, Title: ${library[i].title}, Reading Status: ${library[i].readingStatus}.`)
//         }
//     }
//    }
// 1st solution ///

//    function readingStatus() {
//         console.log(`Author: ${library[0].author}, Title: ${library[0].title}, Reading Status: ${library[0].readingStatus}.`)
//         console.log(`Author: ${library[1].author}, Title: ${library[1].title}, Reading Status: ${library[1].readingStatus}.`)
//         console.log(`Author: ${library[2].author}, Title: ${library[2].title}, Reading Status: ${library[2].readingStatus}.`)
//    }
// readingStatus();

  