import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"; // Import the correct image URL builder

export const client = createClient({
    projectId: "jm4stcdi",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true,
});

const builder = imageUrlBuilder(client); // Use the imported builder

export function urlFor(source: any) {
    return builder.image(source); // Generate image URLs correctly
}
