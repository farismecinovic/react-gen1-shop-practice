import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { toast } from "react-hot-toast";

export default function HomePage() {
  return (
    <div>
      <ProductCard
        price="30"
        text="Replay muška majica kratkih rukava. Okrugli izrez. Pamuk. Teget boja."
        image={
          "https://www.n-sport.net/UserFiles/products/big/09/12/muska-majica-replay-316522832P-098.jpg"
        }
        title={"Replay Maica"}
        onClick={() => toast.success("Uspesno ste dodali artikal u korpu!")}
      />
    </div>
  );
}
