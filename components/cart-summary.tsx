"use client";

import useCart from "@/hooks/use-cart";
import { Button } from "./ui/button";

export const CartSummary = () => {
  const { items } = useCart();

  const calculateSubtotal = () => {
    let subtotal = 0;
    items.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal.toFixed(2);
  };

  const total = calculateSubtotal();

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 sm:p-6 shadow-md lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium pb-3">
        Order summary
      </h2>

      <dl>
        <div className="flex items-center justify-between pb-2">
          <dt className="text-sm">ჯამი</dt>
          <dd className="text-sm font-medium">{total} GEL</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 pb-2">
          <dt className="flex items-center text-sm">
            <span>მიწოდება</span>
          </dt>
          <dd className="text-sm font-medium">Shipping Amount</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 pb-1">
          <dt className="text-base font-medium">მთლიანი ჯამი</dt>
          <dd className="text-base font-medium">{total} GEL</dd>
        </div>
      </dl>

      <div className="mt-6">
        <Button className="w-full">Checkout</Button>
      </div>
    </section>
  );
};
