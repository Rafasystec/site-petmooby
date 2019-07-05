let app = angular.module('boora', ['pascalprecht.translate']);



//app.config(function ($translateProvider) {
//   $translateProvider
//    .useStaticFilesLoader({
//      prefix: './js/language/locale_',
//      suffix: '.json'
//    })
//  $translateProvider.preferredLanguage('en');
//    //$translateProvider.useSanitizeValueStrategy('sceParameters');
//});

app.config(function ($translateProvider) {
  
 var en_var =  {
    MENU_TOP_DOWNLOAD: 'DOWNLOAD',
    MENU_TOP_FEATURES: 'APP',
    MENU_TOP_CONTACT: 'CONTACT',
    MAIN_TITLE: 'Do not waste more time on your trip! Find the tours in a practical and easy way of the best destinations in Ceará.',
    MAIN_BUTTON: 'DOWNLOAD THE APP NOW',
    DOWNLOAD_TITLE: 'Download BOORA now and make the best tours!',
    DOWNLOAD_SUBTITLE:'Our app is available on any mobile device! Download now to get started!',
    FEATURE_TITLE:'Enjoy your trip with BOORA',
    FEATURE_SUBTITLE:'With the BOORA you will have more time to enjoy your trip',
    FEATURE_TITLE1:'TOUR',
    FEATURE_SUBTITLE1:'See Tours at the destination of your trip',
    FEATURE_TITLE2:'Economy',
    FEATURE_SUBTITLE2:'Divide costs with other tourists',
    FEATURE_TITLE3:'SCHEDULING',
    FEATURE_SUBTITLE3:'Schedule your ride on to your destination',
    FEATURE_TITLE4:'TOURIST GUIDE',
    FEATURE_SUBTITLE4:'Find the nearest tourist guide', 
    DRIVER_TITLE:'Do you want to be our driver or associate?',         
    DRIVER_BUTTON:'CONTACT US',
    NAME_LBL:'Name',
    PHONE_LBL:'Phone',
    MESSAGE_LBL:'Message',
    SEND_BTN:'SEND',
    NO_NAME_MESSAGE:'Please enter name', 
    NO_PHONE_MESSAGE:'Please enter phone', 
    NO_MAIL_MESSAGE:'Please enter e-mail', 
    NO_MESSAGE_MESSAGE:'Please enter message'
  };
    
    var pt_var =  {
    MENU_TOP_DOWNLOAD: 'DOWNLOAD',
    MENU_TOP_FEATURES: 'APP',
    MENU_TOP_CONTACT: 'CONTATO',    
    MAIN_TITLE: 'Não perca mais tempo em sua viagem! Encontre os passeios de forma prática e fácil dos melhores destinos do Ceará.',
    MAIN_BUTTON: 'BAIXE AGORA O APP',
    DOWNLOAD_TITLE: 'Baixe o BOORA agora e faça os melhores passeios!',
    DOWNLOAD_SUBTITLE:'Nosso aplicativo está disponível em qualquer dispositivo móvel! Baixe agora para usar!',
    FEATURE_TITLE:'Aproveite sua viagem com o BOORA',
    FEATURE_SUBTITLE:'Com o BORRA você terá mais tempo para aproveitar sua viagem ',
    FEATURE_TITLE1:'PASSEIO',
    FEATURE_SUBTITLE1:'Veja passeios no destino da sua viagem',
    FEATURE_TITLE2:'ECONOMIA',
    FEATURE_SUBTITLE2:'Divida os custos com outros turistas',
    FEATURE_TITLE3:'AGENDAMENTO',
    FEATURE_SUBTITLE3:'Agende seu passeio em para seu destino',
    FEATURE_TITLE4:'GUIA TURISTICO',
    FEATURE_SUBTITLE4:'Encontre o guia turistico mais proximo', 
    DRIVER_TITLE:'Deseja ser nosso motorista ou associado?',         
    DRIVER_BUTTON:'FALE CONOSCO',
    NAME_LBL:'Nome',
    PHONE_LBL:'Telefone',
    MESSAGE_LBL:'Mensagem',
    SEND_BTN:'Enviar',
    NO_NAME_MESSAGE:'Por favor preencha o nome', 
    NO_PHONE_MESSAGE:'Por favor preencha o telefone', 
    NO_MAIL_MESSAGE:'Por favor preencha o e-mail', 
    NO_MESSAGE_MESSAGE:'Por favor preencha a mensagem'
  };
    
    var es_var =  {
    MENU_TOP_DOWNLOAD: 'DOWNLOAD',
    MENU_TOP_FEATURES: 'APP',
    MENU_TOP_CONTACT: 'CONTACTO',
    MAIN_TITLE: '¡No pierda más tiempo de su viaje! Encuentre los paseos de forma práctica y fácil de los mejores destinos de Ceará.',
    MAIN_BUTTON: 'DESCARGAR AHORA LA APP',
    DOWNLOAD_TITLE: '¡Descargue el BOORA ahora y haga los mejores paseos!',
    DOWNLOAD_SUBTITLE:'Nuestra aplicación está disponible en cualquier dispositivo móvil! ¡Descárgalo ahora para empezar!',
    FEATURE_TITLE:'Disfrute de su viaje con el BOORA',
    FEATURE_SUBTITLE:'Con el BORRA tendrás más tiempo para aprovechar tu viaje',
    FEATURE_TITLE1:'PASEO',
    FEATURE_SUBTITLE1:'Vea paseos en el destino de su viage.',
    FEATURE_TITLE2:'Economía',
    FEATURE_SUBTITLE2:'Divida los costos con otros turistas',
    FEATURE_TITLE3:'PROGRAMACIÓN',
    FEATURE_SUBTITLE3:'Agende su paseo en su destino',
    FEATURE_TITLE4:'GUÍA TURÍSTICO',
    FEATURE_SUBTITLE4:'Encuentra la guía turística más cercana', 
    DRIVER_TITLE:'¿Desea ser nuestro conductor o asociado?',         
    DRIVER_BUTTON:'HABLE CON NOSOTROS',
    NAME_LBL:'Nombre',
    PHONE_LBL:'Teléfono',
    MESSAGE_LBL:'Mensaje',
    SEND_BTN:'Enviar',
    NO_NAME_MESSAGE:'Por favor, rellene el nombre', 
    NO_PHONE_MESSAGE:'Por favor, llene el teléfono', 
    NO_MAIL_MESSAGE:'Por favor, rellene el e-mail', 
    NO_MESSAGE_MESSAGE:'Por favor, rellene el mensaje'
        
  };
    

    
  $translateProvider.translations('en', en_var);
  $translateProvider.translations('pt', pt_var);
  $translateProvider.translations('es', es_var);    
  $translateProvider.preferredLanguage('pt');
  $translateProvider.useSanitizeValueStrategy('sceParameters');  
});