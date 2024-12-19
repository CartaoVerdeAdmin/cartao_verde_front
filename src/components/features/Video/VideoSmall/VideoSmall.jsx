import { VideoDivSmall } from "./Styles";
import PropTypes from "prop-types";
export default function VideoSmall({ videoUrl }) {
  return (
    <VideoDivSmall>
      <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        title={"Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;loop;"
        allowFullScreen
      ></iframe>
    </VideoDivSmall>
  );
}

VideoSmall.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};
