import {
  Link,
  useParams,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router";
import { useState } from "react";
import { destinations } from "./data/destinations";

function Navigation() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      <NavLink to="/destinations">Destinations</NavLink>{" "}
      <NavLink to="/de/destinations">DE Destinations</NavLink>{" "}
      <NavLink to="/en/destinations">EN Destinations</NavLink>{" "}
      <NavLink to="/about">About</NavLink>{" "}
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

function HomePage() {
  return <h1>Discover your next journey.</h1>;
}

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

const supportedLanguages = ["de", "en"];

function getDestinationPath(slug, lang) {
  const prefix = lang ? `/${lang}` : "";
  return `${prefix}/destinations/${slug}`;
}

function AboutPage() {
  return <h1>About us.</h1>;
}

function ContactPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate("/request-sent");
  }

  return (
    <main>
      <h1>Plan your journey</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email adress
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <button type="submit">Send request</button>
      </form>
    </main>
  );
}

function RequestSentPage() {
  return <h1>Thanks! We will contact you soon.</h1>;
}

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

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">Back to home</Link>
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </main>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":lang?/destinations" element={<DestinationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-sent" element={<RequestSentPage />} />
        <Route
          path=":lang?/destinations/:slug"
          element={<DestinationDetailPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
