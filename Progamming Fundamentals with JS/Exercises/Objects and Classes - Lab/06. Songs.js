function solve(array){
let songs = []
let numberOfSongs = array.shift()
let typeOfSong = array.pop()
class Song{
    constructor(type,name,time){
        this.type = type 
        this.name = name
        this.time = time
    }
}
for (let  line of array) {
    let [type,name,time] = line.split('_')
    let song = new Song(type,name,time)
    songs.push(song)
}if(typeOfSong==='all'){
    songs.forEach((i)=>console.log(i.name))
}else{
    let filtered = songs.filter((i)=>i.type===typeOfSong)
    filtered.forEach((i)=>console.log(i.name))
}

    
    
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )