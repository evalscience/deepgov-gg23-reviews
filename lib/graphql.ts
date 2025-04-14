import { Client, cacheExchange, fetchExchange } from "urql";

export function createClient(url: string) {
  return new Client({ url, exchanges: [cacheExchange, fetchExchange] });
}
