'use strict'

document.querySelector('#btn-hidden-social-network').addEventListener('click', () => {
    document.querySelector('.social_network').style.display = 'block';
    document.querySelector('#btn-hidden-social-network').style.display = 'none';
})