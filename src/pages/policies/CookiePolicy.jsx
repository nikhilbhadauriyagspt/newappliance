import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>Cookie Policy - Appliance Vista</title>
        <meta name="description" content="Cookie Policy for Appliance Vista." />
        <link rel="canonical" href="https://www.appliancevista.shop/cookie-policy" />
      </Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <div className="prose prose-lg text-gray-600">
          <p>Last updated: February 2026</p>
          <p>This Cookie Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.</p>
          
          <h3>What are cookies</h3>
          <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

          <h3>How Appliance Vista uses cookies</h3>
          <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to store your preferences, to enable advertisements delivery, including behavioral advertising.</p>

          <h3>Third-party cookies</h3>
          <p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.</p>

          <h3>What are your choices regarding cookies</h3>
          <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.</p>
          <p>Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
