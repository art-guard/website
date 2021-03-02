import { Document } from "./base.interfaces";
import { UserModel } from "./users.interfaces";

interface ArtworkBase {
  phash: string;
}

export interface ArtworkModel extends ArtworkBase, Document {
  owner: string;
}
export interface ArtworkModelPopulated extends ArtworkBase, Document {
  owner: UserModel;
}

export interface SimilarArtwork {
  _id: ArtworkModel["_id"];
  owner: ArtworkModel["owner"];
  score: number;
}

export interface Metadata {
  artGuardVersion: string;
  artGuardId: string;
  artist: string[];
  registeredDate: string;
}
