const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/install-dialog-yJhDKStb.js","assets/styles-BcHT06vS.js","assets/app-BJNGh-9F.js","assets/index-CXzaFU8d.js"])))=>i.map(i=>d[i]);
import{g as s}from"./app-BJNGh-9F.js";const i=async n=>{s(()=>import("./install-dialog-yJhDKStb.js"),__vite__mapDeps([0,1,2]));let t;try{t=await navigator.serial.requestPort()}catch(e){if(e.name==="NotFoundError"){s(()=>import("./index-CXzaFU8d.js"),__vite__mapDeps([3,1])).then(a=>a.openNoPortPickedDialog(()=>i(n)));return}alert(`Error: ${e.message}`);return}if(!t)return;try{await t.open({baudRate:115200})}catch(e){alert(e.message);return}const r=document.createElement("ewt-install-dialog");r.port=t,r.manifestPath=n.manifest||n.getAttribute("manifest"),r.overrides=n.overrides,r.addEventListener("closed",()=>{t.close()},{once:!0}),document.body.appendChild(r)};class o extends HTMLElement{connectedCallback(){if(this.renderRoot)return;if(this.renderRoot=this.attachShadow({mode:"open"}),!o.isSupported||!o.isAllowed){this.toggleAttribute("install-unsupported",!0),this.renderRoot.innerHTML=o.isAllowed?"<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Google Chrome or Microsoft Edge.</slot>":"<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>";return}this.toggleAttribute("install-supported",!0);const t=document.createElement("slot");t.addEventListener("click",async e=>{e.preventDefault(),i(this)}),t.name="activate";const r=document.createElement("button");if(r.innerText="Connect",t.append(r),"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype){const e=new CSSStyleSheet;e.replaceSync(o.style),this.renderRoot.adoptedStyleSheets=[e]}else{const e=document.createElement("style");e.innerText=o.style,this.renderRoot.append(e)}this.renderRoot.append(t)}}o.isSupported="serial"in navigator;o.isAllowed=window.isSecureContext;o.style=`
  button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 24px;
    color: var(--esp-tools-button-text-color, #fff);
    background-color: var(--esp-tools-button-color, #03a9f4);
    border: none;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    border-radius: var(--esp-tools-button-border-radius, 9999px);
  }
  button:hover::before {
    background-color: rgba(255,255,255,.8);
  }
  button:focus {
    outline: none;
  }
  button:focus::before {
    background-color: white;
  }
  button:active::before {
    background-color: grey;
  }
  :host([active]) button {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: unset;
    pointer-events: none;
  }
  .hidden {
    display: none;
  }`;customElements.define("esp-web-install-button",o);export{o as InstallButton};
