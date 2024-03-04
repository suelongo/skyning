 // Obtén la selección de la URL
 const urlParams = new URLSearchParams(window.location.search);
 const seleccion = urlParams.get('seleccion');

 // Configura el contenido basado en la selección
 const paginaMuestra = document.getElementById('paginaMuestra');
 const imagenMuestra = document.getElementById('imagenMuestra');
 const infoMuestra = document.getElementById('infoMuestra');

 if (seleccion === 'historia') {
     titulo_principal.textContent='HISTORIA DEL PERU';
     imagenMuestra3.src = 'https://images.unsplash.com/photo-1640549768697-6e9483127244?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra4.src = 'https://images.unsplash.com/photo-1547046647-29e56de21842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra5.src = 'https://images.unsplash.com/photo-1687835073280-fd0f002062d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     subtitulo1.textContent='Sacsayhuamán';
     subtitulo2.textContent='Machu Pichu';
     subtitulo3.textContent='Huaca Pucllana';
     parrafo1.textContent='conocido por sus enormes bloques de piedra perfectamente ensamblados. Fue una fortaleza inca que desempeñó un papel fundamental en la defensa de la ciudad de Cusco.';
     parrafo2.textContent=' es una antigua ciudad inca en Perú, famosa por su arquitectura impresionante y su ubicación en las montañas de los Andes';
     parrafo3.textContent='es un sitio arqueológico en Lima, Perú, que data de la cultura Lima y Wari. Destaca por su pirámide de adobe y su importancia histórica en la región.';
     infoMuestra.textContent = 'Perú es una nación rica en historia y patrimonio cultural que se remonta a las antiguas civilizaciones preincaicas. Su legado abarca desde las enigmáticas líneas de Nazca hasta las majestuosas construcciones incas. Entre los tesoros más emblemáticos se encuentra Machu Picchu, la ciudadela inca perdida en las alturas de los Andes, que aún hoy maravilla al mundo con su arquitectura y misterio. La fortaleza de Sacsayhuamán, en las afueras de Cuzco, es otro testimonio asombroso de la destreza de los incas en la construcción de monumentos imponentes. Por otro lado, Huaca Pucllana, en Lima, representa la grandeza de la cultura Lima, destacándose por su arquitectura piramidal en medio de la moderna metrópolis. Estos lugares son solo algunas de las maravillas que componen la rica historia peruana, un viaje a través del tiempo que nos conecta con las civilizaciones que forjaron la identidad de esta hermosa nación sudamericana.'; // Coloca aquí la información de historia
     
     document.title = 'Historia de Perú - Página de Muestra';
 } else if (seleccion === 'gastronomia') {
     titulo_principal.textContent='GASTRONOMIA DEL PERU';
     imagenMuestra3.src = 'https://images.unsplash.com/photo-1465512861810-7dd31b34ed98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra4.src = 'https://images.unsplash.com/photo-1535400255456-984241443b29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra5.src = 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     subtitulo1.textContent='Mercado San Pedro';
     subtitulo2.textContent='Chifa';
     subtitulo3.textContent='Ceviche';
     parrafo1.textContent=' es un vibrante mercado tradicional ubicado en Cusco. Ofrece una variedad de productos locales, desde alimentos frescos hasta artesanías.';
     parrafo2.textContent='El chifa peruano es un plato que fusiona la cocina china y peruana, combinando arroz, carne y vegetales con sabrosas salsas.';
     parrafo3.textContent='pescado o mariscos crudos marinados en jugo de limón con cebolla y ají.';
     infoMuestra.textContent = 'La gastronomía peruana es un verdadero tesoro culinario que combina una diversidad de influencias y sabores en un mosaico de delicias. Uno de los platos más icónicos es el ceviche, una fresca preparación a base de pescado crudo o mariscos, marinados en jugo de limón y mezclados con cebolla, ají, cilantro y maíz. Este plato es un verdadero homenaje al mar y es ampliamente considerado como uno de los mejores ceviches del mundo. Otra delicia peruana es el lomo saltado, que refleja la influencia de la inmigración china en la cocina peruana. Este plato combina tiras de carne de res, cebolla, tomate y ají, saltados en un wok a fuego alto y servidos sobre papas fritas. La mezcla de sabores y texturas lo convierte en un manjar irresistible. Los mercados locales son fundamentales en la experiencia culinaria peruana. Lugares como el Mercado de San Pedro en Cuzco o el Mercado de Surquillo en Lima ofrecen una inmersión en la riqueza de los ingredientes peruanos. Aquí, se pueden encontrar productos autóctonos como papas nativas de diversos colores y formas, granos, hierbas y especias que son esenciales en la cocina peruana.';
    
     document.title = 'Gastronomía de Perú - Página de Muestra';
 } else if (seleccion === 'conoce') {
     titulo_principal.textContent='CULTURA DEL PERU';
     imagenMuestra3.src = 'https://images.unsplash.com/photo-1553550765-41e7dff2bd41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra4.src = 'https://images.unsplash.com/photo-1545206085-d0e519bdcecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
     imagenMuestra5.src = 'https://images.unsplash.com/photo-1524876564579-55d0eeeb00f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80';
     subtitulo1.textContent='Lago Titicaca';
     subtitulo2.textContent='Prendas Coloridas';
     subtitulo3.textContent='Vestimenta Tradicional';
     parrafo1.textContent='es el lago navegable más alto del mundo y se encuentra en la frontera entre Perú y Bolivia. lo';
     parrafo2.textContent=' suelen estar hechos a mano con lana de alpaca o de oveja y presentan diseños geométricos, símbolos culturales y colores vibrantes.';
     parrafo3.textContent=' es común ver a las mujeres lucir faldas llamadas "polleras" y mantas tejidas, mientras que los hombres suelen llevar sombreros y ponchos.';
     infoMuestra.textContent = 'Las tradiciones peruanas reflejan la rica herencia cultural de los incas y otras civilizaciones ancestrales que han dejado una profunda huella en la sociedad peruana. En cuanto a las vestimentas, la influencia inca se refleja en la ropa tradicional de muchas comunidades andinas. Uno de los elementos más emblemáticos es el "poncho", que es una prenda tejida a mano con diseños coloridos y simbólicos que varían según la región. Además, las "polleras" (faldas) son comunes en la vestimenta de las mujeres andinas, y también son adornadas con patrones tradicionales y colores vivos. En algunas áreas, los hombres usan "chullos", que son gorros tejidos que protegen del frío.'; // Coloca aquí la información de cultura
     document.title = 'Cultura de Perú - Página de Muestra';
 }else if (seleccion === 'experiencias') {
     titulo_principal.textContent='Vive Experiencias Unicas';
     imagenMuestra3.src = 'https://images.unsplash.com/photo-1611874498806-28f836f9f1ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra4.src = 'https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra5.src = 'https://images.unsplash.com/photo-1629664579483-d63b9ec3d66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     subtitulo1.textContent='Ciclismo en Lima';
     subtitulo2.textContent='Senderismo En las Alturas';
     subtitulo3.textContent='Racer Sobre el Desierto';
     parrafo1.textContent='Lima es una de la ciudaddes donde mas se practica el ciclimos en toda Latinoamerica';
     parrafo2.textContent='Conoce Rutas de senderismo sobre los grandes ALPES del peru';
     parrafo3.textContent='Peru Ofrece grandes Desiertos donde puedes tener grandes aventuras sobre la arena desertica';
     infoMuestra.textContent = 'Ciclismo en el desierto y senderismo en los Alpes son emocionantes aventuras al aire libre en entornos desafiantes y hermosos. Prepárate para explorar el desierto en bicicleta, enfrentando altas temperaturas y terrenos variados, o para caminar entre prados y montañas en los Alpes, siempre listo para cambios climáticos. Ambas actividades ofrecen experiencias únicas en la naturaleza.'; // Coloca aquí la información de cultura
     document.title = 'Cultura de Perú - Página de Muestra';
 }else if (seleccion === 'tradiciones') {
     titulo_principal.textContent='Tradiciones Unicas';
     imagenMuestra3.src = 'https://images.unsplash.com/photo-1561503152-fda6a4423b86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50aSUyMHJheW1pfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60';
     imagenMuestra4.src = 'https://images.unsplash.com/photo-1538720079720-f805a65cdf02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
     imagenMuestra5.src = 'https://images.unsplash.com/photo-1533604656744-7fdcb88b6ec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     subtitulo1.textContent='Inti Raymi';
     subtitulo2.textContent='Dia de la Independencia';
     subtitulo3.textContent='El Señor de los Milagros';
     parrafo1.textContent=' es una antigua ceremonia incaica que celebra el solsticio de invierno y el culto al dios sol, Inti. Se lleva a cabo en Cusco';
     parrafo2.textContent='Celebrado el 28 de julio, el Día de la Independencia de Perú es una festividad nacional que conmemora la independencia del país de la dominación española. ';
     parrafo3.textContent='Esta es una devoción religiosa muy importante en Perú, que honra a un Cristo crucificado pintado en un muro en Lima. ';
     infoMuestra.textContent = ' En Perú, destacan el Inti Raymi, una ancestral ceremonia incaica celebrada en Cusco durante el solsticio de invierno, el Día de la Independencia el 28 de julio, y la devoción al Señor de los Milagros con sus multitudinarias procesiones en octubre. Estas tradiciones culturales reflejan la diversidad y el arraigo de la herencia peruana.'; // Coloca aquí la información de cultura
     document.title = 'tradiciones';
 }else if (seleccion === 'disfruta') {
     titulo_principal.textContent='Disfruta la Peru';
     imagenMuestra3.src = 'https://images.unsplash.com/photo-1672040649586-b8bfe9ea4c80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra4.src = 'https://images.unsplash.com/photo-1658839764853-3669b1d18b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
     imagenMuestra5.src = 'https://images.unsplash.com/photo-1589553666697-7243df84b113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
     subtitulo1.textContent='Arequipa';
     subtitulo2.textContent='Cusco';
     subtitulo3.textContent='Lima';
     parrafo1.textContent='Una de las 3 ciudades mas grandes de peru, donde encontraras Gente calida y amigable';
     parrafo2.textContent='Una cidad colonial, donde encontraras las mayores riquesas culturales que peru te puede ofrecer';
     parrafo3.textContent='La ciudad por excelencia del Peru, Su gran Cosmopolitan, comida, fiesta, aventuras.';
     infoMuestra.textContent = 'Conoce Lima, la bulliciosa capital de Perú, donde la historia colonial se entrelaza con la modernidad en una mezcla fascinante. Explora Arequipa, la "Ciudad Blanca", famosa por su arquitectura de sillar y su proximidad al impresionante cañón del Colca. Y no te pierdas Cusco, la antigua capital del Imperio Inca, donde las calles empedradas te llevan a descubrir su rica herencia cultural y te sirve como punto de partida para visitar la enigmática ciudadela de Machu Picchu. Estas tres ciudades te brindarán una visión única de la diversidad y el patrimonio de Perú.'; // Coloca aquí la información de cultura
     document.title = 'Cidades - Página de Muestra';
 } else {
     // Si la selección no es válida, puedes mostrar un mensaje de error o redirigir a otra página.
     // Por ejemplo:
     window.location.href = 'error.html';
 }
