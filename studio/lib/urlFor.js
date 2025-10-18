// studio/lib/urlFor.js
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity.client"; // <-- uses named export 'client' from your sanity client

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
