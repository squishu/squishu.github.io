class Footer extends HTMLElement {
constructor() {
  super();
}

connectedCallback() {
  this.innerHTML = `

<footer>
  <p class="socials">
    <b class="green">squishutbh@gmail.com</b>
  </p>
</footer>

`;}}

customElements.define("footer-component", Footer);