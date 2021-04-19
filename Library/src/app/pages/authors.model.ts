export class AuthorsModel {
    constructor(
        public _id: String,
        public name: String,
        public topic: String,
        public yob: String,
        public img: String,
        public books: Array<10>,
        public life: String
    ) { }
}