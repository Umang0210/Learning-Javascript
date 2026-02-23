let score = 82
switch (true) {
    case (score <= 50 && score >= 20):
        console.log("Grade C");
        break;
    case (score <= 70 && score >= 50):
        console.log("Grade B");
        break;
    case (score <= 80 && score >= 70):
        console.log("Grade A");
        break;
    default:
        console.log("Grade D");
}