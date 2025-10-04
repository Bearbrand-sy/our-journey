const stories = [
      { text: "Chapter 1: Our first laag\n\nOnce upon a time, our first laag in the puerto, even though gikapoy us sa sgeg lakaw2 but were enjoying our time together. It was so fun that i want it to spend longer with you. Pero ang oras di gasabay HAHAHAH but still i enjoy it so much :).", img: "1.png" },
      { text: "Chapter 2: First Pangaligo\n\nLaughter, smiles, and little swimming adventures painted our days with colors brighter than the sunrise. Atong unang pangaligo sa swimming pool na solo nato ang pool resort, after natin mag laag nangaligo us, so lingaw kaayo ang pangaligo nato na may kunting e shh nlangs AHAHHAHA. Sana maulit na mangaligo us puhon.", img: "2.png" },
      { text: "Chapter 3: Our Gala in BRCI ft. Food Trip\n\n Were both busog kaayo here to the point wla na hurot gipang dala nato na mga snacks HAHAHHAHA. Still i enjoy it po na nag ubas us ana nga time naa kay work naa sad koy work and were so busy but we make it happen na dayonon atong sabot and here we are sa pic enjoy and busog so much :).", img: "3.png" },
      { text: "Chapter 4: Our first Gala sa Cagayan\n\n Pinaka una natin nga laag sa Cagayan nga mag buy ug printer kay so far atong pinakalayo nga laagan kay puerto AHAHHAHAH. Even though nga medjo kadjot ra yun nga laag still enjoy parin kaayo atong laag. Tas pag uli nato naka sakay na us sa bus to bugnaw kaayo ems murag karne nga ge freeze HAHAHHAHHA and you give me warm with your hands i appreciate it so much po muaaahhh.", img: "4.png" },
      { text: "Chapter 5: Our latest Laag sa Cagayan\n\n Lastly kani nga pic our latest nga laag sa cagayan hehe, enjoy na enjoy ems ani nga time po labi na atong nag Arcade us and don sa conference nga ge hold, na meet nako ang mga parente nimo tas naka amin ems nga medjo naulaw kay sukad2 karon pa ems naka ganon HAHAHHAHHAH but its good narin na ilhan ems sa mga parente nimo hehe. Sorry pala about atong nagka miscommunicate us sa 20 nga plete sa rela. Thank you so Much po for this opportunity na gipa apil ko nimo sa DOUB muaahhh.", img: "5.png" }
    ];
    let currentPage = 0;

    function updateStory() {
      if (currentPage < stories.length) {
        const story = stories[currentPage];
        document.getElementById("story-text").innerText = story.text;
        document.getElementById("story-img").src = story.img;
      } else {
        document.getElementById("story-container").style.display = "none";
        document.getElementById("ending").style.display = "flex";
      }
    }

    function startStory() {
      document.getElementById("front-page").style.display = "none";
      document.getElementById("story-container").style.display = "flex";
      updateStory();
      document.getElementById("bg-music").play();
    }

    function nextPage() {
      currentPage++;
      updateStory();
    }
    function prevPage() {
      if (currentPage > 0) {
        currentPage--;
        updateStory();
      }
    }
    function restartStory() {
      currentPage = 0;
      document.getElementById("ending").style.display = "none";
      document.getElementById("story-container").style.display = "flex";
      updateStory();
    }

    // Floating hearts background
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "❤";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 15 + "px";
      document.querySelector(".hearts").appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 1000);

    // Tap anywhere to spawn heart
    document.addEventListener("click", e => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "❤";
      heart.style.left = e.clientX + "px";
      heart.style.top = e.clientY + "px";
      heart.style.position = "fixed";
      heart.style.fontSize = Math.random() * 30 + 20 + "px";
      document.getElementById("hearts").appendChild(heart);
      setTimeout(() => heart.remove(), 2000);
    });

    // Swipe gestures for phones
    let touchStartX = 0, touchEndX = 0;
    document.addEventListener("touchstart", e => {
      touchStartX = e.changedTouches[0].screenX;
    });
    document.addEventListener("touchend", e => {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
    });
    function handleGesture() {
      if (touchEndX < touchStartX - 50) nextPage();
      if (touchEndX > touchStartX + 50) prevPage();
    }