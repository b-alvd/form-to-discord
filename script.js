document.getElementById('discordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nom = document.getElementById('nom').value;
    var message = document.getElementById('message').value;

    var webhookUrl = 'LE_LIEN_WEBHOOK_CEST_ICI';

    var requestData = {
        username: 'Test Formulaire',
        embeds: [{
            title: 'Nouveau message du formulaire',
            color: 0xFF6600, 
            fields: [
                { name: 'Nom', value: nom, inline: true },
                { name: 'Message', value: message }
            ]
        }]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de l\'envoi du message à Discord.');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
        document.getElementById('popup').style.display = 'block';
        setTimeout(function() {
            document.getElementById('popup').style.display = 'none';
        }, 3000);
        document.getElementById('nom').value = '';
        document.getElementById('message').value = '';
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'envoi du message à Discord.');
    });
});
