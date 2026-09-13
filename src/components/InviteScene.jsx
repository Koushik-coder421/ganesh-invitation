import React from 'react';
import { CONFIG } from '../config';

export function InviteScene({
  sec2Ref,
  garlandLRef,
  garlandRRef,
  bellRefs,
  diyaLRef,
  diyaRRef,
  inviteRef
}) {
  return (
    <section ref={sec2Ref} className="scene scene--invite">
      <div className="scene__stage stage--invite">
        {/* Sparks */}
        <span className="spark spark--1" aria-hidden="true"></span>
        <span className="spark spark--2" aria-hidden="true"></span>
        <span className="spark spark--3" aria-hidden="true"></span>

        {/* Garlands */}
        <div ref={garlandLRef} className="garland garland--left">
          <img src="/assets/garland.png" alt="Jasmine garlands" decoding="async" />
        </div>
        <div ref={garlandRRef} className="garland garland--right" aria-hidden="true">
          <img src="/assets/garland.png" alt="" decoding="async" />
        </div>

        {/* Bells */}
        <div ref={el => (bellRefs.current[0] = el)} className="bell bell--1">
          <div className="bell__swing bell__swing--slow-a">
            <img src="/assets/bellLong2.png" alt="Temple bell" decoding="async" />
          </div>
        </div>
        <div ref={el => (bellRefs.current[1] = el)} className="bell bell--2">
          <div className="bell__swing bell__swing--fast-a">
            <img src="/uploads/bell.png" alt="Temple bell" decoding="async" />
          </div>
        </div>
        <div ref={el => (bellRefs.current[2] = el)} className="bell bell--3">
          <div className="bell__swing bell__swing--fast-b">
            <img src="/uploads/bell.png" alt="Temple bell" decoding="async" />
          </div>
        </div>
        <div ref={el => (bellRefs.current[3] = el)} className="bell bell--4">
          <div className="bell__swing bell__swing--slow-b">
            <img src="/assets/bellLong2.png" alt="Temple bell" decoding="async" />
          </div>
        </div>

        {/* Oil Lamps (Diyas) */}
        <img ref={diyaLRef} className="diya diya--left" src="/assets/lamp2.png" alt="Brass oil lamp" decoding="async" />
        <img ref={diyaRRef} className="diya diya--right" src="/assets/lamp2.png" alt="Brass oil lamp" decoding="async" />

        {/* Invitation Text */}
        <div ref={inviteRef} className="invite">
          <p className="invite__salutation">{CONFIG.salutation || '॥ श्री गणेशाय नमः ॥'}</p>
          <div className="invite__stem"></div>
          <h1 className="invite__title">{CONFIG.title || 'Happy Ganesh Chaturthi'}</h1>
          <p className="invite__body">{CONFIG.invitationText || 'We invite you and your family to join us for darshan, aarti and prasad at our home.'}</p>
          <p className="invite__marathi">{CONFIG.marathiText || 'सहकुटुंब सहपरिवार सस्नेह आमंत्रण'}</p>
        </div>
      </div>
    </section>
  );
}
