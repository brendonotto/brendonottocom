import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <span>© Copyright 2021 Brendon Otto</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
