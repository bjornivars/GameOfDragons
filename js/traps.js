
    function checkTrap(tile){
        switch (tile) {
            // 
            case 4:
                alert( "Tou just got pushed out of the window. Move back 2 steps")
                return tile - 2;
            case 12:
                alert( "Tou just got pushed out of the window. Move back 3 steps")
                return tile - 3;
            case 19:
                alert( "Tou just got pushed out of the window. Move back 5 steps")
                return tile - 5;
            case 26:
                alert( "Tou just got pushed out of the window. Move back 3 steps")
                return tile - 3;
            case 35:
                alert( "Tou just got pushed out of the window. Move back 20 steps")
                return tile - 20;
            default:
                return tile;
        }
    }
    