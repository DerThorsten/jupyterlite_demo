(self.webpackChunkjupyter_matplotlib=self.webpackChunkjupyter_matplotlib||[]).push([[686],{686:(e,t,i)=>{"use strict";i.r(t),i.d(t,{MODULE_NAME:()=>l.o,MODULE_VERSION:()=>l.Y,MPLCanvasModel:()=>d,MPLCanvasView:()=>c,ToolbarModel:()=>_,ToolbarView:()=>u});var s=i(439),n=i(335);function a(e,t){const i=t.getBoundingClientRect();return{x:e.clientX-i.left,y:e.clientY-i.top}}function o(e){return Object.keys(e).reduce(((t,i)=>("object"!=typeof e[i]&&(t[i]=e[i]),t)),{})}function r(e){const t=e.getContext("2d");if(null===t)throw"Could not create 2d context.";return t}var l=i(657),h=function(e,t,i,s){return new(i||(i=Promise))((function(n,a){function o(e){try{l(s.next(e))}catch(e){a(e)}}function r(e){try{l(s.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,r)}l((s=s.apply(e,t||[])).next())}))};class d extends n.DOMWidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:"MPLCanvasModel",_view_name:"MPLCanvasView",_model_module:"jupyter-matplotlib",_view_module:"jupyter-matplotlib",_model_module_version:"^"+l.Y,_view_module_version:"^"+l.Y,header_visible:!0,footer_visible:!0,toolbar:null,toolbar_visible:"fade-in-fade-out",toolbar_position:"horizontal",resizable:!0,capture_scroll:!1,pan_zoom_throttle:33,_data_url:null,_size:[0,0],_figure_label:"Figure",_message:"",_cursor:"pointer",_image_mode:"full",_rubberband_x:0,_rubberband_y:0,_rubberband_width:0,_rubberband_height:0})}initialize(e,t){super.initialize(e,t),this.offscreen_canvas=document.createElement("canvas"),this.offscreen_context=r(this.offscreen_canvas);const i=this.offscreen_context,s=i.backingStorePixelRatio||i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||1;this.requested_size=null,this.resize_requested=!1,this.ratio=(window.devicePixelRatio||1)/s,this.resize_canvas(),this._init_image(),this.on("msg:custom",this.on_comm_message.bind(this)),this.on("change:resizable",(()=>{this._for_each_view((e=>{e.update_canvas()}))})),this.on("change:_size",(()=>{this.resize_canvas(),this.offscreen_context.drawImage(this.image,0,0)})),this.on("comm_live_update",this.update_disabled.bind(this)),this.update_disabled(),this.send_initialization_message()}get size(){return this.get("_size")}get disabled(){return!this.comm_live}update_disabled(){this.set("resizable",!this.disabled)}sync(e,t,i={}){i.attrs&&delete i.attrs._data_url,super.sync(e,t,i)}send_message(e,t={}){t.type=e,this.send(t,{})}send_initialization_message(){1!==this.ratio&&(this.send_message("set_dpi_ratio",{dpi_ratio:this.ratio}),this.send_message("set_device_pixel_ratio",{device_pixel_ratio:this.ratio})),this.send_message("refresh"),this.send_message("send_image_mode"),this.send_message("initialized")}send_draw_message(){this.waiting_for_image||(this.waiting_for_image=!0,this.send_message("draw"))}handle_save(){const e=document.createElement("a");e.href=this.offscreen_canvas.toDataURL(),e.download=this.get("_figure_label")+".png",document.body.appendChild(e),e.click(),document.body.removeChild(e)}handle_resize(e){this.resize_canvas(),this.offscreen_context.drawImage(this.image,0,0),this.resize_requested||this._for_each_view((e=>{e.resize_and_update_canvas(this.size)})),this.send_message("refresh"),this.resize_requested=!1,null!==this.requested_size&&(this.resize(this.requested_size[0],this.requested_size[1]),this.requested_size=null)}resize(e,t){e<=5||t<=5||(this._for_each_view((i=>{i.resize_and_update_canvas([e,t])})),this.resize_requested?this.requested_size=[e,t]:(this.resize_requested=!0,this.send_message("resize",{width:e,height:t})))}resize_canvas(){this.offscreen_canvas.width=this.size[0]*this.ratio,this.offscreen_canvas.height=this.size[1]*this.ratio}handle_rubberband(e){let t=e.x0/this.ratio,i=(this.offscreen_canvas.height-e.y0)/this.ratio,s=e.x1/this.ratio,n=(this.offscreen_canvas.height-e.y1)/this.ratio;t=Math.floor(t)+.5,i=Math.floor(i)+.5,s=Math.floor(s)+.5,n=Math.floor(n)+.5,this.set("_rubberband_x",Math.min(t,s)),this.set("_rubberband_y",Math.min(i,n)),this.set("_rubberband_width",Math.abs(s-t)),this.set("_rubberband_height",Math.abs(n-i)),this.save_changes(),this._for_each_view((e=>{e.update_canvas()}))}handle_draw(e){this.send_draw_message()}handle_binary(e,t){const i=window.URL||window.webkitURL,s=new Uint8Array(t[0].buffer),n=new Blob([s],{type:"image/png"}),a=i.createObjectURL(n);this.image.src&&i.revokeObjectURL(this.image.src),this.image.src=a,this.set("_data_url",this.offscreen_canvas.toDataURL()),this.waiting_for_image=!1}handle_history_buttons(e){}handle_navigate_mode(e){}on_comm_message(e,t){const i=JSON.parse(e.data),s=i.type;let n;try{n=this["handle_"+s].bind(this)}catch(e){return void console.log("No handler for the '"+s+"' message type: ",i)}n&&n(i,t)}_init_image(){this.image=new Image,this.image.onload=()=>{if(this.disabled)return this.offscreen_canvas.width=this.image.width,this.offscreen_canvas.height=this.image.height,this.offscreen_context.drawImage(this.image,0,0),void this._for_each_view((e=>{e.canvas.width=this.image.width/this.ratio,e.canvas.height=this.image.height/this.ratio,e.canvas.style.width=e.canvas.width+"px",e.canvas.style.height=e.canvas.height+"px",e.top_canvas.width=this.image.width/this.ratio,e.top_canvas.height=this.image.height/this.ratio,e.top_canvas.style.width=e.top_canvas.width+"px",e.top_canvas.style.height=e.top_canvas.height+"px",e.canvas_div.style.width=e.canvas.width+"px",e.canvas_div.style.height=e.canvas.height+"px",e.update_canvas(!0)}));"full"===this.get("_image_mode")&&this.offscreen_context.clearRect(0,0,this.offscreen_canvas.width,this.offscreen_canvas.height),this.offscreen_context.drawImage(this.image,0,0),this._for_each_view((e=>{e.update_canvas()}))};const e=this.get("_data_url");null!==e&&(this.image.src=e)}_for_each_view(e){for(const t in this.views)this.views[t].then((t=>{e(t)}))}remove(){this.send_message("closing")}}d.serializers=Object.assign(Object.assign({},n.DOMWidgetModel.serializers),{toolbar:{deserialize:n.unpack_models}});class c extends n.DOMWidgetView{render(){return h(this,void 0,void 0,(function*(){this.resizing=!1,this.resize_handle_size=20,this.el.classList.add("jupyter-matplotlib"),this.figure=document.createElement("div"),this.figure.classList.add("jupyter-matplotlib-figure"),this.el.appendChild(this.figure),this._init_header(),this._init_canvas(),yield this._init_toolbar(),this._init_footer(),this._resize_event=this.resize_event.bind(this),this._stop_resize_event=this.stop_resize_event.bind(this),window.addEventListener("mousemove",this._resize_event),window.addEventListener("mouseup",this._stop_resize_event),this.el.addEventListener("mouseenter",(()=>{this.toolbar_view.fade_in()})),this.el.addEventListener("mouseleave",(()=>{this.toolbar_view.fade_out()})),this.model_events()}))}model_events(){this.model.on("change:header_visible",this._update_header_visible.bind(this)),this.model.on("change:footer_visible",this._update_footer_visible.bind(this)),this.model.on("change:toolbar_visible",this._update_toolbar_visible.bind(this)),this.model.on("change:toolbar_position",this._update_toolbar_position.bind(this)),this.model.on("change:_figure_label",this._update_figure_label.bind(this)),this.model.on("change:_message",this._update_message.bind(this)),this.model.on("change:_cursor",this._update_cursor.bind(this))}_update_header_visible(){this.header.style.display=this.model.get("header_visible")?"":"none"}_update_footer_visible(){this.footer.style.display=this.model.get("footer_visible")?"":"none"}_update_toolbar_visible(){this.toolbar_view.set_visibility(this.model.get("toolbar_visible"))}_update_toolbar_position(){this.model.get("toolbar").set("position",this.model.get("toolbar_position"))}_init_header(){this.header=document.createElement("div"),this.header.classList.add("jupyter-widgets","widget-label","jupyter-matplotlib-header"),this._update_header_visible(),this._update_figure_label(),this.figure.appendChild(this.header)}_update_figure_label(){this.header.textContent=this.model.get("_figure_label")}_init_canvas(){const e=document.createElement("div");e.classList.add("jupyter-widgets","jupyter-matplotlib-canvas-container"),this.figure.appendChild(e);const t=this.canvas_div=document.createElement("div");t.style.position="relative",t.style.clear="both",t.classList.add("jupyter-widgets","jupyter-matplotlib-canvas-div"),t.addEventListener("keydown",this.key_event("key_press")),t.addEventListener("keyup",this.key_event("key_release")),t.setAttribute("tabindex","0"),e.appendChild(t);const i=this.canvas=document.createElement("canvas");i.style.display="block",i.style.position="absolute",i.style.left="0",i.style.top="0",i.style.zIndex="0",this.context=r(i);const n=this.top_canvas=document.createElement("canvas");n.style.display="block",n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.zIndex="1",n.addEventListener("mousedown",this.mouse_event("button_press")),n.addEventListener("mouseup",this.mouse_event("button_release")),n.addEventListener("mousemove",(0,s.throttle)(this.mouse_event("motion_notify"),this.model.get("pan_zoom_throttle"))),n.addEventListener("mouseenter",this.mouse_event("figure_enter")),n.addEventListener("mouseleave",this.mouse_event("figure_leave")),n.addEventListener("wheel",(0,s.throttle)(this.mouse_event("scroll"),this.model.get("pan_zoom_throttle"))),t.appendChild(i),t.appendChild(n),this.top_context=r(n),this.top_context.strokeStyle="rgba(0, 0, 0, 255)",this.top_canvas.addEventListener("contextmenu",(e=>(e.preventDefault(),e.stopPropagation(),!1))),this.resize_and_update_canvas(this.model.size)}_init_toolbar(){return h(this,void 0,void 0,(function*(){this.toolbar_view=yield this.create_child_view(this.model.get("toolbar")),this.figure.appendChild(this.toolbar_view.el),this._update_toolbar_position(),this._update_toolbar_visible()}))}update_canvas(e=!1){if(0!==this.canvas.width&&0!==this.canvas.height){if(this.top_context.save(),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),e?this.context.drawImage(this.model.offscreen_canvas,0,0,this.canvas.width,this.canvas.height):this.context.drawImage(this.model.offscreen_canvas,0,0),this.top_context.clearRect(0,0,this.top_canvas.width,this.top_canvas.height),0!==this.model.get("_rubberband_width")&&0!==this.model.get("_rubberband_height")&&(this.top_context.strokeStyle="gray",this.top_context.lineWidth=1,this.top_context.shadowColor="black",this.top_context.shadowBlur=2,this.top_context.shadowOffsetX=1,this.top_context.shadowOffsetY=1,this.top_context.strokeRect(this.model.get("_rubberband_x"),this.model.get("_rubberband_y"),this.model.get("_rubberband_width"),this.model.get("_rubberband_height"))),this.model.get("resizable")){const e=this.top_context.createLinearGradient(this.top_canvas.width-this.resize_handle_size,this.top_canvas.height-this.resize_handle_size,this.top_canvas.width,this.top_canvas.height);e.addColorStop(0,"white"),e.addColorStop(1,"black"),this.top_context.fillStyle=e,this.top_context.strokeStyle="gray",this.top_context.globalAlpha=.3,this.top_context.beginPath(),this.top_context.moveTo(this.top_canvas.width,this.top_canvas.height),this.top_context.lineTo(this.top_canvas.width,this.top_canvas.height-this.resize_handle_size),this.top_context.lineTo(this.top_canvas.width-this.resize_handle_size,this.top_canvas.height),this.top_context.closePath(),this.top_context.fill(),this.top_context.stroke()}this.top_context.restore()}}_update_cursor(){this.top_canvas.style.cursor=this.model.get("_cursor")}_init_footer(){this.footer=document.createElement("div"),this.footer.classList.add("jupyter-widgets","widget-label","jupyter-matplotlib-footer"),this._update_footer_visible(),this._update_message(),this.figure.appendChild(this.footer)}_update_message(){this.footer.textContent=this.model.get("_message")}resize_and_update_canvas(e){this.canvas.setAttribute("width",""+e[0]*this.model.ratio),this.canvas.setAttribute("height",""+e[1]*this.model.ratio),this.canvas.style.width=e[0]+"px",this.canvas.style.height=e[1]+"px",this.top_canvas.setAttribute("width",String(e[0])),this.top_canvas.setAttribute("height",String(e[1])),this.canvas_div.style.width=e[0]+"px",this.canvas_div.style.height=e[1]+"px",this.update_canvas()}mouse_event(e){return t=>{const i=a(t,this.top_canvas);if("scroll"===e&&(t.data="scroll",t.deltaY<0?t.step=1:t.step=-1,this.model.get("capture_scroll")&&t.preventDefault()),"button_press"===e){if(i.x>=this.top_canvas.width-this.resize_handle_size&&i.y>=this.top_canvas.height-this.resize_handle_size&&this.model.get("resizable"))return void(this.resizing=!0);this.canvas.focus(),this.canvas_div.focus()}if(this.resizing)return;"motion_notify"===e&&(i.x>=this.top_canvas.width-this.resize_handle_size&&i.y>=this.top_canvas.height-this.resize_handle_size?this.top_canvas.style.cursor="nw-resize":this.top_canvas.style.cursor=this.model.get("_cursor"));const s=i.x*this.model.ratio,n=i.y*this.model.ratio;this.model.send_message(e,{x:s,y:n,button:t.button,step:t.step,guiEvent:o(t)})}}resize_event(e){if(this.resizing){const t=a(e,this.top_canvas);this.model.resize(t.x,t.y)}}stop_resize_event(){this.resizing=!1}key_event(e){return t=>{if(t.stopPropagation(),t.preventDefault(),"key_press"===e){if(t.key===this._key)return;this._key=t.key}"key_release"===e&&(this._key=null);let i="";return t.ctrlKey&&"Control"!==t.key?i+="ctrl+":t.altKey&&"Alt"!==t.key?i+="alt+":t.shiftKey&&"Shift"!==t.key&&(i+="shift+"),i+="k"+t.key,this.model.send_message(e,{key:i,guiEvent:o(t)}),!1}}remove(){window.removeEventListener("mousemove",this._resize_event),window.removeEventListener("mouseup",this._stop_resize_event)}}i(351);class _ extends n.DOMWidgetModel{defaults(){return Object.assign(Object.assign({},super.defaults()),{_model_name:"ToolbarModel",_view_name:"ToolbarView",_model_module:"jupyter-matplotlib",_view_module:"jupyter-matplotlib",_model_module_version:"^"+l.Y,_view_module_version:"^"+l.Y,toolitems:[],position:"left",button_style:"",_current_action:""})}}class u extends n.DOMWidgetView{constructor(){super(...arguments),this.visibility="fade-in-fade-out"}initialize(e){super.initialize(e),this.on("comm_live_update",this.update_disabled.bind(this))}render(){this.el.classList.add("jupyter-widgets","jupyter-matplotlib-toolbar","widget-container","widget-box"),this.set_visibility("fade-in-fade-out"),this.create_toolbar(),this.model_events()}create_toolbar(){const e=this.model.get("toolitems");this.toolbar=document.createElement("div"),this.toolbar.classList.add("widget-container","widget-box"),this.el.appendChild(this.toolbar),this.buttons={};for(const t in e){const i=e[t][0],s=e[t][1],n=e[t][2],a=e[t][3];if(!i)continue;const o=document.createElement("button");o.classList.add("jupyter-matplotlib-button","jupyter-widgets","jupyter-button"),o.setAttribute("href","#"),o.setAttribute("title",s),o.style.outline="none",o.addEventListener("click",this.toolbar_button_onclick(a));const r=document.createElement("i");r.classList.add("center","fa","fa-fw","fa-"+n),o.appendChild(r),this.buttons[a]=o,this.toolbar.appendChild(o)}this.set_position(),this.set_buttons_style(),this.update_disabled()}get disabled(){return!this.model.comm_live}update_disabled(){this.disabled&&(this.toolbar.style.display="none")}set_position(){const e=this.model.get("position");"left"===e||"right"===e?(this.el.classList.remove("widget-hbox"),this.el.classList.add("widget-vbox"),this.toolbar.classList.remove("widget-hbox"),this.toolbar.classList.add("widget-vbox"),this.el.style.top="3px",this.el.style.bottom="auto","left"===e?(this.el.style.left="3px",this.el.style.right="auto"):(this.el.style.left="auto",this.el.style.right="3px")):(this.el.classList.add("widget-hbox"),this.el.classList.remove("widget-vbox"),this.toolbar.classList.add("widget-hbox"),this.toolbar.classList.remove("widget-vbox"),this.el.style.right="3px",this.el.style.left="auto","top"===e?(this.el.style.top="3px",this.el.style.bottom="auto"):(this.el.style.top="auto",this.el.style.bottom="3px"))}toolbar_button_onclick(e){return t=>{"pan"!==e&&"zoom"!==e||(this.model.get("_current_action")===e?this.model.set("_current_action",""):this.model.set("_current_action",e),this.model.save_changes()),this.send({type:"toolbar_button",name:e})}}set_visibility(e){return"boolean"==typeof e&&(e=e?"visible":"hidden"),this.visibility=e,"fade-in-fade-out"===e?(this.el.classList.add("jupyter-matplotlib-toolbar-fadein-fadeout"),this.el.style.visibility="hidden",void(this.el.style.opacity="0")):(this.el.classList.remove("jupyter-matplotlib-toolbar-fadein-fadeout"),"visible"===e?(this.el.style.visibility="visible",void(this.el.style.opacity="1")):(this.el.style.visibility="hidden",void(this.el.style.opacity="0")))}fade_in(){"fade-in-fade-out"===this.visibility&&(this.el.style.visibility="visible",this.el.style.opacity="1")}fade_out(){"fade-in-fade-out"===this.visibility&&(this.el.style.visibility="hidden",this.el.style.opacity="0")}set_buttons_style(){const e={primary:["mod-primary"],success:["mod-success"],info:["mod-info"],warning:["mod-warning"],danger:["mod-danger"]};for(const t in this.buttons){const i=this.buttons[t];for(const t in e)i.classList.remove(e[t]);i.classList.remove("mod-active");const s=this.model.get("button_style");""!==s&&i.classList.add(e[s]),t===this.model.get("_current_action")&&i.classList.add("mod-active")}}model_events(){this.model.on("change:position",this.set_position.bind(this)),this.model.on_some_change(["button_style","_current_action"],this.set_buttons_style,this)}}},657:(e,t,i)=>{"use strict";i.d(t,{Y:()=>n,o:()=>a});const s=i(147),n=s.version,a=s.name},153:(e,t,i)=>{(t=i(645)(!1)).push([e.id,".jupyter-matplotlib {\n    width: auto;\n    height: auto;\n    flex: 1 1 auto;\n}\n\n/* Toolbar */\n\n.jupyter-matplotlib-toolbar {\n    position: absolute;\n    overflow: visible;\n    z-index: 100;\n}\n\n.jupyter-matplotlib-toolbar-fadein-fadeout {\n    transition: visibility 0.5s linear, opacity 0.5s linear;\n}\n\n.jupyter-matplotlib-button {\n    width: calc(var(--jp-widgets-inline-width-tiny) / 2 - 2px);\n    padding: 0 !important;\n}\n\n/* Figure */\n\n.jupyter-matplotlib-figure {\n    width: fit-content;\n    height: auto;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n\n.jupyter-matplotlib-canvas-container {\n    overflow: auto;\n}\n\n.jupyter-matplotlib-canvas-div {\n    margin: 2px;\n    flex: 1 1 auto;\n}\n\n.jupyter-matplotlib-header {\n    width: 100%;\n    text-align: center;\n}\n\n.jupyter-matplotlib-footer {\n    width: 100%;\n    text-align: center;\n    min-height: var(--jp-widgets-inline-height);\n}\n",""]),e.exports=t},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i,s,n,a=e[1]||"",o=e[3];if(!o)return a;if(t&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(n," */")),l=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([r]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,s){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(s)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(n[o]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);s&&n[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},351:(e,t,i)=>{var s=i(379),n=i(153);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.id,n,""]]);s(n,{insert:"head",singleton:!1}),e.exports=n.locals||{}},379:(e,t,i)=>{"use strict";var s,n=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),a=[];function o(e){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===e){t=i;break}return t}function r(e,t){for(var i={},s=[],n=0;n<e.length;n++){var r=e[n],l=t.base?r[0]+t.base:r[0],h=i[l]||0,d="".concat(l," ").concat(h);i[l]=h+1;var c=o(d),_={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(a[c].references++,a[c].updater(_)):a.push({identifier:d,updater:b(_,t),references:1}),s.push(d)}return s}function l(e){var t=document.createElement("style"),s=e.attributes||{};if(void 0===s.nonce){var a=i.nc;a&&(s.nonce=a)}if(Object.keys(s).forEach((function(e){t.setAttribute(e,s[e])})),"function"==typeof e.insert)e.insert(t);else{var o=n(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var h,d=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function c(e,t,i,s){var n=i?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(e.styleSheet)e.styleSheet.cssText=d(t,n);else{var a=document.createTextNode(n),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function _(e,t,i){var s=i.css,n=i.media,a=i.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var u=null,p=0;function b(e,t){var i,s,n;if(t.singleton){var a=p++;i=u||(u=l(t)),s=c.bind(null,i,a,!1),n=c.bind(null,i,a,!0)}else i=l(t),s=_.bind(null,i,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return s(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;s(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s));var i=r(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var s=0;s<i.length;s++){var n=o(i[s]);a[n].references--}for(var l=r(e,t),h=0;h<i.length;h++){var d=o(i[h]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}i=l}}}},147:e=>{"use strict";e.exports=JSON.parse('{"name":"jupyter-matplotlib","version":"0.10.5","description":"Matplotlib Jupyter Interactive Widget","author":"Matplotlib Development team","license":"BSD-3-Clause","main":"lib/index.js","types":"./lib/index.d.ts","files":["lib/**/*.js","dist/*.js","css/*.css"],"repository":{"type":"git","url":"https://github.com/matplotlib/jupyter-matplotlib.git"},"scripts":{"build":"yarn run build:lib && yarn run build:nbextension && yarn run build:labextension:dev","build:prod":"yarn run build:lib && yarn run build:nbextension && yarn run build:labextension","build:labextension":"jupyter labextension build .","build:labextension:dev":"jupyter labextension build --development True .","build:lib":"tsc","build:nbextension":"webpack --mode=production","clean":"yarn run clean:lib && yarn run clean:nbextension && yarn run clean:labextension","clean:lib":"rimraf lib","clean:labextension":"rimraf ipympl/labextension","clean:nbextension":"rimraf ipympl/nbextension/static/index.js","prepack":"yarn run build:lib","test":"jest","watch":"npm-run-all -p watch:*","watch:lib":"tsc -w","watch:nbextension":"webpack --watch --mode=development","watch:labextension":"jupyter labextension watch .","eslint":"eslint . --fix --ignore-path .eslintignore --ext .ts","eslint:check":"eslint . --ignore-path .eslintignore --ext .ts","lint":"yarn run prettier && yarn run eslint","lint:check":"yarn run prettier:check && yarn run eslint:check","prepublish":"yarn run clean && yarn run build","prettier":"prettier --ignore-path .eslintignore --write \\"**/*{.ts,.css,.json}\\"","prettier:check":"prettier --check --ignore-path .eslintignore \\"**/*{.ts,.css,.json}\\""},"jupyterlab":{"extension":"lib/plugin","outputDir":"ipympl/labextension/","sharedPackages":{"@jupyter-widgets/base":{"bundled":false,"singleton":true}}},"devDependencies":{"@babel/core":"^7.5.0","@babel/preset-env":"^7.5.0","@jupyterlab/builder":"^3.0.0","@phosphor/application":"^1.6.0","@phosphor/widgets":"^1.6.0","@types/jest":"^26.0.0","@types/webpack-env":"^1.13.6","@typescript-eslint/eslint-plugin":"^3.6.0","@typescript-eslint/parser":"^3.6.0","acorn":"^7.2.0","css-loader":"^3.2.0","eslint":"^7.4.0","eslint-config-prettier":"^6.11.0","eslint-plugin-prettier":"^3.1.4","fs-extra":"^7.0.0","identity-obj-proxy":"^3.0.0","jest":"^26.0.0","mkdirp":"^0.5.1","npm-run-all":"^4.1.3","prettier":"^2.0.5","rimraf":"^2.6.2","source-map-loader":"^1.1.3","style-loader":"^1.0.0","ts-jest":"^26.0.0","ts-loader":"^8.0.0","typescript":"~4.1.3","webpack":"^5.0.0","webpack-cli":"^4.0.0"},"dependencies":{"@jupyter-widgets/base":"^2 || ^3 || ^4.0.0","@types/node":"^14.14.35","lodash":"^4.17.21"},"keywords":["jupyter","jupyterlab","jupyterlab-extension","widgets"]}')}}]);