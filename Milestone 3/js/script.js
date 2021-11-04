Vue.config.devtools = true;

new Vue ({
  el: "#root",
  data:{
    contacts: [
      //Michele
      {
        name: "Michele",
        avatar: "img/avatar_1.jpg",
        visible: true,
        messages: [
        //singolo messaggio
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a sapasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "recived",
          },
        ],
      },
      //Fabio
      {
        name: "Fabio",
        avatar: "img/avatar_2.jpg",
        visible: true,
        messages: [
        //singolo messaggio
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "recived",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      //Samuele
      {
        name: "Samuele",
        avatar: "img/avatar_3.jpg",
        visible: true,
        messages: [
        //singolo messaggio
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "recived",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "recived",
          },
        ],
      },
      //Luisa
      {
        name: "Luisa",
        avatar: "img/avatar_4.jpg",
        visible: true,
        messages: [
        //singolo messaggio
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "recived",
          },
        ],
      },
    ],

    // activeChat: {},
    currentContact: 0,
  },
  
  methods: {

    // Anteprima messaggio su Sidebar Contatti
    getLastMessage(messages){
      const mes = messages[messages.length - 1].text;
      return mes.slice(0, 25)
    },

    // Anteprima data su Sidebar Contatti
    getLastDate(messages){
      const date = messages[messages.length - 1].date;
      return date
    },

    // Contatto attuale
    selectContact(i){
      return this.currentContact = i;
    },







    // Selezionare utente
    // onChatClick(chatDaAttivare){
    //   this.activeChat = chatDaAttivare;
    // },

    // onSubmitClick(){
    //   //
    // }
  },
})