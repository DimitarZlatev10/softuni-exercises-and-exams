class LibraryCollection {
    constructor(capacity){
        this.capacity = Number(capacity),
        this.books = []
    }
    addBook(bookName,bookAuthor){
        if(this.capacity===0){
            throw new Error("Not enough space in the collection.")
        }
        this.books.push({
            bookName,
            bookAuthor,
            payed : false
        })
        this.capacity--
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName){
        let bookInfo = this.books.find(s=>s.bookName===bookName)
        if(!bookInfo){
            throw new Error(`${bookName} is not in the collection.`)
        }else if (bookInfo.payed===true){
            throw new Error(`${bookName} has already been paid.`)
        }else{
            bookInfo.payed = true
            return `${bookName} has been successfully paid.`
        }
    }
    removeBook(bookName){
        let bookInfo = this.books.find(s=>s.bookName===bookName)
        if(!bookInfo){
            throw new Error("The book, you're looking for, is not found.")
        }else if (bookInfo.payed===false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }else{
            let index = this.books.indexOf(bookInfo)
            this.books.splice(index,1)
            return `${bookName} remove from the collection.`
        }
    }
    getStatistics(bookAuthor){

        if(bookAuthor===undefined){
            let result = []
            result.push(`The book collection has ${this.capacity} empty spots left.`)
            this.books.sort((a,b)=>a.bookName.localeCompare(b.bookName)).forEach(s=> result.push(`${s.bookName} == ${s.bookAuthor} - ${s.payed===true? `Has Paid.`:`Not Paid.`}`))
            return result.join('\n')
        }else{
            let bookInfo = this.books.find(s=>s.bookAuthor===bookAuthor)
            if(!bookInfo){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }else{
                // let newResult = []
                return `${bookInfo.bookName} == ${bookInfo.bookAuthor} - ${bookInfo.payed===true? `Has Paid.`:`Not Paid.`}`
                //  bookInfo.forEach(s=> newResult.push(`${s.bookName} == ${s.bookAuthor} - ${s.payed===true? `Has Paid.`:`Not Paid.`}`))
                //  return newResult.join('\n')
            }
        }

    }
}

const library = new LibraryCollection(2)

console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));

console.log(library.getStatistics('Miguel de Cervantes'));
