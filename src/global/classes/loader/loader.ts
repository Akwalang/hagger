import { CacheInterface } from "../cache";

export class Loader {
  constructor(
    private cache: CacheInterface<string, Blob>,
  ) {}

  public async load(url: string): Promise<Blob> {
    let result = this.cache.get(url);

    if (!result) {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.statusText}`);
      }

      result = await response.blob();

      this.cache.set(url, result);
    }

    return result;
  }
}
