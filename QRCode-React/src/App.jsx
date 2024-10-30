import { useState } from 'react';
import './App.css'; // Use o caminho relativo
import QRCodeLink from 'qrcode'; // Remover as chaves {} ao importar
import QRCode from 'react-qr-code';


function App() {
  const [link, setLink] = useState('as');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(Link_url) {
    QRCodeLink.toDataURL(Link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  function handleQrCode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value)
  }

  return (
    <div className='container'>

      <QRCode
        value={link}
      />

      <input
        className='input'
        placeholder='Digite a sua senha: '
        value={link}
        onChange={(e) => handleQrCode(e)}
      />

      <a href={qrcodeLink} download={'qrcode.png'}>Baixar QrCode</a>

    </div>
  );
}

export default App;