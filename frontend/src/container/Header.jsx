import { icons, links } from "../constants";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Header = () => {
  return (
    <header
      className={` transition max-w-[1440px]   w-full m-auto px-4 z-50  dark:bg-black`}
    >
      <Container>
        <nav
          className={` hidden w-full py-3 font-bold md:flex items-center justify-between mx-auto`}
        >
          <Link to="/">
            <div className="flex">
              <img width={150} src="/nexalogo.png" alt="site-logo" />
            </div>
          </Link>

          <div className="flex justify-between gap-6 items-center">
            {links.map((link, index) => (
              <a
                key={index}
                className="hover:opacity-65 transition duration-300 ease-linear"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-2 ">
            {icons.map(({ icon: Icon, href }, index) => (
              <a key={index} href={href}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
