import React from 'react';
import { CONFIG } from '../config';

export function FooterScene() {
  const sponsorName = CONFIG.mainSponsor?.name || 'Mr. Y. Satish Kumar & Mrs. Y. Shravani';

  return (
    <footer className="scene scene--footer">
      <div className="scene__stage stage--footer">
        <div className="footer-card">
          {/* Central Little Bappa Photo with centered golden ring */}
          <div className="footer-ganesh-box">
            <div className="footer-ganesh-ring"></div>
            <img 
              src="/assets/ganesh_closing.jpg" 
              alt="Little Bappa Ganesha" 
              className="footer-ganesh-img" 
            />
          </div>

          <div className="footer-banner">
            <p className="footer-mantra">॥ श्री गणेशाय नमः ॥</p>
            <h2 className="footer-title">🌸 ALL ARE CORDIALLY INVITED 🌸</h2>
            <p className="footer-marathi">सर्व भाविकांचे सस्नेह आणि हार्दिक निमंत्रण!</p>
            
            <div className="footer-divider">
              <span>🌺</span><span>✨</span><span>🌺</span>
            </div>

            <p className="footer-slogan">॥ गणपती बाप्पा मोरया, मंगलमूर्ती मोरया ॥</p>

            <div className="footer-hosts">
              <p className="footer-host-label">Event Organizers / प्रायोजक</p>
              <p className="footer-org">{CONFIG.associationName || 'M R ACADEMY'}</p>
              
            </div>

            <p className="footer-copyright">Ganeshotsav 2026 · Join us for Darshan &amp; Evening Aarti</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
