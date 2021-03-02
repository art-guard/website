import axios from "axios";
import { Response } from "./interfaces/base.interfaces";
import { Metadata, SimilarArtwork } from "./interfaces/artworks.interfaces";

export interface ValidationResult {
  stamp?: Metadata;
  similar: SimilarArtwork[];
  message?: string;
}

const { VUE_APP_SITE_URL } = process.env;

export async function verifyArtworkByUrl(url: string) {
  const { data } = await axios.post<Response<ValidationResult>>(
    `${VUE_APP_SITE_URL}/v1/artworks/validate/url`,
    { url },
    { withCredentials: true }
  );
  return data.body;
}
