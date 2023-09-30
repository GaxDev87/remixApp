import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Hola, esta es la pagina principal</h1>
      <nav>
        <ul>
          <li>
            <Link to='/about'>
              Ir a about
            </Link>
          </li>
          <li>
            <Link to='/create'>
              Crear un post
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
