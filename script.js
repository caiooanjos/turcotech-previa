const base='https://wa.me/5545999914625?text=';
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=base+encodeURIComponent(a.dataset.wa);a.target='_blank';a.rel='noopener';});
document.querySelector('#quote').addEventListener('submit',e=>{e.preventDefault();const device=document.querySelector('#device').value;const problem=document.querySelector('#problem').value.trim();if(!problem)return;window.open(base+encodeURIComponent(`Olá! Vim pelo site da TurcoTech. Gostaria de um orçamento para ${device.toLowerCase()}. ${problem}`),'_blank','noopener');});
