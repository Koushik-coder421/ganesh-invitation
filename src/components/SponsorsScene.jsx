import React from 'react';
import { CONFIG } from '../config';

export function SponsorsScene() {
  const sponsors = CONFIG.sponsorsList || [
    {
      item: 'Ganesh Idol / Vigraham',
      itemMarathi: 'श्री गणेश मूर्ती सौजन्य',
      sponsorName: 'Mr. Y. Satish Kumar & Mrs. Y. Shravani',
      icon: '🕉️'
    },
    {
      item: '5kg Laddu Prasad',
      itemMarathi: '५ किलो लाडू प्रसाद सौजन्य',
      sponsorName: 'Mr. Chandrashekar',
      icon: '✨'
    }
  ];

  return (
    <section className="scene scene--sponsors">
      <div className="scene__stage stage--sponsors">
        <div className="sponsors-card">
          <div className="sponsors-card__header">
            <span className="sponsors-card__badge">✨ Special Contributions ✨</span>
            <h2 className="sponsors-card__title">Sponsored By / विशेष सौजन्य</h2>
            <div className="sponsors-card__rule"></div>
          </div>

          <div className="sponsors-list">
            {sponsors.map((sp, idx) => (
              <div key={idx} className="sponsor-item-card">
                <div className="sponsor-item-icon">
                  {typeof sp.icon === 'string' && (sp.icon.startsWith('/') || sp.icon.includes('.')) ? (
                    <img src={sp.icon} alt={sp.item} className="sponsor-item-img" decoding="async" />
                  ) : (
                    sp.icon || '🕉️'
                  )}
                </div>
                <div className="sponsor-item-details">
                  <span className="sponsor-item-label">{sp.itemMarathi || sp.item}</span>
                  <h3 className="sponsor-item-name">{sp.sponsorName}</h3>
                  <span className="sponsor-item-sublabel">{sp.item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
