function highlightsForWhite(piece, position) {
	position_alphabet = position.split('')[0].charCodeAt(0);
    position_number   = parseInt(position.split('')[1]);

	ids = [];
    switch(piece) {
        case "♔":
            temp_ids = [
            		String.fromCharCode(position_alphabet) + (position_number + 1), String.fromCharCode(position_alphabet) + (position_number - 1),
            		String.fromCharCode(position_alphabet + 1) + (position_number), String.fromCharCode(position_alphabet - 1) + (position_number),
            		String.fromCharCode(position_alphabet + 1) + (position_number + 1), String.fromCharCode(position_alphabet - 1) + (position_number - 1),
            		String.fromCharCode(position_alphabet + 1) + (position_number - 1), String.fromCharCode(position_alphabet - 1) + (position_number + 1),
            ];
            temp_ids.forEach(id => {
            	if (document.getElementById(id) != null && document.getElementById(id).innerHTML == "&nbsp;") {
            		ids.push(id);
            	}
            });
            break;
        case "♕":
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_num > 1) {
                temp_pos_num -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_num < 8) {
                temp_pos_num += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97) {
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104) {
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97 && temp_pos_num > 1) {
                temp_pos_num -= 1;
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104 && temp_pos_num < 8) {
                temp_pos_num += 1;
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97 && temp_pos_num < 8) {
                temp_pos_num += 1;
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104 && temp_pos_num > 1) {
                temp_pos_num -= 1;
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            break;
        case "♖":
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_num > 1) {
                temp_pos_num -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_num < 8) {
                temp_pos_num += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97) {
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104) {
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            break;
        case "♗":
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97 && temp_pos_num > 1) {
                temp_pos_num -= 1;
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104 && temp_pos_num < 8) {
                temp_pos_num += 1;
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97 && temp_pos_num < 8) {
                temp_pos_num += 1;
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104 && temp_pos_num > 1) {
                temp_pos_num -= 1;
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            break;
        case "♘":
            ids = [
                String.fromCharCode(position_alphabet + 2) + (position_number + 1) , String.fromCharCode(position_alphabet + 2) + (position_number - 1), // right
                String.fromCharCode(position_alphabet - 2) + (position_number + 1) , String.fromCharCode(position_alphabet - 2) + (position_number - 1), // left
                String.fromCharCode(position_alphabet + 1) + (position_number + 2) , String.fromCharCode(position_alphabet - 1) + (position_number + 2), // up
                String.fromCharCode(position_alphabet + 1) + (position_number - 2) , String.fromCharCode(position_alphabet - 1) + (position_number - 2), // down
            ];
            break;
        case "♙":
            id = String.fromCharCode(position_alphabet) + (position_number + 1);
            if (document.getElementById(id) != null && document.getElementById(id).innerHTML == "&nbsp;") {
                ids.push(id);
            }
            id = String.fromCharCode(position_alphabet) + (position_number + 2);
            if (document.getElementById(id) != null && document.getElementById(id).innerHTML == "&nbsp;" && ids.length > 0) {
                ids.push(id);
            }
            break;
    }
    return ids;
}
function highlightsForBlack(piece, position) {
	position_alphabet = position.split('')[0].charCodeAt(0);
    position_number   = parseInt(position.split('')[1]);

	ids = [];
	switch(piece) {
        case "♚":
            temp_ids = [
            		String.fromCharCode(position_alphabet) + (position_number + 1), String.fromCharCode(position_alphabet) + (position_number - 1),
            		String.fromCharCode(position_alphabet + 1) + (position_number), String.fromCharCode(position_alphabet - 1) + (position_number),
            		String.fromCharCode(position_alphabet + 1) + (position_number + 1), String.fromCharCode(position_alphabet - 1) + (position_number - 1),
            		String.fromCharCode(position_alphabet + 1) + (position_number - 1), String.fromCharCode(position_alphabet - 1) + (position_number + 1),
            ];
            temp_ids.forEach(id => {
            	if (document.getElementById(id) != null && document.getElementById(id).innerHTML == "&nbsp;") {
            		ids.push(id);
            	}
            });
            break;
        case "♛":
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_num > 1) {
                temp_pos_num -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_num < 8) {
                temp_pos_num += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97) {
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104) {
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97 && temp_pos_num > 1) {
                temp_pos_num -= 1;
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104 && temp_pos_num < 8) {
                temp_pos_num += 1;
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97 && temp_pos_num < 8) {
                temp_pos_num += 1;
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104 && temp_pos_num > 1) {
                temp_pos_num -= 1;
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            break;
        case "♜":
           temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_num > 1) {
                temp_pos_num -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_num < 8) {
                temp_pos_num += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97) {
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104) {
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            break;
        case "♝":
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97 && temp_pos_num > 1) {
                temp_pos_num -= 1;
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104 && temp_pos_num < 8) {
                temp_pos_num += 1;
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp > 97 && temp_pos_num < 8) {
                temp_pos_num += 1;
                temp_pos_alp -= 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            temp_pos_num = position_number;
            temp_pos_alp = position_alphabet;
            while (temp_pos_alp < 104 && temp_pos_num > 1) {
                temp_pos_num -= 1;
                temp_pos_alp += 1;
                id = String.fromCharCode(temp_pos_alp) + (temp_pos_num);
                if (document.getElementById(id) == null || document.getElementById(id).innerHTML != "&nbsp;") {
                    break;
                } else {
                    ids.push(id);
                }
            }
            break;
        case "♞":
            ids = [
                String.fromCharCode(position_alphabet + 2) + (position_number + 1) , String.fromCharCode(position_alphabet + 2) + (position_number - 1), // right
                String.fromCharCode(position_alphabet - 2) + (position_number + 1) , String.fromCharCode(position_alphabet - 2) + (position_number - 1), // left
                String.fromCharCode(position_alphabet + 1) + (position_number + 2) , String.fromCharCode(position_alphabet - 1) + (position_number + 2), // up
                String.fromCharCode(position_alphabet + 1) + (position_number - 2) , String.fromCharCode(position_alphabet - 1) + (position_number - 2), // down
            ];
            break;
        case "♟":
            id = String.fromCharCode(position_alphabet) + (position_number - 1);
            if (document.getElementById(id) != null && document.getElementById(id).innerHTML == "&nbsp;") {
                ids.push(id);
            }
            id = String.fromCharCode(position_alphabet) + (position_number - 2);
            if (document.getElementById(id) != null && document.getElementById(id).innerHTML == "&nbsp;" && ids.length > 0) {
                ids.push(id);
            }
            break;
    }
    return ids;
}