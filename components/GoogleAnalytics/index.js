import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Crea un tag <script> per il caricamento di gtag.js
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-1E2XFS9DZQ";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Inizializza gtag dopo che il file è stato caricato
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-1E2XFS9DZQ');
    };

    return () => {
      // Pulisce lo script al momento del dismount del componente
      document.head.removeChild(script);
    };
  }, []);

  return null; // Non deve restituire nulla al render
};

export default GoogleAnalytics;