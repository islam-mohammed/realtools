import { Post } from "./models/Post";
import { Storage } from "./models/Storage";
export async function getStorages(): Promise<Storage[]> {
  const response = await fetch("/storeges.json");
  const json = await response.json();
  return json.storeges as Promise<Storage[]>;
}

export async function getFeaturedStorages(): Promise<Storage[]> {
  const response = await fetch("/storeges.json");
  const json = await response.json();
  return (await (json.storeges as Promise<Storage[]>)).filter(
    (storage) => storage.featured
  );
}

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("/posts.json");
  const json = await response.json();
  return json.storeges as Promise<Post[]>;
}
