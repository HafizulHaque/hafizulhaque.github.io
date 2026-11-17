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

(function () {
    var nav = document.querySelector('.site-nav');
    var toggle = document.getElementById('nav-toggle');
    var scrim = document.getElementById('nav-scrim');
    var mobile = window.matchMedia('(max-width: 800px)');

    function setOpen(open) {
        nav.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        toggle.firstElementChild.className = 'fas fa-' + (open ? 'times' : 'bars');
        scrim.hidden = !open;
    }

    toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('nav-open'));
    });
    scrim.addEventListener('click', function () { setOpen(false); });
    document.getElementById('nav-links').addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
    });
    mobile.addEventListener('change', function (e) {
        if (!e.matches) setOpen(false);
    });
})();
