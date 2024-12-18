export function TranslateTextModal({ globalLanguage }) {
  let Title;
  let WelcomeTitle;
  let WelcomeText;
  let Acceptance1;
  let Acceptance1Text;
  let UseofSite;
  let UseofSiteText;
  let IntellectualProperty;
  let IntellectualPropertyText;
  let Privacy;
  let PrivacyText;
  let LimitationofLiability;
  let LimitationofLiabilityText;
  let LinkstoThirdPartySites;
  let LinkstoThirdPartySitesText;
  let GoverningLaw;
  let GoverningLawText;
  let Contact;
  let ContactText;
  let Acceptance2;
  let Acceptance2Text;
  let select;
  let checkboxText;
  let termsAcceptText;
  let placeholderEmail;
  let placeholderCPF;
  let toastPostPixPayment;
  let toastPostPixPaymentError;
  let formsTitle;
  let toastSuccessPurchase;

  if (globalLanguage == "EN") {
    toastSuccessPurchase = "Purchase completed successfully";
    Title = "Terms of Acceptance and Privacy";
    WelcomeTitle = "Welcome to the Green Card Standing Forest website.";
  WelcomeText =
    "By using this site, you agree to the terms and conditions below:";
  Acceptance1 = "1. Acceptance of Terms:";
  Acceptance1Text =
    "By financially collaborating with the project through the site, you fully accept the terms of this document. These terms may be updated periodically, and we will notify you of significant changes via the website or the registered e-mail. Continued use of the site after changes implies your acceptance.";
  UseofSite = "2. Use of the Site:";
  UseofSiteText =
    "The site is a private initiative that promotes environmental preservation through trees adoption. It is intended for personal use and collaboration with the project. All content on this site, including texts, images, graphics, videos, and other materials, is protected by copyright and intellectual property laws. Any unauthorized use may result in legal penalties.";
  Privacy = "3. Personal Data";
  PrivacyText =
    "We collect data such as Passport Number, e-mail and address for issuing the adoption contract and sending the Environmental Preservation Certificate. Data will be handled in accordance with the Brazilian General Personal Data Protection Law (LGPD – Lei Geral de Proteção de Dados) - Law No. 13,709/2018, and will be used exclusively for project purposes.";
  LimitationofLiability = "4. Limitation of Liability";
  LimitationofLiabilityText =
    "Cartão Verde Floresta em Pé (Green Card Standing Forest) is committed to providing accurate information and correcting identified inconsistencies. However, we are not responsible for website interruptions or failures resulting from third-party services, such as internet providers, hosting, or your bank's payment services.";
  GoverningLaw = "5. Applicable Law";
  GoverningLawText =
    "This acceptance term is governed by the laws of the Federative Republic of Brazil. Any disputes related to the use of this website will be submitted to the competent courts in Brazil.";
  Contact = "6. Privacy and Contact";
  ContactText =
    "Your support for the initiative is protected by our Privacy Policy. For any questions, contact us at cartaoverde7@gmail.com.";
  Acceptance2 = "By clicking 'I accept the terms'";
  Acceptance2Text = "By clicking 'I accept the terms,' you confirm that you have read, understood, and agree to the above terms.";
  Acceptance2 = "Acceptance of Terms";
    Acceptance2Text =
      "By clicking 'I Accept' or continuing to use this website, you acknowledge that you have read, understood, and agree to be bound by all the terms and conditions set forth in this acceptance of terms.";
    select = "I agree to the terms described above";
    checkboxText = "I agree to the terms described above";
    termsAcceptText = "Terms of Acceptance and privacy";
    placeholderEmail = "Enter your email";
    placeholderCPF = "Enter your CPF";
    toastPostPixPayment =
      "Payment link generated successfully, it will open automatically!";
    toastPostPixPaymentError = "Error generating payment link..";
    formsTitle = "Fill in the form to generate the QR Code";
  } else if (globalLanguage == "PT") {
    toastSuccessPurchase = "Compra efetuada com sucesso";
    Title = "Termo de Aceite e privacidade";

    WelcomeTitle = "Bem-vindo ao site da Cartão Verde Floresta em Pé.";
    WelcomeText =
      "Ao utilizar este site, você concorda com os termos e condições abaixo:";
    Acceptance1 = "1. Aceitação dos Termos:";
    Acceptance1Text =
      "Ao colaborar financeiramente com o projeto por meio do site, você aceita integralmente os termos deste documento. Estes termos podem ser atualizados periodicamente, e notificaremos você sobre alterações significativas por meio do site ou do e-mail cadastrado. O uso contínuo do site após as alterações implica sua aceitação.";
    UseofSite = "2. Uso do Site:";
    UseofSiteText =
      "Este site destina-se ao uso pessoal e informativo. Qualquer uso comercial do conteúdo aqui apresentado, sem a devida autorização, é estritamente proibido. Você concorda em não modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação, software, produtos ou serviços obtidos neste site.";
    IntellectualProperty = "Propriedade Intelectual";
    IntellectualPropertyText =
      "Todo o conteúdo deste site, incluindo textos, imagens, gráficos, logotipos, ícones, vídeos, áudios e outros materiais, é protegido por leis de direitos autorais e outras leis de propriedade intelectual. O uso não autorizado do conteúdo pode violar essas leis e resultar em sanções civis e criminais.";
    Privacy = "3. Dados Pessoais";
    PrivacyText =
      "Coletamos dados como CPF e e-mail para emissão do contrato de adoção e envio do Certificado de Preservação Ambiental. Os dados serão tratados conforme a Lei Geral de Proteção de Dados Pessoais (LGPD) - Lei nº 13.709/2018, e utilizados exclusivamente para os fins do projeto.";
    LimitationofLiability = "4. Limitação de Responsabilidade";
    LimitationofLiabilityText =
      "A Cartão Verde Floresta em Pé compromete-se a fornecer informações precisas e corrigir inconsistências identificadas. No entanto, não nos responsabilizamos por interrupções do site ou falhas decorrentes de serviços de terceiros, como provedores de internet, hospedagem ou serviços de pagamento do seu banco.";
    LinkstoThirdPartySites = "5. Links para Sites de Terceiros";
    LinkstoThirdPartySitesText =
      "Este site pode conter links para sites de terceiros, que são fornecidos apenas para conveniência do usuário. A Cartão Verde Floresta em Pé não endossa nem é responsável pelo conteúdo desses sites, nem por quaisquer danos ou perdas decorrentes do uso dos mesmos.";
    GoverningLaw = "6. Lei Aplicável";
    GoverningLawText =
      "Este termo de aceite é regido pelas leis da República Federativa do Brasil. Quaisquer disputas decorrentes do uso do site serão submetidas aos tribunais competentes do Brasil.";
    Contact = "7. Privacidade e Contato";
    ContactText =
      "Seu apoio à iniciativa é protegido por nossa Política de Privacidade. Em caso de dúvidas, entre em contato pelo e-mail cartaoverde7@gmail.com.";
    Acceptance2 = "Aceite dos Termos";
    Acceptance2Text =
      "Ao clicar em 'Aceito' ou ao continuar utilizando este site, você reconhece que leu, entendeu e concorda em se submeter a todos os termos e condições estabelecidos neste termo de aceite.";

    select = "Eu concordo com os termos descritos acima";
    checkboxText = "Eu concordo com os termos descritos acima";
    termsAcceptText = "Termo de Aceite e privacidade";
    placeholderEmail = "Digite seu email";
    placeholderCPF = "Digite seu CPF";
    toastPostPixPayment =
      "Link pagamento gerado com sucesso, ele abrirá automaticamente!";
    toastPostPixPaymentError = "Erro ao gerar link de pagamento.";
    formsTitle = "Preencha o formulário para gerar o QR Code";
  } else if (globalLanguage == "ES") {
    toastSuccessPurchase = "Compra realizada con éxito.";
    Title = "Términos de Aceptación y privacidad";

    WelcomeTitle = "Bienvenido al sitio web de Tarjeta Verde Bosque en Pie.";
  WelcomeText = "Al utilizar este sitio, acepta los términos y condiciones a continuación:";
  Acceptance1 = "1. Aceptación de los Términos:";
  Acceptance1Text = "Al colaborar financieramente con el proyecto a través del sitio, acepta plenamente los términos de este documento. Estos términos pueden actualizarse periódicamente, y le notificaremos sobre cambios significativos a través del sitio o del correo electrónico registrado. El uso continuo del sitio después de los cambios implica su aceptación.";
  UseofSite = "2. Uso del Sitio:";
  UseofSiteText = "El sitio es una iniciativa privada que promueve la preservación ambiental mediante la adopción de árboles. Está destinado para uso personal y para colaborar con el proyecto. Todo el contenido de este sitio, incluidos textos, imágenes, gráficos, videos y otros materiales, está protegido por leyes de derechos de autor y propiedad intelectual. Cualquier uso no autorizado puede resultar en sanciones legales.";
  Privacy = "3. Datos Personales";
  PrivacyText = "Recopilamos datos como Pasaporte, correo electrónico y dirección para la emisión del contrato de adopción y el envío del Certificado de Preservación Ambiental. Los datos serán tratados de acuerdo con la Ley General de Protección de Datos Personales (LGPD) - Ley Brasileña No. 13.709/2018, y utilizados exclusivamente para los fines del proyecto.";
  LimitationofLiability = "4. Limitación de Responsabilidad";
  LimitationofLiabilityText = "Cartão Verde Floresta em Pé (Tarjeta Verde Bosque en Pie) se compromete a proporcionar información precisa y corregir las inconsistencias identificadas. Sin embargo, no nos hacemos responsables de interrupciones del sitio o fallas derivadas de servicios de terceros, como proveedores de internet, alojamiento o servicios de pago de su banco.";
  GoverningLaw = "5. Ley Aplicable";
  GoverningLawText =
    "Este término de aceptación está regido por las leyes de la República Federativa de Brasil. Cualquier disputa relacionada con el uso de este sitio será sometida a los tribunales competentes de Brasil.";
  Contact = "6. Privacidad y Contacto";
  ContactText = "Su apoyo a la iniciativa está protegido por nuestra Política de Privacidad. Para cualquier pregunta, contáctenos en cartaoverde7@gmail.com.";
  Acceptance2 = "Al hacer clic en 'Acepto los términos'";
  Acceptance2Text = "Al hacer clic en 'Acepto los términos,' confirma que ha leído, entendido y está de acuerdo con los términos anteriores.";

    select = "Acepto los términos descritos anteriormente";
    checkboxText = "Acepto los términos descritos anteriormente";
    termsAcceptText = "Términos de Aceptación y privacidad";
    placeholderEmail = "Introduzca su email";
    placeholderCPF = "Introduzca su CPF";
    toastPostPixPayment =
      "Enlace de pago generado exitosamente, ¡se abrirá automáticamente!";
    toastPostPixPaymentError = "Error al generar el enlace de pago.";
    formsTitle = "Rellena el formulario para generar el Código QR";
  }

  return {
    Title,
    WelcomeTitle,
    WelcomeText,
    Acceptance1,
    Acceptance1Text,
    UseofSite,
    UseofSiteText,
    IntellectualProperty,
    IntellectualPropertyText,
    Privacy,
    PrivacyText,
    LimitationofLiability,
    LimitationofLiabilityText,
    LinkstoThirdPartySites,
    LinkstoThirdPartySitesText,
    GoverningLaw,
    GoverningLawText,
    Contact,
    ContactText,
    Acceptance2,
    Acceptance2Text,
    select,
    checkboxText,
    termsAcceptText,
    placeholderEmail,
    placeholderCPF,
    toastPostPixPayment,
    toastPostPixPaymentError,
    formsTitle,
    toastSuccessPurchase,
  };
}
