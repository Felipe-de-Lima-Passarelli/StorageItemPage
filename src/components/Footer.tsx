const Footer = () => {
  return (
    <footer className="bg-[#2B3743] text-white text-center py-6">
      <p>
        © {new Date().getFullYear()} • Projeto desenvolvido por
        <a href="https://github.com/Felipe-de-Lima-Passarelli" target="_blank">
          <span className="font-semibold ml-1">Felipe de Lima Passarelli</span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
