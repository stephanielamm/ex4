// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    titleInputValue: '',
    contentInputValue: '',
    editingCards: '',

    cards: [
      {
        title: "Title.",
        content: "This is the card's content."
      },
      {
        title: "Title.",
        content: "This is the second card's content."
      }
    ]
  },
  methods: {
    addTask: function (){
    this.cards.push({
      title: this.titleInputValue,
      content: this.contentInputValue
    })
    this.titleInputValue='';
    this.contentInputValue='';
  },
  cancel: function() {
    this.titleInputValue='';
    this.contentInputValue='';
  },
    removeCard: function (thisCard) {
    var cardIndex=this.cards.indexOf(thisCard);
    this.cards.splice(cardIndex,1);
   },
   editCard: function (thisCard) {
     this.editingCards=this.cards.push({

     });
   },
  }
});
