// Libs
import { useNavigate } from "react-router-dom";
// Components
import {
  Container,
  Section,
  Title,
  Column,
  ContainerCarousel,
} from "./Styles";
import { useGlobalLanguage } from "../../Stores/globalLanguage";
import { TranslateTextHeader } from "./Translations";
import { Button, VideoLarger, VideoSmall, DemoCarousel } from "@components";

export default function Home() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateTextHeader({ globalLanguage });

  const navigate = useNavigate();

  return (
    <Container>
      <ContainerCarousel>
        <DemoCarousel />
      </ContainerCarousel>
      <Section>
        <Title> {translations.whyChooseTitle} </Title>
      </Section>
      <Section>
        <Column>
          <p>{translations.whyChooseText1}</p>
        </Column>
        <Column>
          <p>{translations.whyChooseText2}</p>
        </Column>
        <Column>
          <p>{translations.whyChooseText3}</p>
        </Column>
      </Section>
      <Section>
        <Column>
          <Title>{translations.missionTitle}</Title>
          <p>{translations.missionText}</p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/yzSEfZWjdlY?si=h2jNhIWQ-0JoxNn7" />
          <Button onClick={() => navigate("/sobre")}>
            {translations.buttonText}
          </Button>
        </Column>
        <VideoLarger videoUrl="https://www.youtube.com/embed/G8mPtWP-gaY?autoplay=1&mute=1&loop=1&playlist=G8mPtWP-gaY&controls=0&modestbranding=1" />
      </Section>

      <Section>
        <VideoLarger videoUrl="https://www.youtube.com/embed/IadJYF7Oqvo?autoplay=1&mute=1&loop=1&playlist=IadJYF7Oqvo&controls=0&modestbranding=1" />
        <Column>
          <Title>{translations.visionTitle}</Title>
          <p>{translations.visionText}</p>
          <VideoSmall videoUrl="https://www.youtube.com/embed/x0jCZj9UtiM?autoplay=1&mute=1&loop=1&playlist=x0jCZj9UtiM&controls=0&modestbranding=1" />
          
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>{translations.valuesTitle}</Title>
          <p>{translations.valuesText}</p>
          <p>{translations.valuesTextPt2}</p>
          <p>{translations.valuesTextPt3}</p>
          <p>{translations.valuesTextPt4}</p>
        </Column>
        <VideoLarger videoUrl="https://www.youtube.com/embed/-4K-Y8AcVH8?si=y_oagwIQbA8G8T3A&autoplay=1&mute=1&loop=1&playlist=-4K-Y8AcVH8&controls=0&modestbranding=1" />

      </Section>
      <Section>
        <Button onClick={() => navigate("/comprar-arvores")}>
              {translations.button2Text}
        </Button>
      </Section>
    </Container>
  );
}
