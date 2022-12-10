window.onload = function () {
    alert('O numero dos candidatos são:\n 07, 09, 10, 13, 30');
}

class funcoes {

    inserir(valor) {

        let campo_1 = document.querySelector('.campo1').value;
        let campo_2 = document.querySelector('.campo2').value;

        let somNumeros = new Audio();
        somNumeros.src = "audios/numeros.mp3";
        somNumeros.play();

        if (campo_1 == "") {
            document.querySelector('.campo1').value = valor;
        }
        else if (campo_2 == "") {
            document.querySelector('.campo2').value = valor;
        }

        this.setarJogador();
    }

    corrigir() {

        let somCorrige = new Audio();
        somCorrige.src = "audios/corrige.mp3";
        somCorrige.play();

        document.querySelector('.campo1').value = "";
        document.querySelector('.campo2').value = "";
        document.querySelector('.imgJogador').src = 'imagens/imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg'
        document.querySelector('.nome').value = "";
        document.querySelector('.pais').value = "";
        document.querySelector('.voto').innerHTML = "...";
    }

    setarJogador() {
        this.gravarJogadores();

        let campo_1 = parseInt(document.querySelector('.campo1').value);
        let campo_2 = parseInt(document.querySelector('.campo2').value);
        let candidato = (campo_1 * 10) + campo_2;

        let texto = document.querySelector('.voto');

        switch (candidato) {
            case 7:
                document.querySelector('.imgJogador').src = 'imagens/Kylian_Mbappe.jpeg';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'França';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 9:
                document.querySelector('.imgJogador').src = 'imagens/Richarlisson.jpeg';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Brasil';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 10:
                document.querySelector('.imgJogador').src = 'imagens/Lionel_Messi.jpeg';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Argentina';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 13:
                document.querySelector('.imgJogador').src = 'imagens/Enner_Valencia.jpeg';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Equador';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 30:
                document.querySelector('.imgJogador').src = 'imagens/Gavi.jpeg';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Espanha';
                document.querySelector('.voto').innerHTML = "Seu Voto Vai Para..." + sessionStorage.getItem(candidato);
                break;
            case 0:
                document.querySelector('.imgJogador').src = 'imagens/imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg';
                document.querySelector('.nome').value = sessionStorage.getItem(candidato);
                document.querySelector('.pais').value = 'Nulo';
                document.querySelector('.voto').innerHTML = "Voto Anulado...";
        }

    }

    gravarJogadores() {
        sessionStorage.setItem('7', 'Kylian Mbappe');
        sessionStorage.setItem('9', 'Richarlisson');
        sessionStorage.setItem('10', 'Lionel Messi');
        sessionStorage.setItem('13', 'Enner Valencia');
        sessionStorage.setItem('30', 'Gavi');
        sessionStorage.setItem('0', 'Nulo');
    }

    votar() {
        let campo_1 = parseInt(document.querySelector('.campo1').value);
        let campo_2 = parseInt(document.querySelector('.campo2').value);
        let pegarCandidato = (campo_1 * 10) + campo_2;
        let setarCandidato = sessionStorage.getItem(pegarCandidato);

        let somConfirma = new Audio("audios/confirma.mp3");

        let votos = 0;

        if (document.querySelector('.campo1').value == "" && document.querySelector('.campo2').value == "") {
            alert("Os campos Não Podem Ser Vazio!")
            return
        }

        else if (sessionStorage.getItem(setarCandidato) !== null) {
            votos = parseInt(sessionStorage.getItem(setarCandidato)) + 1;
            this.gravarVotos(setarCandidato, votos);
            somConfirma.play();
        }
        else {
            this.gravarVotos(setarCandidato, 1);
            somConfirma.play();
        }

        let popUp = window.open("confirmacao.html", "_blank", "toolbar=no, scrollbars=no, menubar=no, resizable=no, width=600, height=400, left=" + (screen.width - 600) / 2 + ",top=" + (screen.height - 400) / 2);

        setTimeout(() => {
            popUp.close();
            document.querySelector('.imgJogador').src = 'imagens/imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg'
            document.querySelector('.nome').value = "";
            document.querySelector('.pais').value = "";
            document.querySelector('.voto').innerHTML = "...";
            document.querySelector('.campo1').value = "";
            document.querySelector('.campo2').value = "";
        }, 2000);
    }

    gravarVotos(candidato, voto) {
        sessionStorage.setItem(candidato, voto);
    }

    branco() {
        let campo_1 = document.querySelector('.campo1').value;
        let campo_2 = document.querySelector('.campo2').value;
        let branco = 'Branco';

        let somConfirma = new Audio("audios/confirma.mp3");

        let votos = 0;

        if (campo_1 == "" && campo_2 == "") {
            if (sessionStorage.getItem(branco) !== null) {
                votos = parseInt(sessionStorage.getItem(branco)) + 1;
                this.gravarVotos(branco, votos);
                somConfirma.play();
            }
            else {
                this.gravarVotos(branco, 1);
            }
        }

        let popUp = window.open("confirmacao.html", "_blank", "toolbar=no, scrollbars=no, menubar=no, resizable=no, width=600, height=400, left=" + (screen.width - 600) / 2 + ",top=" + (screen.height - 400) / 2);

        setTimeout(() => {
            popUp.close();
            document.querySelector('.imgJogador').src = 'imagens/imagem-do-avatar-perfil-no-fundo-cinzento-142213585.jpg'
            document.querySelector('.nome').value = "";
            document.querySelector('.pais').value = "";
            document.querySelector('.voto').innerHTML = "...";
            document.querySelector('.campo1').value = "";
            document.querySelector('.campo2').value = "";
        }, 2000);
    }

    resultado() {

        document.querySelector('.resultado').innerHTML = "";

        for (let i = 0; i < 100; i++) {
            let nome = sessionStorage.getItem(i);

            if (sessionStorage.getItem(i) != null) {
                document.querySelector('.resultado').innerHTML += sessionStorage.getItem(i) + " tem " + sessionStorage.getItem(nome) + " votos<br>";
            }
        }

        document.querySelector('.resultado').innerHTML += "Votos Brancos " + sessionStorage.getItem('Branco') + "<br>";

        document.querySelector('.resultado').innerHTML += "Votos Nulos " + sessionStorage.getItem('Nulo') + "<br>";
    }
}

let urna = new funcoes();



document.querySelector('.close').addEventListener('click', e => {
    window.location.href = "/index.html"
});
