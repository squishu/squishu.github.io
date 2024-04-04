class Footer extends HTMLElement {
constructor() {
  super();
}

connectedCallback() {
  this.innerHTML = `

<footer>
  <p class="socials">
  </p>
</footer>

`;}}

customElements.define("footer-component", Footer);