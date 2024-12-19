import { VideoDivLarger } from "./Styles";
import PropTypes from "prop-types";
export default function VideoLarger({ videoUrl }) {
  return (
    <VideoDivLarger>
      <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        title={"Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop;"
        allowFullScreen
      ></iframe>
    </VideoDivLarger>
  );
}

VideoLarger.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};
