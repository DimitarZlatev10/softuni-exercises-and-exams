class ArtGallery{
    constructor(creator){
        this.creator = creator
        this.possibleArticles = { "picture":200,"photo":50,"item":250 }
        this.listOfArticles = []
        this.guests = []
    }
    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase()
        if(!this.possibleArticles.hasOwnProperty(articleModel)){
            throw new Error("This article model is not included in this gallery!")
        }
        let nameOfArticle = this.listOfArticles.find(s=> s.articleName===articleName)
        if(nameOfArticle){
            nameOfArticle.quantity+=quantity
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }  
        else{
            this.listOfArticles.push({
                articleModel:articleModel,
                articleName:articleName,
                quantity:quantity
            })
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
    }
    inviteGuest ( guestName, personality){
        let points = 0
        if(personality==='Vip'){
            points = 500
        }else if (personality==='Middle'){
            points = 250
        }else{
            points = 50
        }
        let nameOfGuest = this.guests.find(s=> s.guestName===guestName)
        if(nameOfGuest){
            throw new Error(`${guestName} has already been invited.`)
        }
        else{
            this.guests.push({
                guestName:guestName,
                points:points,
                purchaseArticle:0
            })
        }
        return `You have successfully invited ${guestName}!`
    }
    buyArticle ( articleModel, articleName, guestName){
        let neededPoints = 0
        if(articleModel==='picture'){
            neededPoints = 200
        }else if (articleModel==='photo'){
            neededPoints = 50
        }else if (articleModel==='item'){
            neededPoints = 250
        }
        let nameOfArticle = this.listOfArticles.find(s => s.articleName===articleName)
        if(!nameOfArticle||nameOfArticle.articleModel!==articleModel){
            throw new Error(`This article is not found.`)
        }
        if(nameOfArticle.quantity===0){
            return `The ${articleName} is not available.`
        }
        let nameOfGuest = this.guests.find(s =>s.guestName===guestName)
        if(!nameOfGuest){
            return `This guest is not invited.`
        }
        let guestPoints = nameOfGuest.points
        if(guestPoints<neededPoints){
            return `You need to more points to purchase the article.`
        }else{
            nameOfGuest.points -=neededPoints
            nameOfGuest.purchaseArticle +=1
            nameOfArticle.quantity-=1
        }
        return `${guestName} successfully purchased the article worth ${neededPoints} points.`
    }
    showGalleryInfo (criteria){
        let result = []
        if(criteria ==='guest'){
        result.push(`Guests information:`)
          this.guests.forEach(s => result.push(`${s.guestName} - ${s.purchaseArticle}`))
        }else if (criteria==='article'){
        result.push(`Articles information:`)
        this.listOfArticles.forEach(s => result.push(`${s.articleModel} - ${s.articleName} - ${s.quantity}`))
        }
        return result.join('\n')
    }
}



const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
