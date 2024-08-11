import foodify from "../../img/foodify.png";

const Logo = () => (
  <a href="/">
    <img className="h-20 p-2" alt="logo" src={foodify} />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-evenly items-center sticky shadow-lg">
      <Logo />
      <div>
        <ul className="flex ">
          <li className="px-10 text-lg">Home</li>
          <li className="px-10 text-lg">About</li>
          <li className="px-10 text-lg">Contact</li>
          <li className="px-10 text-lg">Instamart</li>
          <li className="px-10 text-lg">Search</li>
          <li className="px-10 text-lg">Sign In</li>
          <li className="px-10 text-lg">Cart(0)</li>
        </ul>
      </div>
      <div className="flex">
        <h4 className="px-4">🟢</h4>
      </div>
    </div>
  );
};
export default Header;
