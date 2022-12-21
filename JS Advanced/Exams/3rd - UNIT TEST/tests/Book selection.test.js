const bookSelection = require("../Book selection");
const assert = require("chai").assert;

describe(`bookSelection`,()=>{
    describe('isGenreSuitable',()=>{
        it(`should check if age is under or equal to 12 and check if genre is horror or thriller`,()=>{
            assert.equal(bookSelection.isGenreSuitable('Thriller',12),`Books with Thriller genre are not suitable for kids at 12 age`)
            assert.equal(bookSelection.isGenreSuitable('Horror',11),`Books with Horror genre are not suitable for kids at 11 age`)

        })
        it(`should return message if requirements are met`,()=>{
            assert.equal(bookSelection.isGenreSuitable('Horror',13),`Those books are suitable`)

        })
    })
    describe(`isAffordable`,()=>{
        it(`should check if you have enough money`,()=>{
            assert.equal(bookSelection.isItAffordable(13,13),`Book bought. You have 0$ left`)
        })
        it(`should check if you dont have enough money`,()=>{
            assert.equal(bookSelection.isItAffordable(14,13),`You don't have enough money`)
        })
        it(`should check if you dont have enough money`,()=>{
            assert.throws(() => bookSelection.isItAffordable('a','a'), Error, `Invalid input`);  
        })
    })
    describe(`suitableTitles`,()=>{
        // it(`it should check for errors`,()=>{
        //     assert.throws(() => bookSelection.suitableTitles('a','a'), Error, `Invalid input`);  
        // })
        it(`should return array`,()=>{
            assert.equal(bookSelection.suitableTitles([{title:`Da Vinci`,genre:`Thriller`}],'Thriller'),`Da Vinci`)
            assert.equal(bookSelection.suitableTitles([{title:`Da Vinci`,genre:`Thriller`},{title:`Da vinci`,genre:`Thriller`}],'Thriller'), )
            assert.equal(bookSelection.suitableTitles([{title:`Da Vinci`,genre:`Horror`},{title:`Da vinci`,genre:`Horror`}],'Thriller'),``)
        })
    })
})