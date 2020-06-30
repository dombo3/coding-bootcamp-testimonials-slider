  let john = {
    quote: "“ If you want to lay the best foundation possible I’d recommend taking this course." +
    "The depth the instructors go into is incredible. I now feel so confident about " +
    "starting up as a professional developer. ”",
    name: "John Tarkpor",
    profession: "Junior Front-end Developer",
    photo: "images/image-john.jpg"
  };

  let tanya = {
    quote: "“ I’ve been interested in coding for a while but never taken the jump, until now." +
          "I couldn’t recommend this course enough. I’m now in the job of my dreams and so " +
          "excited about the future. ”",
    name: "Tanya Sinclair",
    profession: "UX Engineer",
    photo: "images/image-tanya.jpg"
  };

  let people = [tanya, john];
  let personNumber = 0;

  let loadPerson = (personNumber) => {
    let person = people[personNumber];

    document.querySelector(".quote").textContent = person.quote;
    document.querySelector(".name").textContent = person.name;
    document.querySelector(".profession").textContent = person.profession;
    document.querySelector(".portrait").setAttribute("src", person.photo);
  }

  loadPerson(0);

  const nextButton = document.querySelector("button.next");
  const previousButton = document.querySelector("button.prev")
  
  nextButton.onclick = function(e) {
    nextPerson();
    loadPerson(personNumber);
  }

  previousButton.onclick = function(e) {
    previousPerson();
    loadPerson(personNumber);
  }

  document.onkeydown = function(e) {
    var code = e.keyCode;
    if (code === 39) {
      nextPerson();
    } else if (code === 37) {
      previousPerson();
    }
    loadPerson(personNumber);
  }


/*---------------------- with JQuery----------------------------
  $('button.next').on('click', function() {
    nextPerson();
    loadPerson(personNumber);
  })

  $('button.prev').on('click', function() {
    previousPerson();
    loadPerson(personNumber);
  })

  $(document).keydown(function(e) {
    var code = e.keyCode;
    if (code === 39) {
      nextPerson();
    } else if (code === 37) {
      previousPerson();
    }
    loadPerson(personNumber);
  }
  -----------------------------------------------------------------*/

  let nextPerson = function() {
    if (personNumber < people.length - 1) {
      personNumber++;
    } else if (personNumber === people.length - 1) {
      personNumber = 0;
    }
  }

  let previousPerson = function() {
    if (personNumber > 0) {
      personNumber--;
    } else if (personNumber === 0) {
      personNumber = people.length - 1;
    }
  }