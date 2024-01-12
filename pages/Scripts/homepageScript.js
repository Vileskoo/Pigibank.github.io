// Scripts/homepageScript.js

function openConfirmation() {
  var url = 'payConfirmation.html';
  
  // Šírka a výška okna
  var width = Math.min(600, window.innerWidth - 20); 
  var height = Math.min(300, window.innerHeight - 20); 
  
  // Výpočet pozície tak, aby bolo okno umiestnené v strede obrazovky
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  
  var options = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes,resizable=yes';

  window.open(url, 'Popup', options);
}

function openSendPayment() {
  var url = 'sendPayment.html';
  
  // Šírka a výška okna
  var width = Math.min(600, window.innerWidth - 20); 
  var height = Math.min(400, window.innerHeight - 20); 
  
  // Výpočet pozície tak, aby bolo okno umiestnené v strede obrazovky
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  
  var options = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes,resizable=yes';

  window.open(url, 'Popup', options);
}

function openReceivedPayment() {
  var url = 'receivePayment.html';
  
  // Šírka a výška okna
  var width = Math.min(600, window.innerWidth - 20); 
  var height = Math.min(400, window.innerHeight - 20); 
  
  // Výpočet pozície tak, aby bolo okno umiestnené v strede obrazovky
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  
  var options = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ',scrollbars=yes,resizable=yes';

  window.open(url, 'Popup', options);
}

async function changeContent(page) {
  // Získajte elementy navigácie
  const navItems = document.querySelectorAll('.nav-item');

  // Zrušte označenie aktívnej položky na všetkých položkách
  navItems.forEach(item => item.classList.remove('active'));

  // Získajte element obsahu
  const content = document.getElementById('content');

  // Skontrolujte, či bola návratová hodnota getElementById nenulová
  const pageElement = document.getElementById(page);
  if (pageElement) {
    // Označte aktívnu položku
    pageElement.classList.add('active');
  } else {
    console.error(`Element s id '${page}' nebol nájdený.`);
    return;
  }

  try {
    // Načítajte obsah zo súboru
    const response = await fetch(`${page}.html`);
    const htmlContent = await response.text();

    // Zmeňte obsah na načítaný HTML
    content.innerHTML = htmlContent;
  } catch (error) {
    console.error('Chyba pri načítavaní obsahu:', error);
    // Ak nastane chyba, zobrazte všeobecný obsah
    content.innerHTML = '<h1>Vitajte na stránke Domov</h1><p>Tu nájdete informácie o Pigi Banke.</p>';
  }
}

// Funkcia na otvorenie pop-up okna
function openPopup() {
  document.getElementById('popup').style.display = 'block';
  // Pridať udalosť na celú stránku na zatvorenie pop-up okna
  document.addEventListener('click', closePopupOutside);
}

function closePopupOutside(event) {
  var popup = document.getElementById('popup');
  if (!popup.contains(event.target)) {
      closePopup();
  }
}