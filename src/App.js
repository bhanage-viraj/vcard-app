import React from 'react';
import './App.css';
import {
  Phone,
  MessageCircle,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Building,
  Download,
  Star
} from 'lucide-react';

// Import your images
import bannerImg from './banner.jpeg'; 
import profileImg from './photo.jpeg';

// Main App Component
export default function App() {
  // vCard Data
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Bhanage;Vaibhav;S;
FN:Vaibhav S Bhanage (MMS)
ORG:MONEY VISION SERVICES
TITLE:Financial, Insurance & Corporate Risk Advisor
TEL;TYPE=CELL,VOICE;PREF=1:9420691840
TEL;TYPE=WORK,VOICE:9823280440
ADR;TYPE=WORK:;;Shop No. 20, ज्ञानदा सो. Trimurti Chowk to Symbosis Road;New Nashik;;422008;
URL;TYPE=Website:https://www.vaibhavbhanagemvs.in
URL;TYPE=Instagram:https://www.instagram.com/vaibhavbhanagelic
URL;TYPE=Facebook:https://www.facebook.com/share/1AE7vrwcxh/
URL;TYPE=LinkedIn:https://www.linkedin.com/in/vaibhav-s-bhanage-2a8967242/
END:VCARD`;

  // Event Handlers
  const handleSaveContact = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'VaibhavBhanage.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getMapsUrl = (address) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  const address = "Shop No. 20, ज्ञानदा सो. Trimurti Chowk to Symbosis Road, New Nashik 422008";

  return (
    <div className="vcard-container">
      <div className="vcard">
        
        {/* Header Section */}
        <div className="vcard-header">
          <img src={bannerImg} alt="Money Vision Services Banner" />
        </div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-avatar">
            <img src={profileImg} alt="Vaibhav S Bhanage" />
          </div>
          
          <div className="profile-name">Vaibhav S Bhanage</div>
          <div className="profile-degree">(MMS)</div>
          
          <div className="profile-title">
            <Star size={18} />
            Financial, Insurance & Corporate Risk Advisor
          </div>
        </div>

        {/* Company Info */}
        <div className="company-info">
          <div className="company-title">
            <Building size={20} />
            MONEY VISION SERVICES
          </div>
          <div className="company-since">(Office Since 1997)</div>
        </div>

        {/* Address Section */}
        <div className="address-section">
          <a
            href={getMapsUrl(address)}
            target="_blank"
            rel="noopener noreferrer"
            className="address-link"
          >
            <MapPin size={20} style={{ color: '#dc3545', flexShrink: 0, marginTop: '2px' }} />
            <div className="address-text">
              <div className="address-label">Visit Our Office</div>
              <div>{address}</div>
            </div>
          </a>
        </div>

        {/* Contact Buttons Grid */}
        <div className="contact-grid">
          <a
            href="tel:9420691840"
            className="contact-btn btn-call"
          >
            <Phone size={24} />
            Call
          </a>
          
          <a
            href="https://wa.me/919823280440"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn-whatsapp"
          >
            <MessageCircle size={24} />
            WhatsApp
          </a>
          
          <a
            href="https://www.vaibhavbhanagemvs.in"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn-website"
          >
            <Globe size={24} />
            Website
          </a>
          
          <a
            href="https://www.instagram.com/vaibhavbhanagelic"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn-instagram"
          >
            <Instagram size={24} />
            Instagram
          </a>
          
          <a
            href="https://www.facebook.com/share/1AE7vrwcxh/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn-facebook"
          >
            <Facebook size={24} />
            Facebook
          </a>
          
          <a
            href="https://www.linkedin.com/in/vaibhav-s-bhanage-2a8967242/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn btn-linkedin"
          >
            <Linkedin size={24} />
            LinkedIn
          </a>
        </div>
        
        {/* Save Contact Button */}
        <div className="save-contact-section">
          <button onClick={handleSaveContact} className="save-contact-btn">
            <Download size={20} />
            Save Contact
          </button>
        </div>
        
      </div>
    </div>
  );
}
