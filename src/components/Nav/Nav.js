import { analytics } from "@/js/analytics";

const phoneNumber = document.getElementById('contact')
phoneNumber.addEventListener('click', () => {
   analytics('contact')
})