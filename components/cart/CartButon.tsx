"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "../provider/StoreProvider";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ShoppingBasket } from "lucide-react";
import CartItem from "./CartItem";
import Link from "next/link";
import { Table, TableCell, TableFooter, TableRow } from "../ui/table";

const CartButton = observer(() => {
  const store = useStore();

  if (!store) {
    return <div>Empty Store</div>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex gap-1 items-center border-0 hover:bg-extend-8/10 p-2 rounded">
          <ShoppingBasket size={16} />
          <span className="text-xs">{store.cartStore.totalQuantity}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] px-2 space-y-4 divide-y">
        {store.cartStore.items.length > 0 ? (
          <Table>
            {store.cartStore.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={(quantity) =>
                  store.cartStore.updateQuantity(item.id!, quantity)
                }
                onRemove={() => store.cartStore.removeFromCart(item)}
              />
            ))}
            <TableRow>
              <TableCell colSpan={3} className="text-sm font-semibold">
                Total
              </TableCell>
              <TableCell className="text-sm font-semibold">
                ${store.cartStore.totalPrice}
              </TableCell>
            </TableRow>
            <TableFooter>
              <TableCell colSpan={4} className="text-sm font-semibold">
                <Link href="/check-out">
                  <Button className="w-full">Checkout</Button>
                </Link>
              </TableCell>
            </TableFooter>
          </Table>
        ) : (
          <div className="w-full text-center">
            <span className="text-sm">Your cart is empty.</span>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
});

export default CartButton;
