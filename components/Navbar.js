import React from "react";
import Link from "next/link";

function Navbar() {
  const username = true;
  const user = true;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Dev</button>
          </Link>
        </li>

        {username && (
          <>
            <li className="push-left">
              <button>Sign Out</button>
            </li>

            <li>
              <Link href="/admin">
                <button className="btn-blue">Write Post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img
                  src={
                    user?.photoURL ||
                    "https://c.tenor.com/JO2Ih5fvExAAAAAM/elon-musk.gif"
                  }
                />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <>
            <li>
              <Link href="/enter">
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
