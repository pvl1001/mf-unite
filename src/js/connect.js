window.connect = () => {
   // toPlug('.tariffs')
   analytics('connect_their')
   $('#order .btn').attr('onclick', 'analytics("connect_send_their")')
}