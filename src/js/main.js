document.querySelector('.btn-hidden-social-network')
    .addEventListener('click', () => {
        document.querySelector('.btn-hidden-social-network')
            .style.display = 'none';

        document.querySelector('.social_network')
            .style.display = 'inline';
    })

document.querySelector('.btn-back')
    .addEventListener('click',() => {
        document.querySelector('.social_network')
            .style.display = 'none';

        document.querySelector('.btn-hidden-social-network')
            .style.display = 'inline';
    })