export class BooksModel {
    constructor(
        public _id: String,
        public title: String,
        public author: String,
        public genre: String,
        public rating: String,
        public img: String,
        public description: String
    ) { }
}