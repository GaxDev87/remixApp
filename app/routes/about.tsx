import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div>
      <h1>Esta es la Pagina About</h1>
      <Link to='/'>
        Ir a index
      </Link>
    </div>
  );
}
