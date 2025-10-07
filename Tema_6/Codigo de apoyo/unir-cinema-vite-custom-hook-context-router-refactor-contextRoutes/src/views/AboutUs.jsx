import React from 'react';
import { useMovies } from '../hooks/useMovies';

const AboutUs = () => {
  const { darkMode } = useMovies();

  return (
    <div className={`page-container ${darkMode ? 'dark' : ''}`}>
      <div className="about-content">
        <h2>Sobre UNIR Cinema</h2>

        <div className="about-section">
          <h3>¿Quiénes somos?</h3>
          <p>
            UNIR Cinema es la cadena de cines líder en España, ofreciendo la mejor experiencia
            cinematográfica en las principales ciudades del país. Con salas modernas y la última
            tecnología en proyección y sonido, nos dedicamos a hacer de cada visita al cine
            una experiencia inolvidable.
          </p>
        </div>

        <div className="about-section">
          <h3>Nuestra Historia</h3>
          <p>
            Fundada en 2015, UNIR Cinema nació con la visión de revolucionar la experiencia
            cinematográfica en España. Comenzamos con una sola sala en Madrid y hoy tenemos
            presencia en las principales ciudades españolas, siempre manteniendo nuestro
            compromiso con la calidad y la innovación.
          </p>
        </div>

        <div className="about-section">
          <h3>Nuestras Ciudades</h3>
          <div className="cities-grid">
            <div className="city-card">
              <h4>🏙️ Madrid</h4>
              <p>Nuestra sede principal, con las salas más modernas y exclusivos estrenos.</p>
            </div>
            <div className="city-card">
              <h4>🌊 Barcelona</h4>
              <p>Experiencia cinematográfica mediterránea con vistas espectaculares.</p>
            </div>
            <div className="city-card">
              <h4>🍊 Valencia</h4>
              <p>Tradición y modernidad se unen en nuestras salas valencianas.</p>
            </div>
            <div className="city-card">
              <h4>🌞 Sevilla</h4>
              <p>El arte del cine en el corazón de Andalucía.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>Nuestra Misión</h3>
          <p>
            Proporcionar entretenimiento de calidad superior, creando momentos especiales
            para nuestros clientes a través de la magia del cine. Nos esforzamos por ofrecer
            el mejor servicio, las instalaciones más cómodas y una programación diversa que
            satisfaga todos los gustos.
          </p>
        </div>

        <div className="contact-info">
          <h3>Contacto</h3>
          <p>📧 Email: info@unircinema.es</p>
          <p>📞 Teléfono: +34 900 123 456</p>
          <p>🌐 Web: www.unircinema.es</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
