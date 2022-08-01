export interface CounterState {
  isLoading: boolean;
  cacheData: any;
  totalPage: number;
  items: any;
  isApiLimited: boolean;
}
export interface ICacheValue {
  totalPage: number;
  items: any
}
export interface ICache {
  keyCache: string;
  cacheValue: ICacheValue
}
