import { ListingItem } from "./models/ListingItem";
export async function getStorages(): Promise<ListingItem[]> {
  const response = await fetch("/storeges.json");
  const json = await response.json();
  return json.storeges as Promise<ListingItem[]>;
}

export async function getFeaturedStorages(): Promise<ListingItem[]> {
  const response = await fetch("/storeges.json");
  const json = await response.json();
  return (await (json.storeges as Promise<ListingItem[]>)).filter(
    (storage) => storage.featured
  );
}
