(function () {
    const KEY = "corelasi_session";
    function getSession() {
        try {
            return JSON.parse(localStorage.getItem(KEY)) || null;
        }
        catch (e) {
            return null;
        }
    }

    function setSession(sess) {
        localStorage.setItem(KEY, JSON.stringify(sess));
    }

    function clearSession() {
        localStorage.removeItem(KEY);
    }

    async function loadUsers() {
        try { const r = await fetch("data/users.json"); if (!r.ok) throw 0; return await r.json(); }
        catch (e) {
            return [
                { "id": 1, "name": "Guru A", "role": "teacher", "email": "gurua@school.id", "password": "password123" },
                { "id": 2, "name": "Guru B", "role": "teacher", "email": "gurub@school.id", "password": "password456" },
                { "id": 3, "name": "Guru C", "role": "teacher", "email": "guruc@school.id", "password": "password789" }
            ];
        }
    }
    window.CorelasiAuth = { getSession, setSession, clearSession, loadUsers };

    document.addEventListener("DOMContentLoaded", () => {
        const sess = getSession();
        const requireRole = document.body.getAttribute("data-require-role");

        if (requireRole) {
            if (!sess) { alert("Silakan login terlebih dahulu."); location.href = "signin.html"; return; }
            if (sess.role !== requireRole) {
                alert("Anda tidak memiliki akses ke halaman ini. Mengalihkan ke dashboard Anda.");
                location.href = (sess.role === "admin") ? "admin.html" : (sess.role === "teacher") ? "dashboard.html" : "student.html";
                return;
            }
        }
    });
})();
