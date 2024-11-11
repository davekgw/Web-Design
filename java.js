function submitPayment() {
    // Ambil nilai input dari form
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    // Validasi input
    if (name === "" || amount === "" || amount <= 0) {
        alert("Mohon isi nama pelanggan dan jumlah pembayaran dengan benar.");
        return;
    }

    // Konfirmasi pembayaran
    const confirmation = confirm(`Anda akan membayar sebesar Rp ${amount}. Lanjutkan?`);
    if (confirmation) {
        alert("Pembayaran berhasil! Terima kasih telah membeli di Kopi Stengah.");
        document.getElementById("paymentForm").reset(); // Reset form setelah pembayaran
    }
}
