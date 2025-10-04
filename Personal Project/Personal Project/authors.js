function search() {
    const input = document.getElementById('myInput');
    if (!input) return;
    const filter = input.value.trim().toLowerCase();

    const selectors = [
        '.thecard',
        '.card',
        '.cards-1 .container',
        '.card-container .card',
        '.card-item',
        '.book-card'
    ];

    const seen = new Set();
    const cards = [];

    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (el && !seen.has(el)) {
                seen.add(el);
                cards.push(el);
            }
        });
    });

    if (cards.length === 0) {
        document.querySelectorAll('.cards-1 h3, .card-content h3, h3').forEach(h3 => {
            const container = h3.closest('.thecard, .card, .cards-1 .container, .card-item') || h3.parentElement;
            if (container && !seen.has(container)) {
                seen.add(container);
                cards.push(container);
            }
        });
    }

    cards.forEach(card => {
        if (!card) return;
        const titleEl = card.querySelector('.card-content h3, .thefront h3, h3');
        const title = titleEl ? titleEl.textContent.trim().toLowerCase() : '';
        const matched = title.includes(filter);
        if (filter === '' || matched) {
            card.style.display = '';
            card.setAttribute('aria-hidden', 'false');
        } else {
            card.style.display = 'none';
            card.setAttribute('aria-hidden', 'true');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.thecard').forEach(card => {
        if (!card.hasAttribute('tabindex')) card.setAttribute('tabindex', '0');

        card.addEventListener('click', function (e) {
            const insideBackAction = e.target.closest('.theback a, .theback button');
            if (insideBackAction) return;

            // toggle show state
            card.classList.toggle('show-back');
        });

        card.addEventListener('mouseleave', function () {
            card.classList.remove('show-back');
        });

        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('show-back');
            } else if (e.key === 'Escape') {
                card.classList.remove('show-back');
            }
        });
    });
});
