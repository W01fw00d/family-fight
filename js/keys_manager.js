// on keydown events
// ----------------------------------- 
$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') { 
        
        // s - hadoken
        if (e.keyCode == 83 
            && !$pj1.selector.hasClass('tatsumaki') 
            && !$pj1.selector.hasClass('shoryuken') 
            && !$pj1.selector.hasClass('hadoken') 
            && !$pj1.selector.hasClass('punch') 
            && !$pj1.selector.hasClass('kick') 
            && !$pj1.selector.hasClass('reversekick')
        ) { 
            hadoken();
        }

        // d - shoryuken
        if (e.keyCode == 68 
            && !$pj1.selector.hasClass('tatsumaki')
            && !$pj1.selector.hasClass('shoryuken') 
            && !$pj1.selector.hasClass('hadoken') 
            && !$pj1.selector.hasClass('punch') 
            && !$pj1.selector.hasClass('kick') 
            && !$pj1.selector.hasClass('reversekick')
            && !$pj1.selector.hasClass('jump')
        ) { 
            shoryuken();
        }

        // q - tatsumaki senpuu kyaku
        if (e.keyCode == 81 
            && !$pj1.selector.hasClass('tatsumaki') 
            && !$pj1.selector.hasClass('shoryuken') 
            && !$pj1.selector.hasClass('hadoken') 
            && !$pj1.selector.hasClass('punch') 
            && !$pj1.selector.hasClass('kick') 
            && !$pj1.selector.hasClass('reversekick')
            && !$pj1.selector.hasClass('jump')
        ) { 
            tatsumaki();
        }

        // a - punch
        if (e.keyCode == 65 
            && !$pj1.selector.hasClass('punch') 
            && !$pj1.selector.hasClass('hadoken') 
            && !$pj1.selector.hasClass('shoryuken') 
            && !$pj1.selector.hasClass('tatsumaki') 
        ) {
            punch(); 
        }

        // e - kick
        if (e.keyCode == 90 
            && !$pj1.selector.hasClass('kick') 
            && !$pj1.selector.hasClass('hadoken') 
            && !$pj1.selector.hasClass('shoryuken') 
            && !$pj1.selector.hasClass('tatsumaki')
        ) { 
            kick();
        }

        // r - reverse kick
        if (e.keyCode == 69 
            && !$pj1.selector.hasClass('reversekick') 
            && !$pj1.selector.hasClass('kick') 
            && !$pj1.selector.hasClass('hadoken') 
            && !$pj1.selector.hasClass('shoryuken') 
            && !$pj1.selector.hasClass('tatsumaki')
        ) { 
            rkick();
        }

        // up - jump
        if (e.keyCode == 38 
            && !$pj1.selector.hasClass('jump') 
            && !$pj1.selector.hasClass('reversekick') 
            && !$pj1.selector.hasClass('kick') 
            && !$pj1.selector.hasClass('hadoken') 
            && !$pj1.selector.hasClass('shoryuken') 
            && !$pj1.selector.hasClass('tatsumaki')
        ) { 
            jump();
        }

        // down - kneel
        if (e.keyCode == 40 
            && !$pj1.selector.hasClass('kneel') 
            && !$pj1.selector.hasClass('jump') 
            && !$pj1.selector.hasClass('reversekick') 
            && !$pj1.selector.hasClass('kick') 
            && !$pj1.selector.hasClass('hadoken') 
            && !$pj1.selector.hasClass('shoryuken') 
            && !$pj1.selector.hasClass('tatsumaki')
        ) { 
            kneel();
        }
    
    
        // ← flip 
        // if (e.keyCode == 37) $pj1.selector.addClass('flip');
        // → unflip 
        // if (e.keyCode == 39) $pj1.selector.removeClass('flip');

        // ←← →→ walking
        if (e.keyCode == 37) { walkLeft(); }
        if (e.keyCode == 39) { walkRight(); }
    }
    else { // keyup
        $pj1.selector.removeClass('walk kneel');
    }
});