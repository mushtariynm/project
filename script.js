let grade = prompt('оценка')

switch (grade) {
    case 'A':
        console.log('Отлично');
        break
        case 'B':
            console.log('Хорошо');
            break
            case 'C':
                console.log('Удовлетворительно');
                break
                case 'D':
                    console.log('Неудовлетворительно');
                    break
                    default:
                        console.log('Некорректная оценка');
}
let numb = 12
if(numb > 8){
    console.log(true);
} else{
    console.log(false);
}