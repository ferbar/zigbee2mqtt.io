"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57036],{60268:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-3f1cfe82",path:"/devices/SMRZB-332.html",title:"Develco SMRZB-332 control via MQTT",lang:"en-US",frontmatter:{title:"Develco SMRZB-332 control via MQTT",description:"Integrate your Develco SMRZB-332 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-02-28T13:58:01.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SMRZB-332.md",git:{updatedTime:1648756321e3}}},88855:(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const i=(0,o(66252).uE)('<h1 id="develco-smrzb-332" tabindex="-1"><a class="header-anchor" href="#develco-smrzb-332" aria-hidden="true">#</a> Develco SMRZB-332</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SMRZB-332</td></tr><tr><td>Vendor</td><td>Develco</td></tr><tr><td>Description</td><td>Smart relay DIN</td></tr><tr><td>Exposes</td><td>power, energy, switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SMRZB-332.jpg" alt="Develco SMRZB-332"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),d={},r=(0,o(83744).Z)(d,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);