class Story {
    constructor(title,creator){
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = []
    }

   get likes() {
        if(this._likes.length ===0){
            return `${this.title} has 0 likes`
        }else if (this._likes.length ===1){
            return `${this._likes[0]} likes this story!`
        }

        return `${this._likes[0]} and ${this._likes.length-1} others like this story!`
    }

    like(username){
        if(this._likes.includes(username)){
            throw new Error(`You can't like the same story twice!`)
        }else if (username===this.creator){
            throw new Error("You can't like your own story!")
        }

        this._likes.push(username)

        return `${username} liked ${this.title}!`
    }

    dislike(username){
        if(!this._likes.includes(username)){
            throw new Error("You can't dislike this story!")
        }

        let index = this._likes.indexOf(username)
        this._likes.splice(index,1)
        return `${username} disliked ${this.title}`
    }
    comment(username,content,id){
       let comment = {
           id : id,
           username :username,
           content : content,
           replies : []
       }

       let commentWithId = this._comments.find(c => c.id === id);

       if(commentWithId){
           let replyId = `${Number(commentWithId.id)}.${(commentWithId.replies.length + 1)}`
           let reply = {
            id: replyId,
            username: username,
            content: content,
        }
        commentWithId.replies.push(reply);
 
        return 'You replied successfully';
       }

       comment.id = this._comments.length + 1;
       this._comments.push(comment);

       return `${username} commented on ${this.title}`;
    }
    toString(sortingType){
        let result = []
        let repliesResult = []
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this._likes.length}`)
        result.push(`Comments:`)

        if(sortingType==='asc'){
           let sorted= this._comments.sort((a,b)=> a.id - b.id)
           sorted.forEach(s=> result.push(`-- ${s.id}. ${s.username}: ${s.content}`))
           for (let i = 0; i < this._comments.length; i++) {
            if(this._comments[i].replies.length>0){
            repliesResult.push(this._comments[i].replies) 
            }        
            }
            for (let i = 0; i < repliesResult.length; i++) {
               
              repliesResult[i].sort((a,b)=> a.id- b.id)
            repliesResult[i].forEach(s=> result.push(`--- ${s.id}. ${s.username}: ${s.content}`))  
            }
            
        }
        else if (sortingType==='desc'){
            let sorted= this._comments.sort((a,b)=> b.id - a.id)
            sorted.forEach(s=> result.push(`-- ${s.id}. ${s.username}: ${s.content}`))
            for (let i = 0; i < this._comments.length; i++) {
                if(this._comments[i].replies.length>0){
                repliesResult.push(this._comments[i].replies) 
                }        
                }
                for (let i = 0; i < repliesResult.length; i++) {   
                repliesResult[i].sort((a,b)=> b.id- a.id)
                repliesResult[i].forEach(s=> result.push(`--- ${s.id}. ${s.username}: ${s.content}`))    
                }
               
        }else if (sortingType==='username'){
            let sorted= this._comments.sort((a,b)=> a.username.localeCompare(b.username))
            sorted.forEach(s=> result.push(`-- ${s.id}. ${s.username}: ${s.content}`))
                for (let i = 0; i < this._comments.length; i++) {
                if(this._comments[i].replies.length>0){
                repliesResult.push(this._comments[i].replies) 
                }        
                }
                for (let i = 0; i < repliesResult.length; i++) {
                    
                    repliesResult[i].sort((a,b)=>a.username.localeCompare(b.username))
                repliesResult[i].forEach(s=> result.push(`--- ${s.id}. ${s.username}: ${s.content}`))
                }
                
        }


        return result.join('\n')
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('asc'));
console.log()
art.like("Zane");
console.log(art.toString('asc'));


