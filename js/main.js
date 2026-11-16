(function () {
    var btn = document.getElementById('theme-toggle');
    var html = document.documentElement;
    var saved = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    html.setAttribute('data-theme', saved);
    setIcon(saved);

    btn.addEventListener('click', function () {
        var t = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', t);
        localStorage.setItem('theme', t);
        setIcon(t);
    });

    function setIcon(t) {
        btn.innerHTML = '<i class="fas fa-' + (t === 'light' ? 'moon' : 'sun') + '"></i>';
        btn.setAttribute('aria-label', 'Switch to ' + (t === 'light' ? 'dark' : 'light') + ' mode');
    }
})();

window.addEventListener('scroll', function () {
    var top = document.getElementById('topper');
    top.style.display = window.scrollY > 280 ? 'flex' : 'none';

    var nav = document.querySelector('.site-nav');
    var stuck = window.scrollY > nav.offsetHeight;
    if (stuck !== nav.classList.contains('is-stuck')) {
        if (stuck) document.body.style.setProperty('--nav-h', nav.offsetHeight + 'px');
        nav.classList.toggle('is-stuck', stuck);
        document.body.classList.toggle('nav-stuck', stuck);
    }
}, { passive: true });
