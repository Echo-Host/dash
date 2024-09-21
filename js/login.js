(function() {
    // Vérifie si l'utilisateur est authentifié
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    if (isAuthenticated !== 'true') {
        // Redirection vers la page de connexion si non authentifié
        window.location.href = 'index.html';
    }
})();
