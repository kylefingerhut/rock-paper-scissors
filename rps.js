// gets number 0, 1, or 2 randomly and assigns number one of three moves
switch (Math.floor(Math.random() * 3)) {
    case 0:
        move = "rock";
        break;
    case 1:
        move = "paper";
        break;
    case 2:
        move = "scissors";
        break;
}
