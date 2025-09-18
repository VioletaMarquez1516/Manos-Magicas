const contentData = {
  quienes: {
    title: 'Quiénes Somos',
    text: `
      <div class='gallery'>
  <img src='https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=350&q=80' alt='Artesana trabajando' class='cover-img'>
  <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=350&q=80' alt='Taller de madera artesanal' class='cover-img'>
  <img src='https://images.unsplash.com/photo-1522312346377-d1a52e2b99b3?auto=format&fit=crop&w=350&q=80' alt='Joyas artesanales' class='cover-img'>
  <img src='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=350&q=80' alt='Textil artesanal' class='cover-img'>
      </div>
      <br>Manos Mágicas: Arte con Propósito.<br>
      Creemos en el poder de la artesanía para generar un cambio social. Nuestra solución es un taller de productos artesanales de alta calidad como textiles, joyas y artículos de decoración. Ofrecemos capacitación en oficios, empleo digno y acompañamiento social y emocional.<br>
      <span class='braille'>⠍⠁⠝⠕⠎ ⠍⠁⠛⠊⠉⠁⠎</span>
      <button class='card-btn' onclick="readAloud('Manos Mágicas: Arte con Propósito. Creemos en el poder de la artesanía para generar un cambio social. Nuestra solución es un taller de productos artesanales de alta calidad como textiles, joyas y artículos de decoración. Ofrecemos capacitación en oficios, empleo digno y acompañamiento social y emocional.')">🔊 Escuchar sección</button>
    `
  },
  promesa: {
    title: 'Promesa de Valor',
    text: 'Empoderamos a mujeres en situación de vulnerabilidad y ofrecemos a los clientes productos únicos con una historia de impacto social, transformando la compra en un acto de bien común.'
  },
  productos: {
    title: 'Nuestros Productos',
    text: `
      Valor y Calidad Artesanal.<br>
      <div class='gallery'>
  <img src='https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80' alt='Joyería artesanal'>
  <img src='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80' alt='Textil artesanal'>
  <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80' alt='Madera artesanal'>
  <img src='https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=300&q=80' alt='Cerámica artesanal'>
  <img src='https://images.unsplash.com/photo-1522312346377-d1a52e2b99b3?auto=format&fit=crop&w=300&q=80' alt='Joyas hechas a mano'>
  <img src='https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300&q=80' alt='Decoración artesanal moderna'>
      </div>
      Nuestra tienda en línea y tiendas pop-up permiten la compra directa. Para empresas, ofrecemos regalos corporativos y servicios de decoración con impacto social.<br>
      <span class='braille'>⠏⠗⠕⠙⠥⠉⠞⠕⠎</span>
      <button class='card-btn' onclick="readAloud('Valor y Calidad Artesanal. Nuestra tienda en línea y tiendas pop-up permiten la compra directa. Para empresas, ofrecemos regalos corporativos y servicios de decoración con impacto social.')">🔊 Escuchar sección</button>
    `
  },
  impacto: {
    title: 'Impacto Social y Transparencia',
    text: `Convierte tu Compra en un Acto de Bien Común.<br>Para nosotros, el éxito se mide por el impacto positivo en la comunidad. Nuestro grupo objetivo de clientes son consumidores conscientes, con un nivel de ingreso medio a alto, que valoran la calidad, la originalidad y el diseño ético.<br><br><b>Campaña de Historias:</b><br>En nuestra página web y redes sociales, publicamos videos cortos y testimonios de las artesanas, contando cómo el trabajo ha impactado sus vidas. Esto convierte al cliente en un “agente de cambio”.<br><br>Cada producto incluye una etiqueta con un código QR que redirige al cliente a una página con la biografía de la artesana, un video de su proceso de trabajo y el impacto del proyecto, generando confianza y valor añadido.<br><br><b>Medición del Impacto:</b><br><ul><li><b>Impacto Económico:</b> Medimos el número de empleos dignos creados y el ingreso promedio de nuestras artesanas.</li><li><b>Impacto Social y Personal:</b> Monitoreamos las horas de capacitación ofrecidas y la autoestima y bienestar de nuestras artesanas a través de encuestas.</li></ul>`
  },
  talleres: {
    title: 'Experiencias y Talleres',
    text: `Únete a la Magia.<br>Ofrecemos talleres pagados al público donde puedes aprender una habilidad y conocer de primera mano el trabajo de nuestras artesanas. Estos talleres no solo son una fuente de ingresos adicional, sino que también sirven como una poderosa herramienta de marketing que crea una conexión emocional con la marca.<br><br><b>"Artesano por un Día":</b><br>En estos talleres de fin de semana, los clientes pueden aprender a tejer, coser o crear una pieza, guiados por las propias artesanas. Esta experiencia crea un vínculo personal, aumenta la apreciación por el trabajo manual y refuerza la misión de la marca.`
  },
    bolsa: {
      title: 'Bolsa de Trabajo para Mujeres Artesanas',
      text: `<div class='card' style='background:#fff;border-radius:16px;box-shadow:0 2px 12px rgba(106,27,154,0.10);padding:32px;margin:16px auto;max-width:600px;'><div style='font-size:1.3rem;color:#6A1B9A;font-weight:700;margin-bottom:12px;'>Bolsa de Trabajo para Mujeres Artesanas</div><b>Oficios disponibles:</b><br><ul style='text-align:left;max-width:500px;margin:0 auto 18px auto;'><li><b>Tejedora de textiles:</b> Elabora tapices, mantas y prendas tradicionales con técnicas ancestrales.</li><li><b>Joyería artesanal:</b> Collares, pulseras y aretes con materiales naturales y diseños originales.</li><li><b>Ceramista:</b> Vajillas, figuras y decoraciones pintadas a mano.</li><li><b>Bordadora:</b> Textiles y prendas decoradas con hilos de colores y motivos culturales.</li></ul><b>Importancia de la artesanía en México:</b><br><span style='color:#333;'>La artesanía mexicana es patrimonio cultural y fuente de identidad. Genera empleo, impulsa la economía local y promueve el turismo. Cada producto artesanal es el resultado de años de aprendizaje y dedicación.</span><br><br><b>El papel de la mujer artesana:</b><br><span style='color:#333;'>Las mujeres artesanas son guardianas de tradiciones y motor de desarrollo en sus comunidades. Su creatividad y esfuerzo transforman materiales simples en obras de arte que representan la riqueza de México.</span><br><br><h3 style='color:#6A1B9A;text-align:center;'>Perfiles de Mujeres Artesanas</h3><div class='gallery'>
<div class='card' style='background:#f3e5f5;box-shadow:0 2px 8px rgba(106,27,154,0.10);margin:16px;'>
  <img src='https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80' alt='Perfil artesana' style='width:120px;height:120px;border-radius:50%;object-fit:cover;margin-bottom:12px;'>
  <div class='card-title' style='color:#6A1B9A;font-size:1.2rem;'>María López</div>
  <div class='card-text' style='font-size:1rem;'><b>Especialidad:</b> Joyería artesanal<br><b>Ubicación:</b> Oaxaca, México<br><b>Contacto:</b> maria.lopez@email.com<br><b>Descripción:</b> Collares y pulseras con técnicas tradicionales y materiales naturales. Cada pieza refleja la cultura y el arte de mi región.</div>
</div>
<div class='card' style='background:#f3e5f5;box-shadow:0 2px 8px rgba(106,27,154,0.10);margin:16px;'>
  <img src='https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80' alt='Perfil artesana' style='width:120px;height:120px;border-radius:50%;object-fit:cover;margin-bottom:12px;'>
  <div class='card-title' style='color:#6A1B9A;font-size:1.2rem;'>Juana Pérez</div>
  <div class='card-text' style='font-size:1rem;'><b>Especialidad:</b> Textil y bordado<br><b>Ubicación:</b> Chiapas, México<br><b>Contacto:</b> juana.perez@email.com<br><b>Descripción:</b> Tapices y prendas bordadas con motivos culturales y técnicas ancestrales.</div>
</div>
<div class='card' style='background:#f3e5f5;box-shadow:0 2px 8px rgba(106,27,154,0.10);margin:16px;'>
  <img src='https://images.unsplash.com/photo-1508214751196-bc2207b7a61a?auto=format&fit=crop&w=200&q=80' alt='Perfil artesana Carmen Ruiz' style='width:120px;height:120px;border-radius:50%;object-fit:cover;margin-bottom:12px;'>
  <div class='card-title' style='color:#6A1B9A;font-size:1.2rem;'>Carmen Ruiz</div>
  <div class='card-text' style='font-size:1rem;'><b>Especialidad:</b> Cerámica y madera<br><b>Ubicación:</b> Puebla, México<br><b>Contacto:</b> carmen.ruiz@email.com<br><b>Descripción:</b> Vasijas, figuras y decoraciones pintadas a mano, además de trabajos en madera tallada.</div>
</div>
</div><br><form class='contact-form' autocomplete='on' style='max-width:500px;margin:32px auto 0 auto;text-align:left;'><h3 style='color:#6A1B9A;text-align:center;'>Aplica a una oportunidad laboral</h3><label for='nombre'>Nombre completo:</label><br><input type='text' id='nombre' name='nombre' required style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'><label for='oficio'>Oficio de interés:</label><br><select id='oficio' name='oficio' required style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'><option value=''>Selecciona...</option><option value='Tejedora'>Tejedora de textiles</option><option value='Joyería'>Joyería artesanal</option><option value='Ceramista'>Ceramista</option><option value='Bordadora'>Bordadora</option></select><label for='email'>Correo electrónico:</label><br><input type='email' id='email' name='email' required style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'><label for='mensaje'>Mensaje o experiencia:</label><br><textarea id='mensaje' name='mensaje' rows='3' style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'></textarea><button type='submit' class='card-btn' style='margin-top:8px;'>Enviar solicitud</button></form></div>`
    },
    oferta: {
      title: 'Ofrece tus Servicios',
      text: `¿Eres artesana y quieres que te contacten para ofrecer tus productos o servicios?<br><br>Completa tu perfil y aparecerás en nuestra bolsa de trabajo para que empresas, tiendas y clientes puedan encontrarte.<br><br><form class='contact-form' autocomplete='on' style='max-width:500px;margin:32px auto 0 auto;text-align:left;'><h3 style='color:#6A1B9A;text-align:center;'>Registra tu perfil de artesana</h3><label for='nombre2'>Nombre completo:</label><br><input type='text' id='nombre2' name='nombre2' required style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'><label for='edad'>Edad:</label><br><input type='number' id='edad' name='edad' min='18' max='99' required style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'><label for='especialidad'>Especialidad:</label><br><input type='text' id='especialidad' name='especialidad' required style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'><label for='ubicacion'>Ubicación:</label><br><input type='text' id='ubicacion' name='ubicacion' required style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'><label for='contacto'>Correo o teléfono:</label><br><input type='text' id='contacto' name='contacto' required style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'><label for='descripcion'>Descripción de tu trabajo:</label><br><textarea id='descripcion' name='descripcion' rows='3' style='width:100%;padding:8px;margin-bottom:12px;border-radius:8px;border:1px solid #ccc;'></textarea><button type='submit' class='card-btn' style='margin-top:8px;'>Publicar perfil</button></form><br><b>¿Buscas artesanas?</b> Explora los perfiles publicados y contacta directamente para comprar productos o contratar servicios.<br><br><div class='card' style='background:#f3e5f5;box-shadow:0 2px 8px rgba(106,27,154,0.10);margin-top:24px;'><img src='https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80' alt='Perfil muestra artesana' style='width:120px;height:120px;border-radius:50%;object-fit:cover;margin-bottom:12px;'><div class='card-title' style='color:#6A1B9A;font-size:1.3rem;'>María López</div><div class='card-text' style='font-size:1rem;'><b>Especialidad:</b> Joyería artesanal<br><b>Ubicación:</b> Oaxaca, México<br><b>Contacto:</b> maria.lopez@email.com<br><b>Descripción:</b> Creo collares y pulseras con técnicas tradicionales y materiales naturales. Cada pieza refleja la cultura y el arte de mi región. ¡Contáctame para pedidos personalizados!</div><div style='margin-top:18px;'><h4 style='color:#6A1B9A;font-size:1.1rem;margin-bottom:8px;'>Trabajos realizados</h4><div class='gallery'><div style='text-align:center;'><img src='https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=200&q=80' alt='Collar artesanal' style='width:100px;height:100px;border-radius:12px;object-fit:cover;box-shadow:0 2px 8px rgba(106,27,154,0.10);'><div style='font-size:0.95rem;margin-top:6px;'>Collar de cuentas naturales<br><span style='color:#333;'>Inspirado en la flora de Oaxaca</span></div></div><div style='text-align:center;'><img src='https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80' alt='Pulsera artesanal' style='width:100px;height:100px;border-radius:12px;object-fit:cover;box-shadow:0 2px 8px rgba(106,27,154,0.10);'><div style='font-size:0.95rem;margin-top:6px;'>Pulsera tejida a mano<br><span style='color:#333;'>Colores tradicionales</span></div></div><div style='text-align:center;'><img src='https://images.unsplash.com/photo-1528747045269-390fe33c19d3?auto=format&fit=crop&w=200&q=80' alt='Aretes artesanales' style='width:100px;height:100px;border-radius:12px;object-fit:cover;box-shadow:0 2px 8px rgba(106,27,154,0.10);'><div style='font-size:0.95rem;margin-top:6px;'>Aretes de filigrana<br><span style='color:#333;'>Hechos con técnica tradicional</span></div></div><div style='text-align:center;'><img src='https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=200&q=80' alt='Trabajo en madera' style='width:100px;height:100px;border-radius:12px;object-fit:cover;box-shadow:0 2px 8px rgba(106,27,154,0.10);'><div style='font-size:0.95rem;margin-top:6px;'>Caja tallada en madera<br><span style='color:#333;'>Artesanía tradicional mexicana</span></div></div><div style='text-align:center;'><img src='https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80' alt='Cerámica artesanal' style='width:100px;height:100px;border-radius:12px;object-fit:cover;box-shadow:0 2px 8px rgba(106,27,154,0.10);'><div style='font-size:0.95rem;margin-top:6px;'>Vasija de cerámica<br><span style='color:#333;'>Hecha y pintada a mano</span></div></div><div style='text-align:center;'><img src='https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80' alt='Bordado artesanal' style='width:100px;height:100px;border-radius:12px;object-fit:cover;box-shadow:0 2px 8px rgba(106,27,154,0.10);'><div style='font-size:0.95rem;margin-top:6px;'>Bordado tradicional<br><span style='color:#333;'>Motivos florales y culturales</span></div></div></div></div></div></div>`
      }
    }

function showContent(key) {
  const data = contentData[key];
  if (!data) return;
  document.getElementById('content').innerHTML = `
    <div class="card" tabindex="0" aria-label="${data.title}">
      <div class="card-title">${data.title}</div>
      <div class="card-text">${data.text}</div>
      <button class="card-btn" onclick="readAloud(document.querySelector('.card-text').innerText)" aria-label="Leer en voz alta" accesskey="l">🔊 Leer en voz alta</button>
    </div>
  `;
}

function readAloud(text) {
  if ('speechSynthesis' in window) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'es-ES';
    utter.rate = 0.95;
    utter.pitch = 1.1;
    window.speechSynthesis.speak(utter);
  } else {
    alert('La función de voz no está disponible en este navegador.');
  }
}


// Mostrar Promesa de Valor al inicio
document.addEventListener('DOMContentLoaded', () => {
  showContent('quienes');
  // Navegación con teclado
  document.addEventListener('keydown', function(e) {
    const navBtns = Array.from(document.querySelectorAll('.nav-btn'));
    const focused = document.activeElement;
    let idx = navBtns.indexOf(focused);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (idx < navBtns.length - 1) navBtns[idx + 1].focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (idx > 0) navBtns[idx - 1].focus();
    }
    if (e.key === 'Enter' && focused.classList.contains('nav-btn')) {
      focused.click();
    }
  });
});
