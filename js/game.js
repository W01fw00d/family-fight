var $pj1 = new Pj($('.ken'), 'ken', 100),
    $pj2_life_value = 100,
    $guile = $('.guile'),
    $ground_limit_left = 0,
    $ground_limit_right = 370,
    $fireballPos;
console.log($pj1);

// isColision loop
// ----------------------------------- \
setInterval(function(){
    $pj1.position = $pj1.selector.offset();
    $guilePos = $guile.offset();
    
    if (isKenAtGuileRight()) {
        $pj1.selector.addClass('flip'); 
    } else {
        $pj1.selector.removeClass('flip'); 
    }
}, 250);

var isColision = function(){
    return $guilePos.left - $pj1.position.left <= 75 && $guilePos.left - $pj1.position.left >= -75;
};

var isKenAtGuileRight = function(){ 
    return $guilePos.left < $pj1.position.left;
};
