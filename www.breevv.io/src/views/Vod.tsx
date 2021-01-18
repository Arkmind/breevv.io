import React from 'react';

import VodHeader from './Vod/Header/Header';
import VodHighlight from './Vod/Highlight/Highlight';
import VodNavbar from './Vod/Navbar/Navbar';

function Vod() {
  return (
    <div>
        <div>
            <VodNavbar></VodNavbar>
            <VodHeader></VodHeader>
        </div>
        <div style={{ marginTop: -120 }}>
            <VodHighlight number="5"></VodHighlight>
            <VodHighlight number="5" direction="row"></VodHighlight>
        </div>
    </div>
  );
}

export default Vod;
