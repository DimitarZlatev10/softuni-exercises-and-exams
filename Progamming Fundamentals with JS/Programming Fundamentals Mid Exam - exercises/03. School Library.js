function solve(array){
let bookshelf = array.shift().split('&')
for (let line of array) {
    let [command,bookOne,bookTwo] = line.split(' | ')
    if(command==='Done'){
        console.log(bookshelf.join(', '));
        break
    }
    if(command==='Add Book'){
        if(!bookshelf.includes(bookOne)){
            bookshelf.unshift(bookOne)
        }
    }else if (command==='Take Book'){
        let index = bookshelf.indexOf(bookOne)
        if(bookshelf.includes(bookOne)){
            bookshelf.splice(index,1)
        }
    }else if(command==='Swap Books'){
        let indexOne = bookshelf.indexOf(bookOne)
        let indexTwo = bookshelf.indexOf(bookTwo)
        if(bookshelf.includes(bookOne)&&bookshelf.includes(bookTwo)){
            bookshelf[indexOne] = bookTwo
            bookshelf[indexTwo] = bookOne
        }
    }else if (command==='Insert Book'){
        if(!bookshelf.includes(bookOne)){
            bookshelf.push(bookOne)
        }
    }else if (command==='Check Book'){
        let index = Number(bookOne)
        if(index>=0&&index<=bookshelf.length){
            console.log(bookshelf[index]);
        }
    }
}

}
// solve((["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
// "Add Book | Catch-22",
// "Swap Books | Anna Karenina | Catch-22",
// "Take Book | David Copperfield",
// "Done"])
// )
// solve(["Don Quixote&The Great Gatsby&Moby Dick",
// "Add Book | Ulysses",
// "Take Book | Don Quixote",
// "Insert Book | Alice's Adventures in Wonderland",
// "Done"])
solve(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])
