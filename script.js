function kirimPengaduan() {
    const nama = document.getElementById("nama").value;
    const kategori = document.getElementById("kategori").value;
    const isi = document.getElementById("isi").value;

    if (nama === "" || kategori === "" || isi === "") {
        alert("Mohon lengkapi semua data!");
        return;
    }

    const data = {
        nama: nama,
        kategori: kategori,
        isi: isi,
        tanggal: new Date().toLocaleString("id-ID")
    };

    let pengaduan = JSON.parse(localStorage.getItem("pengaduan")) || [];

    pengaduan.push(data);

    localStorage.setItem("pengaduan", JSON.stringify(pengaduan));

    alert("Pengaduan berhasil dikirim!");

    document.getElementById("formPengaduan").reset();
}

function tampilkanPengaduan() {
    const tabel = document.getElementById("dataPengaduan");

    if (!tabel) return;

    let pengaduan = JSON.parse(localStorage.getItem("pengaduan")) || [];

    tabel.innerHTML = "";

    pengaduan.forEach((data, index) => {
        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${data.nama}</td>
                <td>${data.kategori}</td>
                <td>${data.isi}</td>
                <td>${data.tanggal}</td>
                <td>
                    <button class="delete" onclick="hapusPengaduan(${index})">
                        Hapus
                    </button>
                </td>
            </tr>
        `;
    });
}

function hapusPengaduan(index) {
    if (confirm("Yakin ingin menghapus pengaduan ini?")) {

        let pengaduan =
            JSON.parse(localStorage.getItem("pengaduan")) || [];

        pengaduan.splice(index, 1);

        localStorage.setItem(
            "pengaduan",
            JSON.stringify(pengaduan)
        );

        tampilkanPengaduan();
    }
}

function loginAdmin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        alert("Login berhasil!");
        window.location.href = "admin.html";
    } else {
        alert("Username atau password salah!");
    }
}