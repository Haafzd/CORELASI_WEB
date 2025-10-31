$(document).ready(function() {
    
    // --- 1. (Collapse/Expand) ---
    $('#toggle-collapse-btn').on('click', function() {
        $(this).toggleClass('is-toggled');
        
        $('#material-content').toggleClass('is-collapsed');
    });

    // --- 2. Modal (Buka/Tutup) ---
    const $modal = $('#add-material-modal');

    $('#add-material-btn').on('click', function() {
        $modal.addClass('is-active');
    });

    $('#close-modal-btn').on('click', function() {
        $modal.removeClass('is-active');
    });

    $modal.on('click', function(event) {
        if ($(event.target).is($modal)) {
            $modal.removeClass('is-active');
        }
    });
    
    $('#add-material-form').on('submit', function(event) {
        event.preventDefault();
        alert('Materi (pura-pura) disimpan!');
        
        const namaMateri = $('#nama-materi').val();
        console.log('Nama Materi:', namaMateri);
        
        $modal.removeClass('is-active');
        
        $(this).trigger('reset');
    });

});