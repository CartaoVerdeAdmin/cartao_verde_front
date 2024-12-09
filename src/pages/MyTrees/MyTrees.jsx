/* eslint-disable react/react-in-jsx-scope */
// Libs
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
// Components
import { Container, Title, Filter, DivSelect, DivLine, Line } from "./Styles";
import { SearchBar, LargeCard } from "@components";
import useAuthStore from "../../Stores/auth";
import { useGetCertificateByUser } from "@hooks/querys/certificate";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";
import generateCertificate from "../../services/generateCertificate";
import { Certificate } from "../../components";
import translateText from "../../services/translateAPI";

export default function MyTrees() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });
  const translateLanguage = globalLanguage.toLowerCase();

  // States and Variables

  const userID = useAuthStore((state) => state?.auth?.user?._id);
  const [order, setOrder] = useState("active");
  const [certificateData, setCertificateData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  async function translateCollections(cardContent) {
    if (globalLanguage != "PT") {
      for (let card of cardContent) {
        card.name = await translateText(card.name, translateLanguage);
      }
    }
    setCertificateData(cardContent);
  }

  // Backend Calls

  const { data: personalCertificates, isLoading: isCertificatesLoading } =
    useGetCertificateByUser({
      id: userID,
      type: order,
      onError: (err) => {
        toast.error(translations.toastLoadingItensError, err);
      },
    });

  async function formatAllCollection() {
    try {
      let cardContent = [...personalCertificates];
      if (order === "recent") {
        cardContent = cardContent.reverse();
      } else if (order === "older") {
        cardContent;
      } else {
        cardContent.sort(orderBy);
      }

      cardContent = cardContent.map((content) => ({
        ...content,
        buttonText: "Baixar certificado",
        link: "EDITE EM MyTrees.jsx" + content._id,
      }));

      await translateCollections(cardContent);
    } catch (error) {
      toast.error(translations.toastLoadingItensError);
    } finally {
    }
  }

  function orderBy(a, b) {
    if (order === "active") {
      return a.price - b.price;
    } else if (order === "expired") {
      return b.price - a.price;
    }
  }

  useEffect(() => {
    if (!isCertificatesLoading && personalCertificates) {
      formatAllCollection();
    }
  }, [personalCertificates, isCertificatesLoading]);

  return (
    <Container>
      <Title>{translations.pageTitle}</Title>

      <Filter>
        <DivSelect>
          <SearchBar
            placeholder={translations.placeholderSearch}
            value={searchValue}
            search={handleSearchChange}
          />
        </DivSelect>
      </Filter>
      {isCertificatesLoading && certificateData ? (
        <Title>{translations.loading}</Title>
      ) : (
        <DivLine>
          {certificateData
            .filter((card) =>
              card?.id_tree?.name
                ?.toLowerCase()
                ?.includes(searchValue?.toLowerCase())
            )
            .map((card, index) => (
              <>
                <Line onClick={() => card} key={index}>
                  <Certificate card={card} />
                  <LargeCard
                    pageType="mytrees"
                    id="card"
                    data={card}
                    onBuy={() => generateCertificate(card._id)}
                  />
                </Line>
              </>
            ))}
        </DivLine>
      )}
    </Container>
  );
}

//name={card?.id_tree?.name} tree_description={card?.id_tree?.description} certificate_description={card?.description}
