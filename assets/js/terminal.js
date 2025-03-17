// Interactive terminal commands
const commandInput = document.getElementById('command-input');
const terminalBody = document.querySelector('.terminal-body');

commandInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const command = commandInput.value.trim().toLowerCase();
        let response = '';

        switch (command) {
            case 'about':
                window.location.href = '/about';
                break;
            case 'projects':
                window.location.href = '/projects';
                break;
            case 'labs':
                window.location.href = '/labs';
                break;
            case 'tools':
                window.location.href = '/tools';
                break;
            case 'contact':
                window.location.href = '/contact';
                break;
            default:
                response = `> Unknown command: ${command}. Type 'help' for available commands.`;
                terminalBody.innerHTML += `<p class="response">${response}</p>`;
        }

        commandInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
});
