(function () {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    function setOpen(open) {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
        menu.classList.toggle('open', open);
    }

    toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Bấm vào một mục thì đóng menu
    menu.addEventListener('click', e => {
        if (e.target.closest('a')) setOpen(false);
    });

    // Nhấn Esc để đóng
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') setOpen(false);
    });

    // Quay lại màn hình rộng thì đóng menu
    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) setOpen(false);
    });
})();
