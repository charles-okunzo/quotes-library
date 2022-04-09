export class Quote {
  id:number;
  quote:string;
  author:string;
  upvote:number;
  downvote:number;
  publisher:string;
  date:Date;
  showDetails:boolean;

  constructor(id:number, quote:string, author:string, upvote:number, downvote:number, publisher:string, date:Date){
    this.id=id;
    this.quote=quote;
    this.author=author;
    this.upvote=upvote;
    this.downvote=downvote;
    this.publisher=publisher;
    this.date=date;
    this.showDetails=false;
  }
}
