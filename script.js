document.getElementById('year').textContent = new Date().getFullYear();

const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const time = document.getElementById('time').value.trim();

    let message = `வணக்கம், நான் ${name}. இலவச Body Composition Analysis பதிவு செய்ய விரும்புகிறேன். என் தொலைபேசி எண்: ${phone}.`;
    if (time) {
      message += ` விருப்பமான நேரம்: ${time}.`;
    }

    const url = `https://wa.me/919840538821?text=${encodeURIComponent(message)}`;
    if (typeof fbq === 'function') {
      fbq('track', 'Lead', { content_name: 'Free Body Composition Analysis' });
    }
    window.open(url, '_blank', 'noopener');
  });
}

// Track WhatsApp / call clicks as Contact events
document.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me/"]').forEach(function (el) {
  el.addEventListener('click', function () {
    if (typeof fbq === 'function') {
      fbq('track', 'Contact');
    }
  });
});
