

const projects = document.getElementsByClassName('card');
projects[0].addEventListener('click', () => location.href = 'https://github.com/jchfbmoll/UniverseProject');
projects[1].addEventListener('click', () => location.href = 'https://github.com/Joch1986/Tetris');
projects[2].addEventListener('click', () => location.href = 'https://github.com/Joch1986/Portfolio');

const insta = document.getElementById('insta');
insta.addEventListener('click', () => location.href = 'https://instagram.com');

const meta = document.getElementById('meta');
meta.addEventListener('click', () => location.href = 'https://facebook.com');

window.addEventListener('scroll', function handler(event) {
  const skills = document.getElementsByClassName('progres-js');
  for(let i = 0; i < skills.length; i++){
    const element = skills[i];
    const rect = element.getBoundingClientRect();

    // Si el elemento está en la pantalla (su parte superior está dentro del viewport)
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Realizar alguna acción
      element.classList.add('bar-'+element.textContent.split('%')[0].trim());
      element.classList.remove('progres-js');
    }
  }

  if (skills.length==0){
    event.target.removeEventListener('scroll', handler);

  }

});


