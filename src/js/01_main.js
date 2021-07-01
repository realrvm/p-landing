document.addEventListener("DOMContentLoaded", () => {
    const priceCards = document.querySelector(".prices__inner")

    priceCards.addEventListener("mouseover", (e) => {
        const target = e.target
        if(target.classList.contains("mixin-btn")) {
            const color = target.style.backgroundColor
            target.style.border = `1px solid ${color}`
            target.style.color = color
        }
    })

    priceCards.addEventListener("mouseout", (e) => {
        const target = e.target
        if(target.classList.contains("mixin-btn")) {
            target.style.border = `1px solid transparent`
            target.style.color = 'var(--color-white)'
        }
    })

});
