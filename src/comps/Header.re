/* [@bs.module "../assts/img/keytty.app.png"] external img : string = "default"; */
let img : string = [%raw "require('../assts/img/keytty.app.png')"];

let component = ReasonReact.statelessComponent("Header");
let s = ReasonReact.string;
let title = " Try Keytty";
let subtitle = "Try Keytty app without installing";

let make = (_children) => {
  ...component,
  render: self =>
    <div>
      <img src=(img) />
      (s(title))
      <div>
      (s(subtitle))
      </div>
    </div>,
};
