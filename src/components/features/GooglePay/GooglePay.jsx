import { useEffect } from "react";
import { GooglePayButton } from "./Styles";
import { useCreateCertificate } from "../../../hooks/querys/certificate";
import { toast } from "react-toastify";
import useAuthStore from "../../../Stores/auth";
import { useCart } from "../../../Stores/CartContext";
import PropTypes from "prop-types";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";

const GoogleButton = ({ disabled, price, onClose, years }) => {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const { clearCart } = useCart();
  const id_user = useAuthStore((state) => state?.auth?.user?._id);
  const { cartItems: data } = useCart();
  const { mutate: createCertificate } = useCreateCertificate({
    onSuccess: () => {
      toast.success(translations.successMessage);
    },
  });
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
      });
    };

    const initializeGooglePay = () => {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: "TEST",
      });

      const paymentDataRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "1234567891011",
          merchantName: "example",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: price,
          currencyCode: "BRL",
          countryCode: "BR",
        },
      };

      const button = paymentsClient.createButton({
        onClick: () => {
          paymentsClient
            .loadPaymentData(paymentDataRequest)
            .then(() => {
              createCertificate({ id_user: id_user, tree: data, years: years });
              clearCart();
              if (onClose) onClose();
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        },
        buttonSizeMode: "fill",
        buttonType: "short",
      });

      if (window.innerWidth <= 480) {
        button.style.width = "70px";
        button.style.height = "40px";
      } else if (window.innerWidth <= 768) {
        button.style.width = "120px";
        button.style.height = "45px";
      } else {
        button.style.width = "150px";
        button.style.height = "50px";
      }
      button.classList.add("custom-google-pay-button");

      const container = document.getElementById("google-pay-button");
      if (container && container.children.length === 0) {
        container.appendChild(button);
      }
    };

    loadScript("https://pay.google.com/gp/p/js/pay.js")
      .then(initializeGooglePay)
      .catch((error) => {
        console.error("Failed to load Google Pay script:", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GooglePayButton
      disabled={disabled}
      id="google-pay-button"
      radius={4}
      buttonSizeMode="fill"
    ></GooglePayButton>
  );
};
GoogleButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  years: PropTypes.number,
};
export default GoogleButton;
