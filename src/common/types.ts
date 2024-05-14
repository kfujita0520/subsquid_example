export enum EntityManagerItem {
  account = 'account',
  token = 'token',
  transfer = 'transfer'
}
export type TokenDetails = {
  name: string | null;
  symbol: string | null;
  uri: string | null;
};
