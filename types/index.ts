import { carts, products } from "@/db/schema";
import { cartItemSchema, shippingAddressSchema } from "@/lib/validators";
import { InferSelectModel } from "drizzle-orm";
import { z } from "zod";

// PRODUCTS
export type Product = InferSelectModel<typeof products>;

// CART
export type Cart = InferSelectModel<typeof carts>;
export type CartItem = z.infer<typeof cartItemSchema>;

export type ShippingAdress = z.infer<typeof shippingAddressSchema>;
