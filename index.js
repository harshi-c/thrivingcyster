function checkFactOrMyth(element, isFact) {
  if (isFact) {
    element.classList.add('fact');
  } else {
    element.classList.add('myth');
  }
}

//Re-load the page to re-set the statements
document.getElementById('refresh-btn2').addEventListener('click', function() {
  location.reload();
});

function openType(evt, pcosType) {
    // Get each tab and its content, hiding the tab's content till it's clicked. 
    const tabContents = document.getElementsByClassName('types');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = 'none';
    }

    // Get all tab elements and remove the active class
    const tabs = document.getElementsByClassName('tablink');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // Show the current tab and add the active class to the clicked tab button
    document.getElementById(pcosType).style.display = 'block';
    evt.classList.add('active');
    
}

//Get all the elements for each supplement.
const supType = document.querySelectorAll(".supplement");
//Get all the elements for each information element that will be displayed only when toggled..
const supInfo = document.querySelectorAll(".supplements-info");

  function open() {
    
    currentDisplay=this.lastElementChild.style.display||'none';
    //for..if loop to display the information only when the heading is clicked on, otherwise displayed as "none"
    for (let i = 0; i < supInfo.length; i++) {
        supInfo[i].style.display = "none";
      }
      if (currentDisplay=='none') this.lastElementChild.style.display = "block";
    }
    // Adding eventListener to the supplement - run the function when clicked on. 
    supType.forEach((supType) => supType.addEventListener("click", open));

  
  