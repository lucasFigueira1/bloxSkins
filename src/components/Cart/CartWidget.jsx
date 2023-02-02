import react from "react";
import { RiShoppingBagLine } from "react-icons/ri";

export function CartWidget() {
  return (
    <span>
      <RiShoppingBagLine className="text-white w-6 h-6 font-light cursor-pointer hover:text-bloxPink" />
    </span>
  );
}