class Header extends HTMLElement {
constructor() {
  super();
}

connectedCallback() {
  this.innerHTML = `

<header>
  
  <p>
    <h1 class="green">@squishu</h1></b></a>
  </p>
  <p>
  <div class="speech-bubble">
    <div id="speech-bubble-text"></div>
  </div>
  <div class="speech-bubble-tip"></div>
  <img src="img/dancing-alien.gif" height="54px" width="32px">
</p>
</header>

`;}}

customElements.define("header-component", Header);

var quotes = [
  'The truth is out there!',
  'Made with love in Canada! <img src="img&sol;canada.gif" height="14px", width="20px">',
  'All your base are belong to us.',
  'The hard times have only just begun.',
  'You must construct additional pylons!',
  'The horrors persist, but so do I~',
];
  
document.getElementById("speech-bubble-text").innerHTML = quotes[Math.floor(Math.random()*quotes.length)];;