import { useParams, Link } from "react-router";
import { destinations } from "../data/destinations";
import { getDestinationPath } from "../utils/destinationPaths";

const supportedLanguages = ["de", "en"];
function DestinationsPage() {
  const { lang } = useParams();
  const currentLanguage = supportedLanguages.includes(lang) ? lang : "en";

  return (
    <main>
      <h1>Destinations</h1>
      <p>{currentLanguage}</p>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.slug}>
            <h2>{destination.name}</h2>
            <p>{destination.country}</p>
            <Link to={getDestinationPath(destination.slug, lang)}>
              Explore {destination.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default DestinationsPage;
