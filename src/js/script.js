//  z-index modals
$(document).on('show.bs.modal', '.modal', function (event) {
   let zIndex = 1040 + (10 * $('.modal:visible').length);
   $(this).css('z-index', zIndex);
   setTimeout(function() {
      $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
   }, 0);
})

window.openModal = (id, index) => {
   calcRadio.sum(id, index)
   $(id).modal('show')
}

// отключить прокрутку body когда открыт modal
$('.modal').on('hidden.bs.modal', function () {
   if($('.modal.show').length) {
      $('body').addClass('modal-open')
   }
})

// открыть modal
// $('#ForTheir').modal('show')