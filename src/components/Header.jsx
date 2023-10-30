import Nav from "./Nav";

const Header = () => {
  return (
    <header className="flex flex-row align-center justify-between sticky inset-x-0 top-0 text-white bg-violet-900 p-8 shadow-black drop-shadow-lg">
      <div className="flex-none text-center">
        {/* TODO: for the social links I think it would be really cool to have them expand out of this left heading block as an after. Maybe that's doable, maybe it isn't. */}
        <h1 className="text-5xl font-bold">Joshua Kellogg</h1>
        <h3 className="text-2xl">Full-Stack Web Developer</h3>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
