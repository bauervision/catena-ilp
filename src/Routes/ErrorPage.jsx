import { useRouteError } from "react-router-dom";
import { NavBar } from "../components/NavBar";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="App">
      <NavBar currentPage={0} />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
