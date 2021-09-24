class Range {
   constructor(rangeProps) {
      this.$labels = rangeProps.$labels
      this.$input = rangeProps.$input
      this.$descMount = rangeProps.$descMount
      this.$descPercent = rangeProps.$descPercent
      this.$progress = rangeProps.$progress
      this.$price = rangeProps.$price
      this.eventRange = () => {
         this.isActiveRangeProgress()
         this.isActiveRangeLabel()
         this.isChangeDesc()
         this.setSalePrice()
      }
   }

   isChangeDesc() {
      const $currentMount = this.$labels[0].children[this.$input.value].firstElementChild
      const $currentPercent = this.$labels[1].children[this.$input.value]
      this.$descMount.textContent = $currentMount.textContent
      this.$descPercent.textContent = $currentPercent.textContent
   }

   isActiveRangeProgress() {
      const percent = this.$input.value / this.$input.max * 100
      this.$progress.style.width = percent + '%'
   }

   isActiveRangeLabel() {
      this.$labels.forEach( $label => {
         Array.from( $label.children ).forEach( li => li.classList.remove( 'range-slider__label-active' ) )
         $label.children[this.$input.value].classList.add( 'range-slider__label-active' )
      } )
   }

   setSalePrice() {
      const price = 550
      this.$price.textContent = Math.ceil( price - price * (parseInt( this.$descPercent.textContent.match( /\d+/ ) ) / 100) )
   }

   addEvent() {
      this.isActiveRangeProgress()
      this.isActiveRangeLabel()
      this.setSalePrice()
      this.$input.addEventListener( 'input', this.eventRange )
   }
}


window.onload = () => {
   const $range = document.getElementById( 'range' )
   const $labels = $range.querySelectorAll( '.range-slider__label' )
   const $input = $range.querySelector( 'input[type="range"]' )
   const $descMount = $range.querySelector( '.tariff-range__desc-mounts' )
   const $descPercent = $range.querySelector( '.tariff-range__desc-percent' )
   const $progress = $range.querySelector( '.mf-range__progress-active' )
   const $price = $range.querySelector( '.tariff-range__price span' )

   const rangeProps = {$labels, $input, $descMount, $descPercent, $progress, $price}
   new Range( rangeProps ).addEvent()
}
