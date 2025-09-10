// Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`${styles.footerContainer} ${className}`}>
      {/* Header con logo y redes sociales */}
      <div className={styles.footerHeader}>
        <div className={styles.logoSection}>
          <img src="/oneshop.png" alt="OneShop" className={styles.logoIcon} />
          <h1 className={styles.logoText}>OneShop</h1>
        </div>
        
        <div className={styles.socialSection}>
          <p className={styles.socialText}>Seguinos en</p>
          <div className={styles.socialIcons}>
            <img src="/instagram.png" alt="Instagram" className={styles.socialIcon} />
            <img src="/facebook.png" alt="Facebook" className={styles.socialIcon} />
            <img src="/twitter.png" alt="Twitter" className={styles.socialIcon} />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className={styles.footerContent}>
        {/* Sobre nosotros */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Sobre nosotros</h3>
          <p className={styles.aboutText}>
            OneShop everything you need in one place, argentinian startup 
            following the goal of bringing people help to find what they're 
            looking for in a safety place
          </p>
        </div>

        {/* Productos */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Productos</h3>
          <ul className={styles.linksList}>
            <li><a href="#" className={styles.link}>Hogar</a></li>
            <li><a href="#" className={styles.link}>Maquillaje</a></li>
            <li><a href="#" className={styles.link}>Electrodomésticos</a></li>
            <li><a href="#" className={styles.link}>Audio y visual</a></li>
            <li><a href="#" className={styles.link}>Vehículos</a></li>
            <li><a href="#" className={styles.link}>Indumentaria</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Contacto</h3>
          <div className={styles.contactInfo}>
            <p>(+54) 2494 340995</p>
            <p>Tandil, Buenos Aires</p>
          </div>
        </div>

        {/* Unirte */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Unirte</h3>
          <ul className={styles.linksList}>
            <li><a href="#" className={styles.link}>Iniciar sesión</a></li>
            <li><a href="#" className={styles.link}>Registrarte</a></li>
          </ul>
        </div>

        {/* Comprar */}
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Comprar</h3>
          <ul className={styles.linksList}>
            <li><a href="#" className={styles.link}>Comprar</a></li>
            <li><a href="#" className={styles.link}>Mis compras</a></li>
            <li><a href="#" className={styles.link}>Ofertas</a></li>
          </ul>
        </div>

        {/* Sección CTA */}
        <div className={`${styles.footerSection} ${styles.ctaSection}`}>
          <div className={styles.ctaText}>
            <h4>¿Tienes preguntas?</h4>
            <h4>Tenemos respuestas.</h4>
            <p>¡Escríbenos!</p>
          </div>
          <button className={styles.emailButton}>
            ENVÍA UN EMAIL
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;