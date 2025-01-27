document.addEventListener('DOMContentLoaded', () => {

  let card1 = document.getElementById('card1');
  let card2 = document.getElementById('card2');
  let card3 = document.getElementById('card3');

  let card1_style = window.getComputedStyle(card1);
  let card2_style = window.getComputedStyle(card2);
  let card3_style = window.getComputedStyle(card3);

  let timer = 3000;

  function swipe() {
    card1.style.transition = "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
    card2.style.transition = "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
    card3.style.transition = "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)";

    // Swap the styles
    let tempBoxShadow = card1_style.boxShadow;
    card1.style.boxShadow = card2_style.boxShadow;
    card2.style.boxShadow = card3_style.boxShadow;
    card3.style.boxShadow = tempBoxShadow;

    let tempPosition = card1_style.position;
    card1.style.position = card2_style.position;
    card2.style.position = card3_style.position;
    card3.style.position = tempPosition;

    let tempzIndex = card1_style.zIndex;
    card1.style.zIndex = card2_style.zIndex;
    card2.style.zIndex = card3_style.zIndex;
    card3.style.zIndex = tempzIndex;

    let tempTransform = card1_style.transform;
    card1.style.transform = card2_style.transform;
    card2.style.transform = card3_style.transform;
    card3.style.transform = tempTransform;



  }

  let i = 0;

  function nameChange() {
    const professionalNames = ["Carpenter", "Electrician", "Plumber"];
    const nameElement = document.querySelector(".nameChange");

    // Update the text based on the card order
    if (i === 0) nameElement.textContent = professionalNames[0] + "!";
    if (i === 1) nameElement.textContent = professionalNames[1] + "!";
    if (i === 2) nameElement.textContent = professionalNames[2] + "!";

    // Cycle through indices
    i = (i + 1) % professionalNames.length;
  }

  setInterval(() => {
    nameChange();
    swipe();
  }, timer);
  nameChange();


  // scrolling when to click

  function scrollToHomePage() {
    document.querySelector('.home').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.page1').scrollIntoView({ behavior: 'smooth', block: 'start' });

    });
  }

  scrollToHomePage();

  // scroll to about

  function scrollToAbout() {
    document.querySelector('.aboutApp').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.about-sec').scrollIntoView({ behavior: 'smooth', block: 'start' });

    });
  }
  scrollToAbout();

  // scroll to feature

  function scrollToFeature() {
    document.querySelector('.feature-button').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.features-section').scrollIntoView({ behavior: 'smooth', block: 'start' });

    });
  }
  scrollToFeature();

  // scroll to how to use

  function scrollToHowToUse() {
    document.querySelector('.HowToUse').addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.howToHire-Section').scrollIntoView({ behavior: 'smooth', block: 'start' });

    });
  }
  scrollToHowToUse();



  // scroll to contacts details
  function scrollToContact() {
    document.querySelector('.contact').addEventListener('click', (e) => {
      e.preventDefault();
      const lastRow = document.querySelector('.middle-right');
      lastRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
  }
  scrollToContact();
  // scroll to contacts-us details
  function scrollToContactUs() {
    document.querySelector('.contact-us').addEventListener('click', (e) => {
      e.preventDefault();
      const lastRow = document.querySelector('.middle-right');
      lastRow.scrollIntoView({ behavior: 'smooth', block: 'start' });
    })
  }
  scrollToContactUs();

  // download Button
  function downloadNewWindow() {
    document.querySelector('.downloadApp').addEventListener('click', () => {
      window.open("https://play.google.com/store/apps/details?id=com.antoiler.twa&pli=1");
    });
  };
  downloadNewWindow();

  // play store button
  function playStoredNewWindow() {
    document.querySelector('.playStore').addEventListener('click', () => {
      window.open("https://play.google.com/store/apps/details?id=com.antoiler.twa&pli=1");
    });
  };
  playStoredNewWindow();



  // facebook icon
  function getToFacebook() {
    document.querySelector('.facebook').addEventListener('click', () => {
      window.open("https://www.facebook.com/iamantoiler")
    })
  }
  getToFacebook();

  function getToInstagram() {
    document.querySelector('.instagram').addEventListener('click', () => {
      window.open("https://www.instagram.com/antoiler")
    })
  }
  getToInstagram();


  function getToWhatsapp() {
    document.querySelector('.whatsapp').addEventListener('click', () => {
      window.open("https://api.whatsapp.com/send/?phone=919301797108&text&type=phone_number&app_absent=0")
    })
  }
  getToWhatsapp();

  function getToGoole() {
    document.querySelector('.google').addEventListener('click', () => {
      window.open("https://www.antoiler.com/")
    })
  }
  getToGoole();

  function getToLinkdin() {
    document.querySelector('.linkdin').addEventListener('click', () => {
      window.open("https://www.linkedin.com/company/antoiler/")
    })
  }
  getToLinkdin();
  function getToTwitter() {
    document.querySelector('.twitter').addEventListener('click', () => {
      window.open("https://www.linkedin.com/company/antoiler/")
    })
  }
  getToTwitter();

  function getToPrivacyPolicy() {
    document.querySelector('.tandc').addEventListener('click', () => {
      window.open("https://www.antoiler.com/privacy-policy")
    })
  }
  getToPrivacyPolicy();

  function getToTechCarrel() {
    document.querySelector('.techCarrel').addEventListener('click', () => {
      window.open("https://techcarrel.com/")
    })
  }
  getToTechCarrel();




});



