console.info("Config Editor 4.6");
const LitElement = window.LitElement || Object.getPrototypeOf(customElements.get("hui-masonry-view") );
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

class ConfigEditor extends LitElement {

static get properties() {
	return {
		_hass: {type: Object},
		config: {},
	};
}

constructor() {
	super();
	this.name = '';
}

static get styles() {
	return css`
	
	`;
}

render(){

  console.log(this._hass);
	return html`
	<ha-card>
<input name="TTT" @change=${this.updateText} value="${this.config.name}" />
    <button @click="${this.Save}">Save</button>
	</ha-card>
`;
}
updateText(e) {
	e.stopPropagation();
	this.name =  e.target.value;
}

async Save() {
  var newConfig = {...this.config, ...{nome: this.name}}
  
  const event = new Event("config-changed", {
    bubbles: true,
    composed: true,
  });
  event.detail = { config: newConfig };
  this.dispatchEvent(event);
}

getCardSize() {
	return 5;
}

setConfig(config) {
  this.config = config;
}

set hass(hass) {
	this._hass = hass;
}

} customElements.define('mini-graph-card-editor', ConfigEditor);

window.customCards = window.customCards || [];
window.customCards.push({
	type: 'mini-graph-card',
	name: 'Config Editor Card',
	preview: false,
	description: 'Basic editor for configuration.yaml'
});
