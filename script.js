// minimal interactivity
document.addEventListener('DOMContentLoaded', function(){
  const DISCORD = "https://discord.gg/h4GZaQdRaZ";
  const btn = document.getElementById('btn-discord');
  const cta = document.getElementById('cta-discord');
  if(btn) btn.addEventListener('click', ()=> window.open(DISCORD, '_blank','noopener'));
  if(cta) cta.addEventListener('click', ()=> window.open(DISCORD, '_blank','noopener'));
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
});
