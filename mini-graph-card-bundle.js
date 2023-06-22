class ContentCardExample extends HTMLElement {
  

  static get properties() {
    return {
      hass: {},
      config: {},
    };
  }

  static getConfigElement() {
    return document.createElement("mini-graph-card-editor");
  }

  static getStubConfig() {
    return { entity: "sun.sun" }
  }

  // Whenever the state changes, a new `hass` object is set. Use this to
  // update your content.
  set hass(hass) {
    // Initialize the content if it's not there yet.
    if (!this.content) {
      this.innerHTML = `
        <ha-card header="Example-card">
          <div class="card-content"></div>
        </ha-card>
      `;
      this.content = this.querySelector("div");
    }
    if(this.config.testo_h1){
      this.content.innerHTML = `
        Testo ${this.config.testo_h1}
      `;
    }
    /* if(this.config.entity){
      const entityId = this.config.entity;
      const state = hass.states[entityId];
      const stateStr = state ? state.state : "unavailable";
  
      this.content.innerHTML = `
        The state of ${entityId} is ${stateStr}!
        <br><br>
        <img src="http://via.placeholder.com/350x150">
      `;
    } */

  }

  // The user supplied configuration. Throw an exception and Home Assistant
  // will render an error card.
  setConfig(config) {
    if (!config.entity) {
      //throw new Error("You need to define an entity");
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}

customElements.define("mini-graph-card", ContentCardExample);
