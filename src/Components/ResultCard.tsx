import "./ResultCard.css";
const ResultCard = ({ result }: any) => {
  console.log(result);
  const link =
    result.link ||
    result.rawData?.landingPageUrl ||
    result.rawData?.c_primaryCTA?.link ||
    result.rawData?.c_secondaryCTA?.link ||
    result.rawData?.website ||
    result.rawData?.youtube_videoURL ||
    "";
  return (
    <div className="result-container" id={result.index}>
      <div className="flex gap-1">
        <p className="italic font-light truncate-text">
          <span className="font-semibold not-italic">Segment: </span>
          {result.segment.text}
        </p>
      </div>
      <div className="flex gap-1">
        <p className="font-semibold">Source:</p>
        <div>
          <a href={link}>{result.name}</a>
        </div>
      </div>
      <div className="flex gap-1">
        <p className="font-semibold">Relevance Score:</p>
        <p className="font-light">{result.segment.score}</p>
      </div>
    </div>
  );
};

export default ResultCard;
