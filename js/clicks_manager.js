$('#a').click(punch);
$('#z').click(kick);
$('#e').click(rkick);
$('#q').click(tatsumaki);
$('#s').click(hadoken);
$('#d').click(shoryuken);
$('#up').click(jump);

$('#down').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { kneel(); }
    else { $pj1.selector.removeClass('kneel'); }
});

$('#left').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkLeft(); }
    else { $pj1.selector.removeClass('walk'); }
});

$('#right').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkRight(); }
    else { $pj1.selector.removeClass('walk'); }
});
