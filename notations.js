function addNotations() {
    
    notations.japanese = function(m) {
        if (m.special) {
            return translations[language].specialMoveNames[m.special] || builtinNotation(m);
        }
        return builtinNotation(m);
    }
    
    notations.western = function(m) {
        if (m.special) {
            return translations[language].specialMoveNames[m.special] || builtinNotation(m);
        }
        var move = m.move;
        var ret = move.color === 0 ? "☗" : "☖";
        ret += {
            FU: "P",
            KY: "L",
            KE: "N",
            GI: "S",
            KI: "G",
            KA: "B",
            HI: "R",
            OU: "K",
            TO: "+P",
            NY: "+L",
            NK: "+N",
            NG: "+S",
            UM: "H",
            RY: "D"
        }[move.piece];
        if (move.relative === 'H' || !move.from) {
            ret += '*';
        } else {
            if (move.relative && move.relative != '') {
                ret += '(';
                ret += move.from.x;
                ret += "0abcdefghi"[move.from.y];
                ret += ')';
            }
            if (move.capture) ret += 'x'; else ret += '-';
        }
        ret += move.to.x;
        ret += "0abcdefghi"[move.to.y];
        if (move.promote != null) {
            ret += move.promote ? '+' : '=';
        }
        return ret;
    };
    
    notations.hodges = function(m) {
        if (m.special) {
            return translations[language].specialMoveNames[m.special] || builtinNotation(m);
        }
        var move = m.move;
        var ret = move.color === 0 ? "☗" : "☖";
        ret += {
            FU: "P",
            KY: "L",
            KE: "N",
            GI: "S",
            KI: "G",
            KA: "B",
            HI: "R",
            OU: "K",
            TO: "+P",
            NY: "+L",
            NK: "+N",
            NG: "+S",
            UM: "+B",
            RY: "+R"
        }[move.piece];
        if (move.relative === 'H' || !move.from) {
            ret += '*';
        } else {
            if (move.relative && move.relative != '') {
                ret += move.from.x;
                ret += "0abcdefghi"[move.from.y];
            }
            if (move.capture) ret += 'x'; else ret += '-';
        }
        ret += move.to.x;
        ret += "0abcdefghi"[move.to.y];
        if (move.promote != null) {
            ret += move.promote ? '+' : '=';
        }
        return ret;
    };
    
    notations.hosking = function(m) {
        if (m.special) {
            return translations[language].specialMoveNames[m.special] || builtinNotation(m);
        }
        var move = m.move;
        var ret = move.color === 0 ? "☗" : "☖";
        ret += {
            FU: "P",
            KY: "L",
            KE: "N",
            GI: "S",
            KI: "G",
            KA: "B",
            HI: "R",
            OU: "K",
            TO: "+P",
            NY: "+L",
            NK: "+N",
            NG: "+S",
            UM: "+B",
            RY: "+R"
        }[move.piece];
        if (move.relative === 'H' || !move.from) {
            ret += "'";
        } else {
            if (move.relative && move.relative != '') {
                ret += move.from.x;
                ret += move.from.y;
                ret += '-';
            }
            if (move.capture) ret += 'x';
        }
        ret += move.to.x;
        ret += move.to.y;
        if (move.promote != null) {
            ret += move.promote ? '+' : '=';
        }
        return ret;
    };
    
    notations.kitao_kawasaki = function(m) {
        if (m.special) {
            return translations[language].specialMoveNames[m.special] || builtinNotation(m);
        }
        var move = m.move;
        var ret = move.color === 0 ? "☗" : "☖";
        ret += {
            FU: "歩",
            KY: "香",
            KE: "桂",
            GI: "銀",
            KI: "金",
            KA: "角",
            HI: "飛",
            OU: "玉",
            TO: "+歩",
            NY: "+香",
            NK: "+桂",
            NG: "+銀",
            UM: "馬",
            RY: "龍"
        }[move.piece];
        if (move.relative === 'H' || !move.from) {
            ret += '*';
            ret += move.to.x;
            ret += move.to.y;
        } else if (move.same) {
            ret += 'x';
        } else {
            if (move.relative && move.relative != '') {
                ret += '(';
                ret += move.from.x;
                ret += move.from.y;
                ret += ')';
            }
            if (move.capture) ret += 'x'; else ret += '-';
            ret += move.to.x;
            ret += move.to.y;
        }
        if (move.promote != null) {
            ret += move.promote ? '+' : '=';
        }
        return ret;
    };
    
    notations.sasserson = function(m) {
        if (m.special) {
            return translations[language].specialMoveNames[m.special] || builtinNotation(m);
        }
        var move = m.move;
        var ret = move.color === 0 ? "☗" : "☖";
        ret += move.to.x;
        ret += move.to.y;
        ret += {
            FU: "fu",
            KY: "kyo",
            KE: "kei",
            GI: "gin",
            KI: "kin",
            KA: "kk",
            HI: "hi",
            OU: "gy",
            TO: "to",
            NY: "+kyo",
            NK: "+kei",
            NG: "+gin",
            UM: "uma",
            RY: "ryu"
        }[move.piece];
        if (move.relative === 'H' || !move.from) {
            ret += '□';
        } else {
            if (move.relative && move.relative != '') {
                var v,h
                switch (Math.sign(move.to.y-move.from.y)) {
                    case 0: v = '-'; break;
                    case 1: v = move.color === 0 ? "d" : "u"; break;
                    case -1: v = move.color === 0 ? "u" : "d"; break;
                }
                switch (Math.sign(move.to.x-move.from.x)) {
                    case 0: h = '-'; break;
                    case 1: h = move.color === 0 ? "l" : "r"; break;
                    case -1: h = move.color === 0 ? "r" : "l"; break;
                }
                switch (v+h) {
                    case 'u-': ret += '↑'; break;
                    case 'ur': ret += '↗'; break;
                    case '-r': ret += '→'; break;
                    case 'dr': ret += '↘'; break;
                    case 'd-': ret += '↓'; break;
                    case 'dl': ret += '↙'; break;
                    case '-l': ret += '←'; break;
                    case 'ul': ret += '↖'; break;
                }
            }
        }
        if (move.promote != null) {
            ret += move.promote ? '+' : '=';
        }
        return ret;
    }
}