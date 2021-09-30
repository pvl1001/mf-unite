import prop from "./validate_address/prop";

window.connect = (text) => {
   analytics(`${text}vse`)
   prop.event_label = `click_button_${text}send_vse`
}