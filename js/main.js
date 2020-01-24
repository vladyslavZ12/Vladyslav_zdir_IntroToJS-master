

(()=> {

  const mySpan = document.querySelector('main span');
        myObject = document.querySelector('.svg-img');

  function toggleSelection() {
    //we want to update our UI to make it look like
    //we are making a selection

    //debugger;

    this.classList.toggle('selected');
    console.log(this.id);
  }


  //figure out what triggers will drive the functionality

  mySpan.addEventListener('click', toggleSelection);
  myObject.addEventListener('click', toggleSelection);



})();
