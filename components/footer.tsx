import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-24 flex flex-col items-center space-y-1">
          <a href="/feed.xml">RSS</a>
          <a href="https://twitter.com/brendondotto">Twitter</a>
          <a href="https://github.com/brendonotto">Github</a>
          <a href="https://youtube.com/brendonotto">YouTube</a>
          <div>
            <span>©2021 Brendon Otto</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
