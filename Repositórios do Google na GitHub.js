<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Consumindo API GitHub</title>
</head>
<body>
    <h1>Repositórios do Google na GitHub</h1>

    <div id="repositorios"></div>

    <script>
        // Função para buscar repositórios
        function buscarRepositorios() {
            fetch('https://api.github.com/users/google/repos')
                .then(response => response.json())
                .then(data => {
                    const repos = document.getElementById('repositorios');

                    // Limpar lista de repositórios anteriores
                    repos.innerHTML = '';

                    // Criar lista de repositórios
                    data.forEach(repo => {
                        const item = document.createElement('li');
                        item.innerHTML = `
                            <h3>${repo.name}</h3>
                            <p>${repo.description || 'Sem descrição'}</p>
                            <a href="${repo.html_url}" target="_blank">Acessar repositório</a>
                        `;

                        repos.appendChild(item);
                    });
                });
        }

        // Buscar repositórios ao carregar a página
        buscarRepositorios();
    </script>
</body>
</html>
