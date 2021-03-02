export interface Document {
  _id: string;
}

export interface Response<T = undefined> {
  body: T;
  error: string;
  message: string;
}
