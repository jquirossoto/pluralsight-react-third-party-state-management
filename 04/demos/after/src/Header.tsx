import { Link, NavLink } from "react-router-dom";
import { useAtom, useAtomValue } from "jotai";
import { userAtom } from "./atoms/userAtom";
import { cartAtom } from "./atoms/cartAtom";

export default function Header() {
  const [cart] = useAtom(cartAtom);
  const [user, setUser] = useAtom(userAtom);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink to="/shoes">Shoes</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              Cart (
              {cart.reduce((prev, acc) => {
                return prev + acc.quantity;
              }, 0)}
              )
            </NavLink>
          </li>
          <li>
            {user ? (
              <NavLink to="/account">Account</NavLink>
            ) : (
              <button
                onClick={() => setUser({ id: 1, email: "cory@example.com" })}
              >
                Log in
              </button>
            )}
          </li>
          {user && (
            <li>
              <button onClick={() => setUser(null)}>Log out</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
