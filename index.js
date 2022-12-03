const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Buenas ahí, ya sabes que pa cualquier cosa aquí andamos, que pases feliz navidad y próspero año nuevo con tu familia. PD: "En los logros siempre hay cosas que no ven, cosas que no sienten, incluso cuando pasas por momentos en los no te comprenden, pero a pesar de eso, no te detengas, confía en tí y recuerda, que tú eres el sol que ilumina lo inimaginable que puede haber" JMMR 2022 💖😉')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
