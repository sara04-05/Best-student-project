function search() {
            const input = document.getElementById('myInput');
            const filter = input.value.toLowerCase();
            const cardDivs = document.querySelectorAll('.card');

            cardDivs.forEach(function(card) {
                const cardTitle = card.querySelector('.card-content h3').textContent.toLowerCase();
                if (cardTitle.includes(filter)) {
                    card.style.display = '';  
                } else {
                    card.style.display = 'none';  
                }
            });
        }
