import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function generateCertificate(cardId) {
  const input = document.getElementById(`certificated-${cardId}`);

  input.style.visibility = "visible";

  html2canvas(input, { scale: 2 })
    .then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = 297;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("tree_certificate.pdf");
    })
    .finally(() => {
      input.style.visibility = "hidden";
    });
}