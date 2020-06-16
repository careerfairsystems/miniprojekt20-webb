import React from 'react';

function Logo() {
  const url = 'https://www.arkadtlth.se/wp-content/uploads/2020/03/Kopia-av-ARKAD_Bla%CC%8A_a%CC%8Arsneutral-01-1-e1584223944979-1024x990.png';

  return (
    <div className="Logo">
      <img src={url} style={{ width: 650 }} alt='ARKAD TEST INTERNAL WEBSITE' />
    </div>
  );
}

export default Logo;
