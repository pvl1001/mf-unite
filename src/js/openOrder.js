window.openOrder = (act, eventLabel) => {
   $('#order .btn').attr('onclick', `analytics('${act + eventLabel}')`)
   analytics('order_' + eventLabel)
}