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
     IMG_APP_ALT:'IMAGE FROM APP PETMOOBY',
     DESCRIPTION_SITE_META: 'PETMOOBY is an application to help tutors take good care of their animals health.',
     TITLE:'PETMOOBY - THE BEST APP FOR YOUR PETS',
    MENU_TOP_DOWNLOAD: 'DOWNLOAD',
    MENU_TOP_FEATURES: 'APP',
    MENU_TOP_TERMS:'TERMS',
    MENU_TOP_CONTACT: 'CONTACT',
    MAIN_TITLE: 'PETMOOBY is the perfect application for you that wants to take good care of the health of your PET',
    MAIN_BUTTON: 'DOWNLOAD THE APP NOW',
    DOWNLOAD_TITLE: 'Download PETMOOBY now and never forget your PET vaccines and medications',
    DOWNLOAD_SUBTITLE:'Our app is temporarily only available for APP STORE! Download now to use!',
    FEATURE_TITLE:'Take care of your pet with PETMOOBY',
    FEATURE_SUBTITLE:'Never forget vaccines and medicines',
    FEATURE_TITLE1:'DATES',
    FEATURE_SUBTITLE1:'Calendar with upcoming vaccines and medications',
    FEATURE_TITLE2:'VACCINES',
    FEATURE_SUBTITLE2:'Register your vaccinations and receive alerts to remind you.',
    FEATURE_TITLE3:'MEDICINE',
    FEATURE_SUBTITLE3:'Register your medications and receive alerts to remind you.',
    FEATURE_TITLE4:'TIPS AND CURIOSITIES',
    FEATURE_SUBTITLE4:'Tips and curiosities from the PET world with the best veterinarians', 
    DRIVER_TITLE:'Do you want to be our driver or associate?',         
    DRIVER_BUTTON:'CONTACT US',
    NAME_LBL:'Name',
    PHONE_LBL:'Phone',
    MESSAGE_LBL:'Message',
    SEND_BTN:'SEND',
    NO_NAME_MESSAGE:'Please enter name', 
    NO_PHONE_MESSAGE:'Please enter phone', 
    NO_MAIL_MESSAGE:'Please enter e-mail', 
    NO_MESSAGE_MESSAGE:'Please enter message',
    CONTACT_TITLE:'CONTACT US'
  };
    
    var pt_var =  {
    IMG_APP_ALT:'IMAGEM DA TELA DO PETMOOBY',
        DESCRIPTION_SITE_META : 'PETMOOBY é um aplicativo para ajudar os tutores a cuidar bem das saúde dos seus animais.',
    TITLE:'PETMOOBY - O MELHOR APP PARA SEUS PETS',    
    MENU_TOP_DOWNLOAD: 'DOWNLOAD',
    MENU_TOP_FEATURES: 'APP',
    MENU_TOP_TERMS:'TERMOS',
    MENU_TOP_CONTACT: 'CONTATO',    
    MAIN_TITLE: 'O PETMOOBY é o aplicativo perfeito para você que quer cuidar bem da saúde do seu PET',
    MAIN_BUTTON: 'BAIXE AGORA O APP',
    DOWNLOAD_TITLE: 'Baixe o PETMOOBY agora e não esqueça mais as vacinas e medicamentos do seu PET!',
    DOWNLOAD_SUBTITLE:'Nosso aplicativo está disponível temporariamente somente para APP STORE ! Baixe agora para usar!',
    FEATURE_TITLE:'Cuide do seu pet com o PETMOOBY',
    FEATURE_SUBTITLE:'Nunca mais esqueça vacinas e medicamentos',
    FEATURE_TITLE1:'DATAS',
    FEATURE_SUBTITLE1:'Calendário com as proximas vacinas e medicamentos',
    FEATURE_TITLE2:'VACINAS',
    FEATURE_SUBTITLE2:'Cadastre suas vacinas e receba alertas para lembra-lo.',
    FEATURE_TITLE3:'MEDICAMENTOS',
    FEATURE_SUBTITLE3:'Cadastre seus medicamentos e receba alertas para lembra-lo.',
    FEATURE_TITLE4:'DICAS E CURIOSIDADES',
    FEATURE_SUBTITLE4:'Dicas e curiosidades do mundo PET com os melhores veterinários', 
    DRIVER_TITLE:'Deseja ser nosso motorista ou associado?',         
    DRIVER_BUTTON:'FALE CONOSCO',
    NAME_LBL:'Nome',
    PHONE_LBL:'Telefone',
    MESSAGE_LBL:'Mensagem',
    SEND_BTN:'Enviar',
    NO_NAME_MESSAGE:'Por favor preencha o nome', 
    NO_PHONE_MESSAGE:'Por favor preencha o telefone', 
    NO_MAIL_MESSAGE:'Por favor preencha o e-mail', 
    NO_MESSAGE_MESSAGE:'Por favor preencha a mensagem',
    CONTACT_TITLE:'ENTRE EM CONTATO'
  };
    
    var es_var =  {
    TITLE:'PETMOOBY - LA MEJOR APLICACIÓN PARA TUS ANIMALES', 
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