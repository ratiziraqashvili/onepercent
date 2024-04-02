import { CartItems } from "@/components/cart-items";
import { CartSummary } from "@/components/cart-summary";

const CartPage = () => {
  return (
    <div>
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl font-semibold tracking-wider sm:text-4xl">
          კალათა
        </h1>

        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              პროდუქცია შენს კალათაში
            </h2>
            <CartItems />
          </section>
          <CartSummary />
        </form>
      </main>
    </div>
  );
};

export default CartPage;
