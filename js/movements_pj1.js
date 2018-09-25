// moves
// ----------------------------------- \
var punch = function(){
    $pj1.selector.addClass('punch'); 
    soundManager.play('huh1');
    if (isColision()) {
        soundManager.play('hit1');
        $guile.addClass('hit1');
        setTimeout(function() { $guile.removeClass('hit1'); }, 500);
    }
    setTimeout(function() { $pj1.selector.removeClass('punch'); }, 150);
};

var kick = function(){
    $pj1.selector.addClass('kick');
    soundManager.play('huh3');
    if (isColision()) { 
        soundManager.play('hit1');
        $guile.addClass('hit2');
        setTimeout(function() { $guile.removeClass('hit2'); }, 500);
    }
    setTimeout(function() { $pj1.selector.removeClass('kick'); }, 500);
};

var rkick = function(){
    $pj1.selector.addClass('reversekick');
    soundManager.play('huh2');
    if (isColision()) { 
        soundManager.play('hit1');
        $guile.addClass('hit2');
        setTimeout(function() { $guile.removeClass('hit2'); }, 500);
    }
    setTimeout(function() { $pj1.selector.removeClass('reversekick'); }, 500); 
};

var tatsumaki = function(){
    soundManager.play('tatsumaki');
    $pj1.selector.addClass('tatsumaki');
    if (isColision()) { 
        soundManager.play('hit2',{
            multiShotEvents: true, 
            onfinish:function() {
                soundManager.play('hit2').play('hit2');
            }
        });
    }
    setTimeout(function() { $pj1.selector.addClass('down'); }, 1500); 
    setTimeout(function() { $pj1.selector.removeClass('tatsumaki down'); }, 2000);
};

var hadoken = function(){
    $pj1.selector.addClass('hadoken'); 
    soundManager.play('hado', {
        multiShotEvents: true, 
        onfinish:function() {
            soundManager.play('ken');
        }
    });
    setTimeout(function() { $pj1.selector.removeClass('hadoken'); }, 500); 
    setTimeout(function() {
        var $fireball = $('<div/>', { class:'fireball' });
        $fireball.appendTo($pj1.selector);

        var isFireballColision = function(){ 
            return ($guilePos.left - $fireballPos.left <= 75 && $guilePos.left - $fireballPos.left >= -75);
        };

        var explodeIfColision = setInterval(function(){

            $fireballPos = $fireball.offset();

            if (isFireballColision()) {
                $fireball.addClass('explode').removeClass('moving').css('marginLeft','+=22px');
                clearInterval(explodeIfColision);
                soundManager.play('hit5');
                setTimeout(function() { $fireball.remove(); }, 500); 
                $guile.addClass('hit2');
                setTimeout(function() { $guile.removeClass('hit2'); }, 500);
            }

        }, 50);

        setTimeout(function() { $fireball.addClass('moving'); }, 20);

        setTimeout(function() { 
            $fireball.remove(); 
            clearInterval(explodeIfColision);
        }, 3020);

    }, (250));
};

var shoryuken = function(){
    soundManager.play('shoryu', {
        multiShotEvents: true, 
        onfinish:function() {
            soundManager.play('ken');
        }
    });
    if (isColision()) { 
        soundManager.play('hit2',{
            multiShotEvents: true, 
            onfinish:function() {
                soundManager.play('hit2');
            }
        });
    }
    $pj1.selector.addClass('shoryuken');
    setTimeout(function() { $pj1.selector.addClass('down'); }, 500); 
    setTimeout(function() { $pj1.selector.removeClass('shoryuken down'); }, 1000);
};

var jump = function(){
    $pj1.selector.addClass('jump');
    setTimeout(function() { $pj1.selector.addClass('down'); }, 500); 
    setTimeout(function() { $pj1.selector.removeClass('jump down'); }, 1000); 
};

var kneel = function(){
    $pj1.selector.addClass('kneel');
};

var walkLeft = function(){
    if (parseInt($pj1.selector.css('marginLeft').replace("px", "")) > $ground_limit_left) {
        $pj1.selector.addClass('walk').css({ marginLeft:'-=10px' });
    }
};

var walkRight = function(){
    if (parseInt($pj1.selector.css('marginLeft').replace("px", "")) < $ground_limit_right) {
        $pj1.selector.addClass('walk').css({ marginLeft:'+=10px' });
    }
};
