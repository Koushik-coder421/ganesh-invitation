import React from 'react';
import { CONFIG } from '../config';

export function DetailsScene({
  sec3Ref,
  cardRegionRef,
  cardRef,
  mouseRef,
  bubbleRef
}) {
  const openMap = () => {
    window.open(CONFIG.mapsUrl, '_blank', 'noopener');
  };

  const shareOnWhatsApp = () => {
    const text = CONFIG.shareMessage + CONFIG.mapsUrl;
    window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener');
  };

  const formattedAddress = (CONFIG.address || 'Shree Niwas, 12 Tulsi Baug Road,\nSadashiv Peth, Pune 411030')
    .split('\n')
    .map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < CONFIG.address.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));

  const signoffText = CONFIG.associationName || CONFIG.signoff || 'THE FAMILY';

  return (
    <section ref={sec3Ref} className="scene scene--details">
      <div className="scene__stage stage--details">

        {CONFIG.showPetals && (
          <div className="petals" aria-hidden="true">
            <span className="petal petal--1"></span>
            <span className="petal petal--2"></span>
            <span className="petal petal--3"></span>
            <span className="petal petal--4"></span>
          </div>
        )}

        <div ref={cardRegionRef} className="card-region">
          <div ref={cardRef} className="card">
            <header className="card__head">
              <p className="card__eyebrow">{CONFIG.eyebrow || 'Ganeshotsav 2026'}</p>
              <h2 className="card__title">{CONFIG.cardTitle || 'Darshan & Aarti'}</h2>
            </header>

            <div className="card__panel">
              <div className="field">
                <p className="field__label">Date & Day</p>
                <p className="field__value">{CONFIG.days || '14 September 2026'}</p>
                <p className="field__note">{CONFIG.dayNote || 'Monday · सार्वजनिक गणपती'}</p>
              </div>

              <div className="divider"></div>

              {/* Chief Guest Section */}
              {CONFIG.chiefGuest && (
                <>
                  <div className="field field--guest">
                    <p className="field__label">🌟 Chief Guest (प्रमुख पाहुणे)</p>
                    <p className="field__value field__value--guest">{CONFIG.chiefGuest}</p>
                    {CONFIG.chiefGuestMarathi && (
                      <p className="field__note">{CONFIG.chiefGuestMarathi}</p>
                    )}
                  </div>

                  <div className="divider"></div>
                </>
              )}

              {/* ONLY Evening Aarti */}
              <div className="field field--highlight">
                <p className="field__label">🪔 Evening Aarti (सायंकाळची आरती)</p>
                <p className="field__value field__value--time">{CONFIG.eveningAarti || '7:30 PM'}</p>
              </div>

              <div className="divider"></div>

              {/* Aarti Couple Section */}
              <div className="field field--couple">
                <p className="field__label">🙏 Aarti Couple (आरती दांपत्य)</p>
                <p className="field__value field__value--couple">{CONFIG.aartiCouple || 'Mr. & Mrs. Kulkarni'}</p>
                {CONFIG.aartiCoupleMarathi && (
                  <p className="field__note">{CONFIG.aartiCoupleMarathi}</p>
                )}
              </div>

              <div className="divider"></div>

              <div className="field">
                <p className="field__label">Venue</p>
                <p className="field__address">
                  {formattedAddress}
                </p>
              </div>

              {CONFIG.showWhatsApp && (
                <button
                  type="button"
                  className="btn-share"
                  onClick={shareOnWhatsApp}
                >
                  Share this invitation on WhatsApp
                </button>
              )}
            </div>

            <p className="card__signoff">— {signoffText} —</p>
          </div>
        </div>

        <div className="mouse-strip">
          <div ref={bubbleRef} className="bubble">
            <div className="bubble__box">
              <p className="bubble__line">चला! I'll show you the way</p>
              <p className="bubble__hint">Tap me for directions</p>
            </div>
            <div className="bubble__tail"></div>
          </div>
          <div ref={mouseRef} className="mouse">
            <button
              type="button"
              className="mouse__btn"
              aria-label="Open directions in Google Maps"
              onClick={openMap}
            >
              <img src="/uploads/Mouse.png" alt="Bappa's mushak" decoding="async" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}