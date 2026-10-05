import React from 'react';
import ListingPage from './components/ListingPage.jsx';
import PhotoTour from './components/PhotoTour.jsx';
import Lightbox from './components/Lightbox.jsx';
import { PHOTOS } from './data/listing.js';

const useQuery = () => {
  const [q, setQ] = React.useState(() => new URLSearchParams(window.location.search));
  React.useEffect(() => {
    const onPop = () => setQ(new URLSearchParams(window.location.search));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return q;
};

export const navigate = (search) => {
  window.history.pushState({}, '', search ? `?${search}` : window.location.pathname);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
};

export default function App() {
  const q = useQuery();
  const modal = q.get('modal');
  const modalItem = q.get('modalItem');
  const showTour = modal === 'PHOTO_TOUR_SCROLLABLE';
  const lightboxIndex = showTour && modalItem ? parseInt(modalItem, 10) - 1000 : null;
  const showLightbox = lightboxIndex !== null && lightboxIndex >= 0 && lightboxIndex < PHOTOS.length;

  React.useEffect(() => {
    document.body.style.overflow = showTour ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showTour]);

  return (
    <>
      <a href="#listing-content" className="skip-link">
        Skip to content
      </a>
      <ListingPage inert={showTour} />
      {showTour && !showLightbox && <PhotoTour />}
      {showLightbox && <Lightbox index={lightboxIndex} />}
    </>
  );
}
