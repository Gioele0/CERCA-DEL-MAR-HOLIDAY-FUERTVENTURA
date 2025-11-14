// Lingua default
const DEFAULT_LANG = localStorage.getItem('cdm_lang') || 'it';

const i18n = {
  it: {
    'nav-home':'Home','nav-alloggi':'Alloggi','nav-recensioni':'Recensioni','nav-contatto':'Contatto',
    'hero-title':'Vivi la magia di Fuerteventura',
    'hero-subtitle':'Appartamenti e ville con vista oceano, comfort e relax.',
    'hero-cta':'Scopri le case',
    'section-alloggi':'I nostri alloggi',
    'desc-corralejo':'Luminoso, vicino alle spiagge e ai ristoranti locali.',
    'desc-cotillo':'Lagune tranquille, luce naturale e tramonti dorati.',
    'desc-caleta':'Terrazza vista mare e piscina condominiale.',
    'desc-morro':'A due passi dal mare e dal centro.',
    'desc-costa':'Ampia veranda e atmosfera rilassata.',
    'desc-esquinzo':'Romantico, vista oceano e pace.',
    'desc-lajares':'Boho-chic in un borgo artistico.',
    'desc-majanicho':'Piscina privata e giardino.',
    'desc-oliva':'Eleganza, spazi ampi, vista vulcano.',
    'details-link':'Dettagli →',
    'section-recensioni':'Recensioni dei nostri ospiti',
    'review-1':'“Vista mozzafiato e accoglienza perfetta. Torneremo!”',
    'review-2':'“Piscina meravigliosa e casa curata nei dettagli.”',
    'section-contatto':'Contattaci o prenota',
    'form-contatto':'Contatto','form-prenotazione':'Prenotazione',
    'send':'Invia','book':'Richiedi prenotazione'
  },
  es: {
    'nav-home':'Inicio','nav-alloggi':'Alojamientos','nav-recensioni':'Reseñas','nav-contatto':'Contacto',
    'hero-title':'Vive la magia de Fuerteventura',
    'hero-subtitle':'Apartamentos y villas con vistas al océano, confort y relax.',
    'hero-cta':'Descubrir alojamientos',
    'section-alloggi':'Nuestros alojamientos',
    'desc-corralejo':'Luminoso, cerca de playas y restaurantes locales.',
    'desc-cotillo':'Lagunas tranquilas, luz natural y atardeceres dorados.',
    'desc-caleta':'Terraza con vista al mar y piscina comunitaria.',
    'desc-morro':'A pasos del mar y del centro.',
    'desc-costa':'Gran terraza y ambiente relajado.',
    'desc-esquinzo':'Romántico, vista al océano y tranquilidad.',
    'desc-lajares':'Boho-chic en un pueblo artístico.',
    'desc-majanicho':'Piscina privada y jardín.',
    'desc-oliva':'Elegancia, espacios amplios, vista al volcán.',
    'details-link':'Detalles →',
    'section-recensioni':'Reseñas de nuestros huéspedes',
    'review-1':'“Vistas increíbles y una acogida perfecta. ¡Volveremos!”',
    'review-2':'“Piscina maravillosa y casa cuidada al detalle.”',
    'section-contatto':'Contáctanos o reserva',
    'form-contatto':'Contacto','form-prenotazione':'Reserva',
    'send':'Enviar','book':'Solicitar reserva'
  },
  en: {
    'nav-home':'Home','nav-alloggi':'Stays','nav-recensioni':'Reviews','nav-contatto':'Contact',
    'hero-title':'Feel the magic of Fuerteventura',
    'hero-subtitle':'Apartments and villas with ocean views, comfort and calm.',
    'hero-cta':'Browse stays',
    'section-alloggi':'Our stays',
    'desc-corralejo':'Bright, close to beaches and local eateries.',
    'desc-cotillo':'Quiet lagoons, natural light and golden sunsets.',
    'desc-caleta':'Sea-view terrace and shared pool.',
    'desc-morro':'Steps from the sea and town center.',
    'desc-costa':'Large terrace and relaxed vibe.',
    'desc-esquinzo':'Romantic, ocean view and peace.',
    'desc-lajares':'Boho-chic in an artsy village.',
    'desc-majanicho':'Private pool and garden.',
    'desc-oliva':'Elegant, spacious, volcano view.',
    'details-link':'Details →',
    'section-recensioni':'Guest reviews',
    'review-1':'“Breathtaking views and lovely welcome. We’ll be back!”',
    'review-2':'“Wonderful pool and a home with thoughtful details.”',
    'section-contatto':'Contact or book',
    'form-contatto':'Contact','form-prenotazione':'Booking',
    'send':'Send','book':'Request booking'
  }
};

// Applica lingua su tutti gli elementi con data-lang-key
function applyLang(lang){
  const dict = i18n[lang] || i18n.it;
  document.querySelectorAll('[data-lang-key]').forEach(el=>{
    const key = el.getAttribute('data-lang-key');
    if(dict[key]) el.textContent = dict[key];
  });
  localStorage.setItem('cdm_lang', lang);
}

// esposto al global
window.setLanguage = function(lang){ applyLang(lang); }

// init
document.addEventListener('DOMContentLoaded', () => applyLang(DEFAULT_LANG));
