export class PageMeta {
  page: number;
  take: number;
  total: number;
  constructor(page: number, take: number, total: number) {
    this.page = page;
    this.take = take;
    this.total = total;
  }
  get pageCount() {
    return Math.round(this.total / this.take);
  }
  get hasPreviousPage() {
    return this.page !== 1;
  }
  get hasNextPage() {
    return this.page < this.pageCount;
  }
}
export class PageMetaResponse<T> {
  data: T[];
  meta: PageMeta;
  constructor(data: T[], meta: PageMeta) {
    this.data = data;
    this.meta = meta;
  }
}
export class DataResult<T> {
  data: T;
  constructor(data: T) {
    this.data = data;
  }
}
