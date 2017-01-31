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
  //The addTask function took the title input and content values (which are set to data inputs) and pushed them to the Create button
  //The addTask function then had to reset the title and content input values to blank

  cancel: function() {
    this.titleInputValue='';
    this.contentInputValue='';
  },
  //The cancel function reset the title and input values to blank

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
