import { useNavigate, Link } from "react-router";

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

export default NotFoundPage;
