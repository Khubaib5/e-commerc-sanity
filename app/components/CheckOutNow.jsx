// "use client";

// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";
// import { urlFor } from "../lib/sanity";
// import { AddToBag } from "./AddToBag";

// export default function CheckoutNow({
//   currency,
//   description,
//   image,
//   name,
//   price,
//   price_id,
// }) {
//   const { checkoutSingleItem } = useShoppingCart();

//   function buyNow(price_Id) {
//     checkoutSingleItem(price_Id);
//   }

//   const product = {
//     name: name,
//     description: description,
//     price: price,
//     currency: currency,
//     image: urlFor(image).url(),
//     price_id: price_id,
//   };
//   return (
//     <Button
//       variant="outline"
//       onClick={() => {
//         buyNow(product.price_id);
//       }}
//     >
//       Checkout Now
//     </Button>
//   );
// }