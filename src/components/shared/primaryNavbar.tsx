import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CircleUser, Menu, Moon, Package2, Search, Sun } from "lucide-react";

const menus = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Products",
    link: "/products",
  },
  {
    id: 3,
    name: "Flash Sale",
    link: "/flash-sale",
  },
  {
    id: 4,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 5,
    name: "Dashboard",
    link: "/dashboard",
  },
];

const PrimaryNavbar = () => {
  let darkMode;
  const handleToggleTheme = () => {
    // dispatch(toggleTheme());
  };
  return (
    <div>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base whitespace-nowrap"
          >
            AKM CLOTH
          </Link>

          {menus &&
            menus?.map((item, id) => (
              <Link
                key={id}
                href={item?.link}
                className="text-foreground transition-colors hover:text-foreground whitespace-nowrap"
              >
                {item?.name}
              </Link>
            ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold whitespace-nowrap"
              >
                AKM CLOTH
              </Link>

              {menus &&
                menus?.map((item, id) => (
                  <Link
                    key={id}
                    href={item?.link}
                    className="hover:text-foreground whitespace-nowrap"
                  >
                    {item?.name}
                  </Link>
                ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <button
            onClick={handleToggleTheme}
            className="rounded-lg backdrop-blur-[2px] p-1 inline-block"
          >
            {darkMode ? <Sun /> : <Moon size={24} />}
          </button>
        </div>
      </header>
    </div>
  );
};

export default PrimaryNavbar;
