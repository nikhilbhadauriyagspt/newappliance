import React, { useEffect } from 'react';
import './BookAppointment.css';
import { Helmet } from 'react-helmet-async';
import { useSettings } from '../../context/SettingsContext';
import { FaPhoneAlt } from 'react-icons/fa';

const BookAppointmentPage = () => {
    const settings = useSettings();
    useEffect(() => {
        // Dynamically load Bootstrap
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
        link.id = 'bootstrap-css';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        script.id = 'bootstrap-js';
        document.body.appendChild(script);

        return () => {
            const existingLink = document.getElementById('bootstrap-css');
            const existingScript = document.getElementById('bootstrap-js');
            if (existingLink) existingLink.remove();
            if (existingScript) existingScript.remove();
        };
    }, []);

    return (
        <div className="book-appointment-wrapper">
            <Helmet>
                <title>Appliance Repair - Book Appointment</title>
            </Helmet>

            <header id="header" className="header fixed-top">
                <div className="branding d-flex align-items-center">
                    <div className="container position-relative d-flex align-items-center justify-content-between">
                        <a href="/" className="logo d-flex align-items-center">
                            <h1 className="sitename">Customer Support</h1>
                        </a>
                        <nav id="navmenu" className="navmenu">
                            <div className="d-flex align-items-center gap-3 text-start">
                                {/* Phone Block */}
                                <a href={`tel:${settings.contact_phone || "+14028485586"}`} className="d-flex align-items-center gap-3 text-decoration-none" style={{ cursor: 'pointer' }}>
                                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{ width: '45px', height: '45px', backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff' }}>
                                        <FaPhoneAlt size={18} />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="fw-bold text-uppercase" style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.2' }}>Call Anytime</span>
                                        <span className="fw-bold text-nowrap" style={{ fontSize: '20px', color: '#ffffff', lineHeight: '1.2' }}>{settings.contact_phone || "+1-402-508-9991"}</span>
                                    </div>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <section className="sl-main-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-xl-6">
                            <div className="sl-sectionHead text-center">
                                <div className="sl-sectionHead__title sl-below-line sl-below-line__active">
                                    <h3>Get help with your tech problems.</h3>
                                </div>
                                <div className="sl-sectionHead__description">
                                    <p style={{ fontSize: '13px' }}>Support Plans include Protection, Total Appliance Repair, 24 x 7 Support. By continuing, you agree to the following terms: Conditions of Use | Privacy | CA Privacy</p>
                                </div>

                                <h2 style={{ textAlign: 'center', paddingTop: '32px', fontWeight: '600' }}>We Care To Serve Best As We Can</h2>

                                <div className="sl-aboutuscontent__btns" style={{ marginTop: '8%' }}>
                                    <button onClick={() => window.jivo_api && window.jivo_api.open()} className="btn sl-btn" style={{ background: '#ffc008', fontSize: '20px', padding: '.5rem 2rem' }}>Chat Now</button>
                                </div>
                                <img src="/tvreapir/process.png" alt="How we work" style={{ paddingTop: '48px', maxWidth: '600px' }} />
                                <p style={{ fontSize: '10px', paddingTop: '32px' }}>Our Platform is an independent third-party, IT service provider for software-related problems. Unless stated, we are not affiliated with any company, organization, manufacturer, ISP, or email provider. Our services have helped thousands of people with their computer problems. These services may also be available by the brand owner.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-xl-6">
                            <img src="/tvreapir/hero-img.png" className="img-fluid border-set-radius w-100"
                                alt="ask expert" style={{ position: 'relative', top: '4rem' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookAppointmentPage;