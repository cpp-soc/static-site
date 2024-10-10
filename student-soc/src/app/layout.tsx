import React from 'react';
import Footer from '@/components/Footer';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-black text-white p-4">
        <h1 className="text-2xl font-bold">Student Security Operations Center (SOC) @ Cal Poly Pomona</h1>
        <link rel="icon" href="/favicon.ico" />
      </header>
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;