
const selectSection = document.querySelectorAll('.js-scroll')
const proporcao = window.innerHeight * 0.6

function initAnimation() {
    if(selectSection.length) {
        function animaScroll() {
            selectSection.forEach((item) => {
                const porcentagem = (item.getBoundingClientRect().top - proporcao) < 0
                if(porcentagem) {
                    item.classList.add('ativo')
                }
            })
        }
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}

initAnimation()

const links = document.querySelectorAll('a[href^="#"]')

function initScrollSuave() {
    if(links.length) {
        function scrollSuave(event) {
            event.preventDefault()
            const href = event.currentTarget.getAttribute('href')
            const section = document.querySelector(href)

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

        links.forEach((link) => {
            link.addEventListener('click', scrollSuave)
        })
    }
}

initScrollSuave()