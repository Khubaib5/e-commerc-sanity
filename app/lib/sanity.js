import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId:"f2u2k32w",
    dataset:"production",
    apiVersion:'2024-03-21',
    useCdn:true,
    // token:""
})

const builder = imageUrlBuilder(client)

export function urlFor(source){
    return builder.image(source)
}