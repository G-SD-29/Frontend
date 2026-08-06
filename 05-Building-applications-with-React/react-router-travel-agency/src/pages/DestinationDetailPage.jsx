import { useParams, Link } from "react-router";
import { destinations } from "../data/destinations";

function DestinationDetailPage() {
  const { lang, slug } = useParams();
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return <p>Destination does not exist.</p>;
  }

  return (
    <main>
      <Link to={lang ? `/${lang}/destinations` : "/destinations"}>
        Back to destinations
      </Link>
      <h1>{destination.name}</h1>
      <p>{destination.country}</p>
      <p>{destination.description}</p>
    </main>
  );
}

export default DestinationDetailPage;
