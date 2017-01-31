// hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
// hint -- add an item to an array: http://stackoverflow.com/questions/351409/how-to-append-something-to-an-array
// hint -- you may need an "editingItem" variable in your data object

new Vue({
  el: '#app',
  data: {
    titleInputValue: '',
    contentInputValue: '',
    editingItem: '',

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

  computed: {
    editingLabel: function () {
if (this.editingItem) {
  return 'Edit Item';
} else {
  return 'Create Item';
}
},
      buttonTitle: function () {
        if (this.editingItem) {
          return 'Edit Item';
        } else {
          return 'Create Item';
        }
        },

  methods: {
    addTask: function (){
      if (this.editingItem) {



  } else {  this.cards.push({
      title: this.titleInputValue,
      content: this.contentInputValue
    })
  }
    this.titleInputValue='';
    this.contentInputValue='';
  },
  //The addTask function took the title input and content values (which are set to data inputs) and pushed them to the Create button.
  //The addTask function then had to reset the title and content input values to blank.
  cancel: function() {
    this.editingItem='';
    this.titleInputValue='';
    this.contentInputValue='';
  },
  //The cancel function reset the title and input values to blank.
    removeCard: function (thisCard) {
    var cardIndex=this.cards.indexOf(thisCard);
    this.cards.splice(cardIndex,1);
   },
  //Hint -- remove a particular element from an array: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript.
  //To remove a card, need to find the index of the elment you want to remove.
  //Then use Splice, where you use "start" and "deleteCount."
  //We want to remove a single item, so use delteCount of 1.
  //Compute the index by using var cardIndex=this.card.indexOf(thisCard).
  //Then splice using the new cardIndex and a deleteCount of 1 to delete a single item.
  //Link this function to the Done button.
   editCard: function (a) {
     this.editingItem = a
     this.currentTitle = a.title
     this.currentContent = a.content
     });
//Create a temporary placeholder
//which can be referenced later
//to update the item and populate
//the input filends with the items current values

   },
  }
});
