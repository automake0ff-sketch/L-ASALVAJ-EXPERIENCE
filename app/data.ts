export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  featured: boolean;
  published: boolean;
  imageUrl: string;
  imageAlt: string;
  demoAsset?: boolean;
};
export type Reservation = { id: string; name: string; phone: string; date: string; time: string; guests: string; notes: string; status: "Nueva" | "Vista" | "Archivada" };
export type Settings = { name: string; description: string; phone: string; whatsapp: string; address: string; hours: string; instagram: string };
export type VerificationState = "verificado" | "fuente-external" | "pendiente" | "demo";
export type SourceRecord = { source: string; url: string; checkedAt: string; state: VerificationState };
export type Integration = { id: string; name: string; description: string; status: "Conectada" | "Pendiente de autorización" | "Falta configurar clave" | "Desconectada"; setup: string; publicUrl?: string };
export type GalleryItem = { id: string; title: string; imageUrl: string; alt: string; state: VerificationState; published: boolean };
export type Promotion = { id: string; title: string; body: string; published: boolean; state: VerificationState };
export const demoImage = "/images/restaurant/lasalvaja-interior-demo.png";
export const restaurantImages = {
  facade: "/images/restaurant/lasalvaja-fachada.png",
  bar: "/images/restaurant/lasalvaja-barra-ampliada.png",
  interior: "/images/restaurant/lasalvaja-interior-demo.png"
};
export const dishImages = {
  bravas: "/images/dishes/visual-demo-bravas-close.png",
  nachos: "/images/dishes/visual-demo-nachos-hero.png",
  langostinos: "/images/dishes/visual-demo-langostinos-plato.png",
  serranito: "/images/dishes/visual-demo-serranito.png",
  burger: "/images/dishes/visual-demo-burger.png",
  croquetas: "/images/dishes/visual-demo-croquetas.png",
  postres: "/images/dishes/visual-demo-postres.png",
  huevos: "/images/dishes/visual-demo-huevos-fritos.png",
  legacyNachos: "/images/dishes/visual-demo-nachos.png"
};
export const initialDishes: Dish[] = [
 {id:"bravas",name:"Bravísimas",description:"Patatas bravas con salsa picante y alioli negro.",price:"7,50 €",category:"Para compartir",featured:true,published:true,imageUrl:dishImages.bravas,imageAlt:"Fotografía aportada como visual de demo para patatas con salsa",demoAsset:true},
 {id:"ensaladilla",name:"Ensaladilla de anchoa y atún",description:"Media ración para abrir mesa.",price:"8,00 €",category:"Para compartir",featured:true,published:true,imageUrl:demoImage,imageAlt:"Imagen de plato pendiente de fotografía autorizada; no representa la ensaladilla",demoAsset:true},
 {id:"serranito",name:"Serranito en focaccia",description:"Presa y alioli en pan de focaccia.",price:"9,50 €",category:"Especialidades",featured:true,published:true,imageUrl:dishImages.serranito,imageAlt:"Visual de demo de serranito en focaccia",demoAsset:true},
 {id:"burger",name:"Burguer premium",description:"Ternera, queso, bacón y salsa Asalvajá.",price:"13,50 €",category:"Especialidades",featured:false,published:true,imageUrl:dishImages.burger,imageAlt:"Visual de demo de hamburguesa premium",demoAsset:true},
 {id:"croquetas",name:"Croquetas",description:"Jamón, cola de toro o solomillo al whisky. 6 unidades.",price:"8,20 €",category:"Para compartir",featured:false,published:true,imageUrl:dishImages.croquetas,imageAlt:"Visual de demo de croquetas",demoAsset:true},
 {id:"tallarines",name:"Wok de tallarines",description:"Verduras y lagartito.",price:"9,00 €",category:"Platos",featured:false,published:true,imageUrl:demoImage,imageAlt:"Visual provisional de demostración para wok",demoAsset:true},
 {id:"carrillada",name:"Carrillada a la sevillana",description:"Guisada, con sabor de casa.",price:"8,00 €",category:"Platos",featured:true,published:true,imageUrl:demoImage,imageAlt:"Visual provisional de demostración para carrillada",demoAsset:true},
 {id:"torrija",name:"Torrija",description:"Propuesta dulce mencionada en la oferta pública.",price:"—",category:"Meriendas",featured:true,published:true,imageUrl:dishImages.postres,imageAlt:"Visual de demo de postres para la sección de meriendas",demoAsset:true},
 {id:"cafe",name:"Café y pausa",description:"Café recién hecho y repostería para la tarde.",price:"—",category:"Meriendas",featured:false,published:true,imageUrl:demoImage,imageAlt:"Visual provisional de demostración para café",demoAsset:true}
];
export const initialSettings: Settings = {name:"L’Asalvajá",description:"Tapeo con sabor de siempre y un toque actual, en Sevilla Este.",phone:"602 44 32 39",whatsapp:"https://wa.me/34602443239",address:"Calle Cueva del Agua, 8, Sevilla",hours:"Consulta horarios y disponibilidad por WhatsApp",instagram:"https://www.instagram.com/lasalvaja/"};
export const sourceRegistry: SourceRecord[] = [
 {source:"Web oficial · inicio",url:"https://lasalvaja.es/",checkedAt:"2026-11-27",state:"fuente-external"},
 {source:"Web oficial · contacto",url:"https://lasalvaja.es/contacto/",checkedAt:"2026-11-27",state:"fuente-external"},
 {source:"Web oficial · carta",url:"https://lasalvaja.es/nuestra-carta/",checkedAt:"2026-11-27",state:"fuente-external"},
 {source:"Instagram oficial",url:"https://www.instagram.com/lasalvaja/",checkedAt:"2026-11-27",state:"pendiente"},
 {source:"Google Maps / Places",url:"https://maps.google.com/?q=L%27Asalvaj%C3%A1%2C+Calle+Cueva+del+Agua+8%2C+Sevilla",checkedAt:"2026-11-27",state:"pendiente"}
];
export const initialIntegrations: Integration[] = [
 {id:"places",name:"Google Places",description:"Ficha, ubicación, horarios y reseñas mediante API oficial.",status:"Falta configurar clave",setup:"Requiere GOOGLE_PLACES_API_KEY en servidor y autorización del propietario."},
 {id:"instagram",name:"Instagram / Meta",description:"Perfil y publicaciones mediante Graph API para cuentas profesionales.",status:"Pendiente de autorización",setup:"Requiere app Meta, cuenta profesional y autorización OAuth. Nunca se guardan contraseñas.",publicUrl:initialSettings.instagram},
 {id:"orders",name:"Pedidos externos",description:"Accesos oficiales a Uber Eats y Just Eat.",status:"Conectada",setup:"Enlaces públicos, sin sincronización de pedidos.",publicUrl:"https://www.ubereats.com/"},
 {id:"maps",name:"Google Maps",description:"Cómo llegar y reseña pública.",status:"Conectada",setup:"Enlace público de la ficha; no implica acceso administrativo.",publicUrl:"https://maps.google.com/?q=L%27Asalvaj%C3%A1%2C+Calle+Cueva+del+Agua+8%2C+Sevilla"}
];
export const initialGallery: GalleryItem[] = [
 {id:"interior-demo",title:"Interior y barra",imageUrl:"/images/restaurant/lasalvaja-interior-demo.png",alt:"Interior y barra aportados como recurso visual de demo",state:"demo",published:true},
 {id:"huevos-demo",title:"Plato visual de demo",imageUrl:dishImages.huevos,alt:"Fotografía aportada como visual gastronómico de demo",state:"demo",published:true},
 {id:"nachos-demo",title:"Mesa visual de demo",imageUrl:dishImages.nachos,alt:"Fotografía aportada como visual gastronómico de demo",state:"demo",published:true},
 {id:"langostinos-demo",title:"Presentación visual de demo",imageUrl:dishImages.langostinos,alt:"Fotografía aportada como visual gastronómico de demo",state:"demo",published:true}
 ,{id:"facade-demo",title:"Fachada del local",imageUrl:restaurantImages.facade,alt:"Fachada aportada del local L’Asalvajá",state:"demo",published:true}
 ,{id:"bar-demo",title:"Barra iluminada",imageUrl:restaurantImages.bar,alt:"Barra aportada del local L’Asalvajá",state:"demo",published:true}
 ,{id:"burger-demo",title:"Hamburguesa visual de demo",imageUrl:dishImages.burger,alt:"Visual de demo de hamburguesa",state:"demo",published:true}
 ,{id:"postres-demo",title:"Postres visuales de demo",imageUrl:dishImages.postres,alt:"Visual de demo de postres",state:"demo",published:true}
];
export const initialPromotions: Promotion[] = [{id:"first-visit",title:"Contenido pendiente de confirmar",body:"Las promociones se publicarán aquí cuando el restaurante confirme el texto y las condiciones.",published:false,state:"pendiente"}];
export function normalizeDishes(input: Partial<Dish>[] | undefined): Dish[] { return (input?.length ? input : initialDishes).map((dish,index)=>({...initialDishes[index%initialDishes.length],...dish,id:dish.id||`dish-${index}`,featured:Boolean(dish.featured),published:dish.published!==false,imageUrl:dish.imageUrl||demoImage,imageAlt:dish.imageAlt||`Imagen de demostración para ${dish.name||"producto"}`})); }
