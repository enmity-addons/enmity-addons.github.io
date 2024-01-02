document.addEventListener('DOMContentLoaded', function () {
    fetch('plugins.json')
        .then(response => response.json())
        .then(data => createBoxes(data))
        .catch(error => console.error('Error fetching JSON:', error));

    function createBoxes(data) {
        const container = document.getElementById('plugins');

        data.forEach(item => {
            const box = document.createElement('div');
            box.classList.add('box');

            const title = document.createElement('h2');
            title.textContent = item.title + ' by ' + item.dev;

            const desc = document.createElement('p');
            desc.textContent = item.desc;

            const button = document.createElement('button');
            button.classList.add('button');
            button.textContent = 'Install Plugin';
            button.href = item.link; 


            button.addEventListener('click', () => {
            window.open(item.link);
            });


            box.appendChild(title);
            box.appendChild(desc);
            box.appendChild(button);

            // add the boxes to the site
            container.appendChild(box);
        });
    }

});
