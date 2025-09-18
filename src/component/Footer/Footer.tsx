import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`${styles.footerContainer} ${className}`}>
      <div className={styles.footerHeader}>
        <div className={styles.logoSection}>
          <img src="/logos/oneshop.png" alt="OneShop"/>
        </div>
        
        <div className={styles.socialSection}>
  <p className={styles.socialText}>Seguinos en</p>
  <div className={styles.socialIcons}>
    <img src="/logos/instagram.png" alt="Instagram" className={styles.socialIcon} />
    <img src="/logos/facebook.png" alt="Facebook" className={styles.socialIcon} />
    <img src="/logos/twitter.png" alt="Twitter" className={styles.socialIcon} />
  </div>
</div>

      </div>

      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Sobre nosotros</h3>
          <p className={styles.aboutText}>
            OneShop everything you need in one place, argentinian startup 
            following the goal of bringing people help to find what they're 
            looking for in a safety place
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}> <a href="/products">Productos</a></h3>
          <ul className={styles.linksList}>
            <li><a href="/productsByCategory/decoracion" className={styles.link}>Hogar</a></li>
            <li><a href="/productsByCategory/maquillaje" className={styles.link}>Maquillaje</a></li>
            <li><a href="/productsByCategory/electrodomesticos" className={styles.link}>Electrodomésticos</a></li>
            <li><a href="/productsByCategory/deportivo" className={styles.link}>Deportivo</a></li>
            <li><a href="/productsByCategory/vehiculos" className={styles.link}>Vehículos</a></li>
            <li><a href="/productsByCategory/indumentaria" className={styles.link}>Indumentaria</a></li>
            <li><a href="/productsByCategory/mochilas" className={styles.link}>Mochilas</a></li>
            <li><a href="/productsByCategory/tecnología" className={styles.link}>Tecnología</a></li>
            <li><a href="/productsByCategory/música" className={styles.link}>Música</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Contacto</h3>
          <div className={styles.contactInfo}>
            <p>(+54) 2494 340995</p>
            <p>Tandil, Buenos Aires</p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Unirte</h3>
          <ul className={styles.linksList}>
            <li><Link to="/login" className={styles.link}>Iniciar sesión</Link></li>
            <li><Link to="/logup" className={styles.link}>Registrate</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>Comprar</h3>
          <ul className={styles.linksList}>
            <li><Link to="/purchases" className={styles.link}>Mis compras</Link></li>
            <li><Link to="/micarrito" className={styles.link}>Mi carrito</Link></li>
          </ul>
        </div>

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