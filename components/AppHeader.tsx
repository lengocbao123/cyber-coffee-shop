"use client";
import Link from "next/link";
import CartButton from "./cart/CartButon";
import { AppLanguage } from "./AppLanguage";
import { observer } from "mobx-react-lite";
import { useStore } from "./provider/StoreProvider";
import AccountMenu from "./AccountMenu";
import AppDrawer from "./AppDrawer";
import Image from "next/image";

const AppHeader = observer(() => {
  const store = useStore();
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 px-8 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="gap-5 flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link
              href="/"
              className="font-extrabold hover:text-ui-fg-base uppercase"
            >
              <Image
                alt=""
                src="https://ik.imagekit.io/gsozk5bngn/categry/logo_eqKuR1pQE.png"
                width={100}
                height={60}
              />
            </Link>
          </div>
          <div className="grow hidden sm:flex items-center gap-5">
            <Link href="/shop" className="font-bold text-md hover:text-primary">
              Shop
            </Link>
            <Link href="/" className="font-bold text-md hover:text-primary">
              Blogs
            </Link>
            <Link href="/" className="font-bold text-md hover:text-primary">
              Contact Us
            </Link>
          </div>
          <div className="shrink hidden sm:flex items-center gap-x-3 h-full flex-1 basis-0 justify-end">
            <AccountMenu />
            <CartButton />
            <AppLanguage language={store?.uiSettingStore.language} />
          </div>
          <div className="block sm:hidden">
            <AppDrawer />
          </div>
        </nav>
      </header>
    </div>
  );
});

export default AppHeader;
