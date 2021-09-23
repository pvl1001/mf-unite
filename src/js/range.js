class Range {
   constructor($range) {
      this.$range = $range
      this.$labels = this.$range.querySelectorAll( '.range-slider__label' )
      this.$input = this.$range.querySelector( 'input[type="range"]' )
      this.eventRange = () => {
         this.isActiveRangeProgress(  )
         this.isActiveRangeLabel(  )
         this.isChangeDesc()
         this.setSalePrice()
      }
   }

   isChangeDesc() {
      const $currentMount = this.$labels[0].children[this.$input.value].firstElementChild
      const $currentPercent = this.$labels[1].children[this.$input.value]
      const $descMount = this.$range.querySelector( '.tariff-range__desc-mounts' )
      const $descPercent = this.$range.querySelector( '.tariff-range__desc-percent' )
      $descMount.textContent = $currentMount.textContent
      $descPercent.textContent = $currentPercent.textContent
   }

   isActiveRangeProgress() {
      const $progress = this.$range.querySelector( '.mf-range__progress-active' )
      const percent = this.$input.value / this.$input.max * 100
      $progress.style.width = percent + '%'
   }

   isActiveRangeLabel() {
      this.$labels.forEach( $label => {
         Array.from($label.children).forEach( li => li.classList.remove( 'range-slider__label-active' ) )
         $label.children[this.$input.value].classList.add( 'range-slider__label-active' )
      } )
   }

   setSalePrice() {
      const $price = this.$range.querySelector('.tariff-range__price span')
      const $percent = this.$range.querySelector('.tariff-range__desc-percent')
      $price.textContent = Math.ceil(550 - 550 * (parseInt( $percent.textContent.match( /\d+/ ) ) / 100))
   }

   addEvent() {
      this.isActiveRangeProgress()
      this.isActiveRangeLabel()
      this.setSalePrice()
      this.$input.addEventListener( 'input', this.eventRange )
   }
}


window.onload = () => new Range( document.getElementById( 'range' ) ).addEvent()
