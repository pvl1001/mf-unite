window.moreTariff = (id, i, eventLabel) => {
   openModal(id, i)
   analytics('click_button_' + eventLabel)
}