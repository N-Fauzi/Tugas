function diskon() { 
    var harga = document.Diskon.harga.value; 
    var jumlah = document.Diskon.jumlah.value;
    var discon = document.Diskon.discon.value;                
    var total = harga*jumlah;
    var hargadiskon = total-(discon*total/100);

    harga = parseInt(harga);   
    jumlah = parseInt(jumlah); 
    discon = parseInt(discon);

    document.Diskon.total.value = total.toFixed(0);
    document.Diskon.hargadiskon.value = hargadiskon.toFixed(0);
}