"use client";
import { CartStore } from "./domain/cart";
import { OrderStore } from "./domain/order";
import { UiSettingStore } from "./ui/setting";

export class RootStore {
  cartStore;
  uiSettingStore;
  orderStore;
  categories;
  constructor(categories: string[]) {
    this.categories = categories;
    this.cartStore = new CartStore(this);
    this.uiSettingStore = new UiSettingStore(this);
    this.orderStore = new OrderStore(this);
  }
}
