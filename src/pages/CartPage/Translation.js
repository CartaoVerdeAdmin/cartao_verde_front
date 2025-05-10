export function TranslateTextCart({ globalLanguage }) {
  let title;
  let value;
  let purchase;
  let placeholder;
  let selectPeriodWarning;

  if (globalLanguage === "EN") {
    title = "SHOPPING CART";
    placeholder = "Select adoption deadline";
    value = "TOTAL: US$";
    purchase = "COMPLETE PURCHASE";
    selectPeriodWarning = "Please select an adoption deadline.";
  } else if (globalLanguage === "PT") {
    title = "CARRINHO DE COMPRAS";
    placeholder = "Selecione o prazo de adoção";
    value = "TOTAL: RS$";
    purchase = "FECHAR COMPRA";
    selectPeriodWarning = "Por favor, selecione o prazo de adoção.";
  } else if (globalLanguage === "ES") {
    title = "CARRITO DE COMPRAS";
    placeholder = "Selecciona el plazo de adopción";
    value = "TOTAL: €";
    purchase = "COMPLETAR COMPRA";
    selectPeriodWarning = "Por favor, selecciona el plazo de adopción.";
  }

  return {
    title,
    value,
    purchase,
    placeholder,
    selectPeriodWarning,
  };
}
