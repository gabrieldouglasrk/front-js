export default function verificarPesoIdeal (resultIMC) {
    if (resultIMC > 18) {
        return(" Você está com o peso ideal!");
    } if (resultIMC < 18) {
        return(" Você está acima do peso");
    } else {
        return "O valor digitado não foi reconhecido";
    }
}