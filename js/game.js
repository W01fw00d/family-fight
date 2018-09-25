var $pj1 = new Pj($('.ken'), 'ken', 100),
    $pj2 = new Pj($('.guile'), 'guile', 100),
    $ground_limit_left = 0,
    $ground_limit_right = 370,
    $fireballPos;

// isColision loop
// ----------------------------------- \
setInterval(function(){
    $pj1.position = $pj1.selector.offset();
    $pj2.position = $pj2.selector.offset();
    
    if (isKenAtGuileRight()) {
        $pj1.selector.addClass('flip'); 
    } else {
        $pj1.selector.removeClass('flip'); 
    }
}, 250);

var isColision = function(){
    return $pj2.position.left - $pj1.position.left <= $pj2.width && $pj2.position.left - $pj1.position.left >= -$pj2.width;
};

var isKenAtGuileRight = function(){ 
    return $pj2.position.left < $pj1.position.left;
};
