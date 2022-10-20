export interface PostInterface {
  username?:string
  _id:string | null;
  post:string;
  comments?:any[];
  createdAt?:Date;
}
