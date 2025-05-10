/* eslint-disable react/react-in-jsx-scope */
// Components
import { Container, Title, CardsContainer, StyledSelect } from "./Styles";
import { CartCard } from "@components";
import CartBuyBox from "./CartBuyBox";
import { useCart } from "../../Stores/CartContext";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextCart } from "./Translation";
import { useState } from "react";

export default function CartPage() {
  const { cartItems: data } = useCart();
  const [year, setYear] = useState(null);
  //translation
  const globalLanguage = useGlobalLanguage();
  const translations = TranslateTextCart(globalLanguage);
  const calculateTotalPrice = (data) => {
    if (year === null || data.length === 0) return "0.00";
    const total = data.reduce((total, tree) => {
      const price = tree.price[year] || 0;
      return total + price * (tree.quantity || 0);
    }, 0);

    return total.toFixed(2);
  };

  let options = [
    { value: 0, label: "1 ano" },
    { value: 1, label: "2 anos" },
    { value: 2, label: "3 anos" },
  ];
  return (
    <Container>
      <Title>{translations.title}</Title>

      <CartBuyBox
        value={calculateTotalPrice(data)}
        year={year}
        disabled={year == null}
      />
      <StyledSelect
        options={options}
        onChange={(e) => setYear(e)}
        placeholder={translations.placeholder}
      ></StyledSelect>
      <CardsContainer>
        {data.map((tree, index) => (
          <CartCard key={index} data={tree} index={year} />
        ))}
      </CardsContainer>
    </Container>
  );
}
