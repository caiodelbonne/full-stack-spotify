const Footer = () => {
    return (
      <div className="footer">
        <div className="myProfile">
          <p>Desenvolvido por: <strong>Caio Cesar</strong></p>
          <ul>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://github.com/caiodelbonne">
                GitHub
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://vercel.com/caiodelbonnes-projects">
                Vercel
              </a>
            </li>
          </ul>
        </div>
  
        <div className="academy">
          <p>Projeto FullStack desenvolvido durante o curso da <br/> <strong>#Hashtag Treinamentos</strong></p>
          <p>Alguns direitos reservados.</p>
        </div>
  
        <div className="descProfile">
          <p><strong>Sobre o Dev:</strong></p>
          <p>Me chamo Caio Cesar e estudo tecnologia desde 2014.</p>
          <p>Este é mais um projeto acadêmico desenvolvido para aprendizado e prática.</p>
          <p>Sugestões de melhoria? Me envie um e-mail.</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  