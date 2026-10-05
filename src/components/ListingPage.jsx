import React from 'react';
import Header from './Header.jsx';
import SectionNav from './SectionNav.jsx';
import TitleRow from './TitleRow.jsx';
import HeroGallery from './HeroGallery.jsx';
import ListingInfo from './ListingInfo.jsx';
import WhereToSleep from './WhereToSleep.jsx';
import Amenities from './Amenities.jsx';
import Availability from './Availability.jsx';
import BookingCard from './BookingCard.jsx';
import Reviews from './Reviews.jsx';
import Location from './Location.jsx';
import HostCard from './HostCard.jsx';
import ThingsToKnow from './ThingsToKnow.jsx';
import NearbyStays from './NearbyStays.jsx';

export default function ListingPage({ inert }) {
  return (
    <div
      {...(inert ? { inert } : {})}
      className={inert ? 'pointer-events-none select-none' : undefined}
    >
      <Header />
      <SectionNav />
      <main id="listing-content" className="max-w-[1120px] mx-auto px-6">
        <TitleRow />
        <HeroGallery />
        <div className="grid grid-cols-[minmax(0,1fr)_372px] gap-20">
          <div>
            <ListingInfo />
            <WhereToSleep />
            <Amenities />
            <Availability />
            <Reviews />
            <Location />
            <HostCard />
            <ThingsToKnow />
          </div>
          <div>
            <BookingCard />
          </div>
        </div>
        <NearbyStays />
        <div className="pb-16" />
      </main>
    </div>
  );
}
