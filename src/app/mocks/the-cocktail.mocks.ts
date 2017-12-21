import {TabContent, HotelInfo, RoomExtraContainer} from '../models/the-cocktail.model';

export const tabListMock: Array<TabContent> = [
      {
        title: 'Solo Alojamiento',
        specs: [
          'Sin régimen',
          'Botella de agua de bienvenida'
        ],
        cta: 'Elegir régimen'
      }, {
        title: 'Alojamiento y Desayuno',
        specs: [
          'Desayuno buffet completo'
        ],
        cta: 'Elegir régimen'
      }, {
        title: 'Media Pensión',
        specs: [
          'Desayuno buffet completo',
          'Cena buffet',
          'No incluye'
        ],
        cta: 'Elegir régimen'
      }, {
        title: 'Todo Incluido',
        specs: [
          'Dispondrás de comida y bebida todo el día durante tu estancia',
          'Restaurante Buffet',
          'Snack Bar',
          'Servicio de bares (marcas nacionales)'
        ],
        cta: 'Elegir régimen'
      }, {
        title: 'Unlimited Services',
        specs: [
          'Restaurante Buffet con bebidas Premium',
          'Restaurante a la carta (una cena por estancia)',
          'Snack Bar con bebidas Premium',
          'Minibar incluido',
          'Acceso a SPA y 45 minutos de masaje por persona',
          'Actividades deportivas (acuáticas sin motor)',
          'Caja fuerte',
          'Parking gratuito',
          'Lavandería'
        ],
        cta: 'Elegir régimen'
      }
    ];

export const hotelInfoMock: HotelInfo = {
  type: 'Hotel',
  name: 'Mieres del Camín Apartamentos',
  stars: 4
};

export const roomExtrasMock: Array<RoomExtraContainer> = [{
  title: 'Mejora tu estancia',
  subtitle: 'Opcional',
  tag: {
    label: 'Exclusivo Hoteles.com',
    position: 'top-left'
  },
  extras: [{
    title: 'Olvídese de la rutina',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
           cillum dolore`,
    img: 'room_extra_01.jpg',
    seeMore: {
      label: 'Mas información y condiciones',
      title: 'Incluye',
      info: [
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      ],
      footNote: 'Valores no acumulables a otras promociones similares'
    }
  }, {
    title: 'Experiencias y programas SPA con agua',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
           cillum dolore`,
    img: 'room_extra_02.jpg',
    seeMore: {
      label: 'Mas información y condiciones',
      title: 'Incluye',
      info: [
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
      footNote: 'Valores no acumulables a otras promociones similares'
    }
  }]
}, {
  title: 'Servicios de habitación',
  subtitle: 'Opcional',
  tag: {
    label: 'Exclusivo Hoteles.com',
    position: 'top-left'
  },
  extras: [{
    title: 'Olvídese de la rutina',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
           cillum dolore`,
    img: 'room_extra_02.jpg',
    seeMore: {
      label: 'Mas información y condiciones',
      title: 'Incluye',
      info: [
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      ],
      footNote: 'Valores no acumulables a otras promociones similares'
    }
  }, {
    title: 'Experiencias y programas SPA con agua',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
           labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
           cillum dolore`,
    img: 'room_extra_01.jpg',
    seeMore: {
      label: 'Mas información y condiciones',
      title: 'Incluye',
      info: [
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ],
      footNote: 'Valores no acumulables a otras promociones similares'
    }
  }]
}];
