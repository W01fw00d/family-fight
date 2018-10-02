var $pj1 = new Pj($('.ken'), document.getElementById('pj2_hp_bar'), 'ken', 100),
    $pj2 = new Pj($('.guile'), document.getElementById('pj2_hp_bar'), 'guile', 100, ),
    $battle_ground = new BattleGround();

setInterval(function(){
    $pj1.position = $pj1.selector.offset();
    $pj2.position = $pj2.selector.offset();
    
    if (isPj1AtPj2Right()) {
        $pj1.selector.addClass('flip'); 
    } else {
        $pj1.selector.removeClass('flip'); 
    }
}, 250);

var isColision = function(){
    return $pj2.position.left - $pj1.position.left <= $pj2.width && $pj2.position.left - $pj1.position.left >= -$pj2.width;
};

var isPj1AtPj2Right = function(){
    return $pj2.position.left < $pj1.position.left;
};
