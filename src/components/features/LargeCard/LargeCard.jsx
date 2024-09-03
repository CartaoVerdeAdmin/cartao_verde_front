/* eslint-disable react/react-in-jsx-scope */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";
import { ScaleLoader } from "react-spinners";
import { ConfigProvider } from "antd";
import {
  StyledCard,
  StyledButton,
  Group,
  CardLine,
  CardTitle,
  DivButton,
  CarouselStyles,
  CarouselImg,
  StyledInput,
} from "./Styles";
import { useGetArchives } from "@hooks/querys/archive";
import { colors } from "@styles/stylesVariables";
import { useGlobalLanguage } from "../../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";
import translateText from "../../../services/translateAPI";
import { useCart } from "../../../Stores/CartContext";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LargeCard({ data, onBuy }) {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });
  const translateLanguage = globalLanguage.toLowerCase();
  const { description, buttonText, price, total_quantity } = data;
  const name = data?.id_tree?.name || data?.name;
  const [descriptionText, setDescriptionText] = useState("");
  const [buttonTranslation, setButtonTranslation] = useState("");
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useCart();
  function buyTree() {
    console.log(quantity);
    if (quantity > 0 || quantity > total_quantity) {
      const tree = { ...data, quantity: Number(quantity) };
      addToCart(tree);
    } else {
      toast.error(translations.toastInvalidNumber);
    }
  }

  // BackEnd Calls
  const IDs = data?.id_tree?.archive || data?.archive;
  const archiveIDs = IDs?.map((archive) => archive?._id);
  const formattedArchives = archiveIDs?.join(", ") || IDs?.join(", ");

  const { data: archiveData, isLoading: isImageLoading } = useGetArchives({
    id: formattedArchives,
    name: name,
    onError: (err) => {
      console.error(translations.error, err);
    },
  });

  translateText(description, translateLanguage)
    .then((translate) => {
      setDescriptionText(translate);
    })
    .catch((error) => {
      console.error("Translation error:", error);
    });

  translateText(buttonText, translateLanguage)
    .then((translate) => {
      setButtonTranslation(translate);
    })
    .catch((error) => {
      console.error("Translation error:", error);
    });

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBg: `#BAFA53`,
            defaultHoverBg: `#33603F`,
            defaultColor: `#33603F`,
            defaultHoverColor: `white`,
            paddingBlock: `20px`,
          },
        },
      }}
    >
      <StyledCard>
        {isImageLoading || !archiveData ? (
          <CardLine style={{ justifyContent: "center" }}>
            <ScaleLoader color={colors.font.secondary} />
          </CardLine>
        ) : (
          <CarouselStyles>
            <Carousel
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
            >
              {archiveData.map((file, index) => {
                const fileSrc = typeof file === "string" ? file : "";

                return (
                  <div key={index}>
                    {fileSrc.startsWith("data:image") && (
                      <CarouselImg src={fileSrc} alt={`Imagem ${index}`} />
                    )}
                    {fileSrc.startsWith("data:video") && (
                      <video controls width="100%" height="auto">
                        <source src={fileSrc} type="video/mp4" />
                        {translations.textVideo}
                      </video>
                    )}
                    {fileSrc.startsWith("data:audio") && (
                      <audio controls>
                        <source src={fileSrc} type="audio/mpeg" />
                        {translations.textAudio}
                      </audio>
                    )}
                    {fileSrc.startsWith("data:application/pdf") && (
                      <object
                        data={fileSrc}
                        type="application/pdf"
                        width="100%"
                        height="400px"
                      >
                        {translations.textPDF}
                        <a href={fileSrc}>{translations.textDownload}</a>.
                      </object>
                    )}
                  </div>
                );
              })}
            </Carousel>
          </CarouselStyles>
        )}

        <Group>
          <CardTitle>{name}</CardTitle>
        </Group>
        <CardLine>{descriptionText}</CardLine>
        <CardLine>
          {total_quantity && <p>Quantidade de arvores : {total_quantity}</p>}
        </CardLine>
        <CardLine>{price && <>1 ano R$ {price[0]}</>}</CardLine>
        <CardLine>{price && <>2 anos R$ {price[1]}</>}</CardLine>
        <CardLine>{price && <>3 anos R$ {price[2]}</>}</CardLine>
        <DivButton>
          {price && (
            <StyledInput
              type="number"
              placeholder="Quantidade de arvores"
              min={0}
              max={total_quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          )}
          <StyledButton onClick={onBuy ? onBuy : buyTree}>
            {buttonTranslation || buttonText}
          </StyledButton>
        </DivButton>
      </StyledCard>
    </ConfigProvider>
  );
}

LargeCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    archive: PropTypes.array,
    total_quantity: PropTypes.number,
    id_tree: PropTypes.shape({
      name: PropTypes.string,
      archive: PropTypes.arrayOf(PropTypes.string),
    }),
    buttonText: PropTypes.string,
  }),
  onBuy: PropTypes.func,
};
