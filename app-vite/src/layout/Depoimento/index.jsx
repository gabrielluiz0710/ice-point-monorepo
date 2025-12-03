import React, { useEffect } from 'react';

function Depoimentos() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="depoimentos" className="coments" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="content">
        <div id="comentarios">
          <div className="elfsight-app-867828a4-f57a-427b-bdce-4dc954f47e0a" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
