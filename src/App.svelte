<script>
  import { slide } from 'svelte/transition'
  import { sineInOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'
  import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
  const define = () => {
    if (localStorage.yes == undefined) {
      localStorage.clear()
      localStorage.yes = 'yes'
      localStorage.vidaB = '50'
      localStorage.vidaC = '33'
      localStorage.vidaE = '46'
      localStorage.vidaF = '33'
      localStorage.vidaL = '50'
      localStorage.vidaM = '46'
      localStorage.vidaN = '50'
      localStorage.vidaZ = '64'
      localStorage.sanidadeB = '20'
      localStorage.sanidadeC = '20'
      localStorage.sanidadeE = '20'
      localStorage.sanidadeF = '20'
      localStorage.sanidadeL = '20'
      localStorage.sanidadeM = '20'
      localStorage.sanidadeN = '20'
      localStorage.sanidadeZ = '20'
    }
  }
  define()

  $: characters = [
    {
      name: 'Bartolomeu',
      força: 4,
      destreza: 4,
      constituição: 2,
      carisma: 1,
      inteligencia: -1,
      percepção: 4,
      life: localStorage.vidaB,
      totalLife: 50,
      sanidade: localStorage.sanidadeB,
      sanidadeTotal: 20,
      img: 'https://cdn.discordapp.com/attachments/831176302279000174/1017121614258778206/Bartolomeu.jpeg',
      open: false,
      atkBasico: "5 D6 +1",
      atkBasicoQuantidade: 5,
      atkBasicoModificador: 1,
      dado: 6,
      passiva: 'Rastrear o alvo pelo cheiro 🍺',
      skill1Name:'Garra:',
      skill2Name:'Mordida:',
      skill1: ' Garrada alvo único |5 D6 +1|',
      skill1Quantidade: 5,
      skill1Modificador: 1,
      skill2: ' Moidida |5 D6|',
      skill2Quantidade: 5,
      skill2Modificador: 0,
      id: 0
    },
    {
      name: 'Ciara',
      força: 1,
      destreza: 2,
      constituição: 2,
      carisma: 3,
      inteligencia: 4,
      percepção: 3,
      life: localStorage.vidaC,
      totalLife: 33,
      sanidade: localStorage.sanidadeC,
      sanidadeTotal: 20,
      img: 'https://cdn.discordapp.com/attachments/831176302279000174/1017121616146219030/Ciara.jpeg',
      open: false,
      atkBasico: "1 D6",
      atkBasicoQuantidade: 1,
      atkBasicoModificador: 0,
      dado: 6,
      passiva: "Tatuagem armazena poder após abates 4 ----- Cargas = +1 dado",
      skill1Name:'Cura:',
      skill2Name:'Purificação:',
      skill1: 'Curinha alvo único🪄 |5 D6 (Inteligência)|',
      skill1Quantidade: 5,
      skill1Modificador: 0,
      skill2: 'Tira debuff e da dano em mortos vivos |5 D6 (Inteligência)|',
      skill2Quantidade: 5,
      skill2Modificador: 0,
      id: 1
    },
    {
      name: 'Eris',
      força: 4,
      destreza: 4,
      constituição: 2,
      carisma: 1,
      inteligencia: 1,
      percepção: 3,
      life: localStorage.vidaE,
      totalLife: 46,
      sanidade: localStorage.sanidadeE,
      sanidadeTotal: 20,
      img: 'https://cdn.discordapp.com/attachments/831176302279000174/1017121613994524713/Eris.jpeg',
      open: false,
      atkBasico: "5 D6+2",
      atkBasicoQuantidade: 5,
      atkBasicoModificador: 2,
      dado: 6,
      passiva: "Olhar do desespero: Dt 15",
      skill1Name:'Tp nas sombras:',
      skill2Name:'Elementarista:',
      skill1: 'Teletransporta né',
      skill1Quantidade: 0,
      skill1Modificador: 0,
      skill2: 'Buffa a arma 🗡️',
      skill2Quantidade: 0,
      skill2Modificador: 0,
      id: 2
    },
    {
      name: 'Feather',
      força: 1,
      destreza: 2,
      constituição: 3,
      carisma: 4,
      inteligencia: 3,
      percepção: 2,
      life: localStorage.vidaF,
      totalLife: 33,
      sanidade: localStorage.sanidadeF,
      sanidadeTotal: 20,
      img: 'https://cdn.discordapp.com/attachments/831176302279000174/1017121614493651014/Feather.jpeg',
      open: false,
      atkBasico: "5 D6 +2",
      atkBasicoQuantidade: 5,
      atkBasicoModificador: 2,
      dado: 6,
      passiva: "Ao tomar ataque letal vira um ovo e volta com constituição  DT:20,18,16,14",
      skill1Name:'Manipulação:',
      skill2Name:'Cura penada:',
      skill1: 'Manipula as penas🪶 |5 D6 +2|',
      skill1Quantidade: 5,
      skill1Modificador: 2,
      skill2: 'Curinha |5 D6 +1|',
      skill2Quantidade: 5,
      skill2Modificador: 1,
      id: 3
    },
    {
      name: 'Lilith',
      força: 1,
      destreza: 2,
      constituição: 3,
      carisma: 4,
      inteligencia: 3,
      percepção: 2,
      life: localStorage.vidaL,
      totalLife: 50,
      sanidade: localStorage.sanidadeL,
      sanidadeTotal: 20,
      img: 'https://cdn.discordapp.com/attachments/831176302279000174/1017121615911329863/Lilith.jpeg',
      open: false,
      atkBasico: "2 D8 +2",
      atkBasicoQuantidade: 2,
      atkBasicoModificador: 2,
      dado: 8,
      passiva: "Sedução por 2 rounds |carisma|",
      skill1Name:'Foguinho:',
      skill2Name:'Sugadinha:',
      skill1: 'Fogo🔥 |3 D8|',
      skill1Quantidade: 3,
      skill1Modificador: 0,
      skill2: 'Da uma mamada |4 D8| fraqueza: |1 D4 +2|',
      skill2Quantidade: 4,
      skill2Modificador: 0,
      id: 4
    },
    {
      name: 'Mina',
      força: 3,
      destreza: 3,
      constituição: 3,
      carisma: 1,
      inteligencia: 2,
      percepção: 3,
      life: localStorage.vidaM,
      totalLife: 46,
      sanidade: localStorage.sanidadeM,
      sanidadeTotal: 20,
      img: 'https://cdn.discordapp.com/attachments/831176302279000174/1017121615529660476/Mina.jpeg',
      open: false,
      atkBasico: "",
      atkBasicoQuantidade: 0,
      atkBasicoModificador: 0,
      dado: 6,
      passiva: "Transforma em morcego🦇  |+5m| ",
      skill1Name:'Mordida:',
      skill2Name:'Brilho:',
      skill1: 'Moide |4 D6 (100% de cura)|',
      skill1Quantidade: 4,
      skill1Modificador: 0,
      skill2: 'Emite forte luz |retira aggro por 1 round|',
      skill2Quantidade: 0,
      skill2Modificador: 0,
      id: 5
    },
    {
      name: 'Níxis',
      força: 3,
      destreza: 3,
      constituição: 3,
      carisma: 3,
      inteligencia: 4,
      percepção: 3,
      life: localStorage.vidaN,
      totalLife: 50,
      sanidade: localStorage.sanidadeN,
      sanidadeTotal: 20,
      img: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg',
      open: false,
      dado: 6,
      atkBasico: "1 D6",
      atkBasicoQuantidade: 1,
      atkBasicoModificador: 0,
      passiva: "Troca entre cauda e perna",
      skill1Name:'Olha a onda:',
      skill2Name:'Hipnose:',
      skill1: 'Onda de água🌊 |5 D6|',
      skill1Quantidade: 5,
      skill1Modificador: 0,
      skill2: 'Hipnotiza por 2 turnos |DT:13|',
      skill2Quantidade: 0,
      skill2Modificador: 0,
      id: 6
    },
    {
      name: 'Zumbão',
      força: 4,
      destreza: 4,
      constituição: 3,
      carisma: 3,
      inteligencia: -1,
      percepção: 1,
      life: localStorage.vidaZ,
      totalLife: 64,
      sanidade: localStorage.sanidadeZ,
      sanidadeTotal: 20,
      img: 'https://cdn.discordapp.com/attachments/831176302279000174/1017121616452391013/Zumbao.jpeg',
      open: false,
      atkBasico: "5 D6 +2",
      atkBasicoQuantidade: 5,
      atkBasicoModificador: 2,
      dado:6,
      passiva: "Cura de machucado externo",
      skill1Name:'Mordida:',
      skill2Name:'Cura:',
      skill1: 'Moide |5 D6 +2|',
      skill1Quantidade: 5,
      skill1Modificador: 2,
      skill2: 'Curinha |5 D6|',
      skill2Quantidade: 5,
      skill2Modificador: 0,
      id: 7
    }
  ]


  const d20 = number => {
    var arr = []
    while (arr.length < number) {
      var r = Math.floor(Math.random() * 20) + 1
      arr.push(r)
    }
    let dadoCerto = arr.reduce((a, b) => a + b, 0)
    let ordem = arr.sort(function (a, b) {
      return b - a
    })
    return [dadoCerto, ordem]
  }

  const d8 = number => {
    var arr = []
    while (arr.length < number) {
      var r = Math.floor(Math.random() * 8) + 1
      arr.push(r)
    }
    let dadoCerto = arr.reduce((a, b) => a + b, 0)
    let ordem = arr.sort(function (a, b) {
      return b - a
    })
    return [dadoCerto, ordem]
  }

  const d6 = number => {
    var arr = []
    while (arr.length < number) {
      var r = Math.floor(Math.random() * 6) + 1
      arr.push(r)
    }
    let dadoCerto = arr.reduce((a, b) => a + b, 0)
    let ordem = arr.sort(function (a, b) {
      return b - a
    })
    return [dadoCerto, ordem]
  }

  const d4 = number => {
    var arr = []
    while (arr.length < number) {
      var r = Math.floor(Math.random() * 4) + 1
      arr.push(r)
    }
    let dadoCerto = arr.reduce((a, b) => a + b, 0)
    let ordem = arr.sort(function (a, b) {
      return b - a
    })
    return [dadoCerto, ordem]
  }

  let dadoPrimario = undefined
  let charId = undefined
  let charAtributo = undefined
  let atributoSecundario = undefined
  let dadoCerto = 0
  let sequencia = 0
  let modificador = 0
  const jogarDadoPrimario = (number, id, atributo) => {
    openSelection()
    dadoPrimario = number + 1
    charId = id
    charAtributo = atributo
    document.getElementById('image').src = characters[id].img
    document.getElementById('image').alt = characters[id].name
  }

  const jogarDadoSecundario = elem => {
    atributoSecundario = elem
    let segundoStatus = characters[charId][elem]
    if (atributoSecundario == charAtributo) {
      //se ambos forem do msm atributo
      if (dadoPrimario != -1 && dadoPrimario != 0 ) {
        let dado = d20(dadoPrimario)
        let lista = dado[1]
        dadoCerto = lista[0]
        sequencia = lista
        modificador = 0
      } else{
        let dado = d20(2)
        let lista = dado[1]
        dadoCerto = lista[1]
        sequencia = lista
        modificador = 0
      }
    } else { // se não forem
      if (dadoPrimario != -1 && dadoPrimario != 0 ) {
        let dado = d20(dadoPrimario)
        let lista = dado[1]
        dadoCerto = parseInt(lista[0]) + segundoStatus
        sequencia = lista
        modificador = segundoStatus
      } else {
        let dado = d20(2)
        let lista = dado[1]
        dadoCerto = parseInt(lista[1]) + segundoStatus
        sequencia = lista
        modificador = segundoStatus
      }
    }
    turnOn()
  }

  const openSelection = () =>
    (document.getElementById('chose').style.display = 'flex')
  const closeSelection = () =>
    (document.getElementById('chose').style.display = 'none')

  var roll = false
  const turnOn = () => (roll = true)
  const turnOff = () => (roll = false)

  const change = id => {
    if (characters[id]['open'] == true) {
      characters[id]['open'] = false
    } else {
      characters[id]['open'] = true
    }
  }

  var statusvalue = undefined
  const dano = (name, id) => {
    if (statusvalue == undefined) {
      return 0
    } else {
      let nome = name[0]
      let code = 'vida' + nome
      let storage = localStorage.getItem(code)
      let newValue = parseInt(storage) - statusvalue
      localStorage.setItem(code, newValue)
      characters[id]['life'] = newValue
      statusvalue = undefined
    }
  }
  const cura = (name, id) => {
    if (statusvalue == undefined) {
      return 0
    } else {
      let nome = name[0]
      let code = 'vida' + nome
      let storage = localStorage.getItem(code)
      let newValue = parseInt(storage) + statusvalue
      localStorage.setItem(code, newValue)
      characters[id]['life'] = newValue
      statusvalue = undefined
    }
  }
  const sanidadeMais = (name, id) => {
    if (statusvalue == undefined) {
      return 0
    } else {
      let nome = name[0]
      let code = 'sanidade' + nome
      let storage = localStorage.getItem(code)
      let newValue = parseInt(storage) + statusvalue
      localStorage.setItem(code, newValue)
      characters[id]['sanidade'] = newValue
      statusvalue = undefined
    }
  }
  const sanidadeMenos = (name, id) => {
    if (statusvalue == undefined) {
      return 0
    } else {
      let nome = name[0]
      let code = 'sanidade' + nome
      let storage = localStorage.getItem(code)
      let newValue = parseInt(storage) - statusvalue
      localStorage.setItem(code, newValue)
      characters[id]['sanidade'] = newValue
      statusvalue = undefined
    }
  }
  const skill = (dado, quantos, adicional) =>{
    var arr = []
    while (arr.length < quantos) {
      var r = Math.floor(Math.random() * dado) + 1
      arr.push(r)
    }
    let soma = arr.reduce((a, b) => a + b, 0)
    let ordem = arr.sort(function (a, b) {
      return b - a
    })
    dadoCerto = soma + adicional
    sequencia = ordem
    modificador = adicional
    turnOn()
  }

  let button = '☰';

  let options = false
  const openOptions = () => {
    if (options == true) {
      options = false
      button = '☰'
    } else {
      options = true
      button = '✕'
    }
  }

  const reset = () =>{
    localStorage.clear()
    localStorage.yes = 'yes'
    localStorage.vidaB = '50'
    localStorage.vidaC = '33'
    localStorage.vidaE = '46'
    localStorage.vidaF = '33'
    localStorage.vidaL = '50'
    localStorage.vidaM = '46'
    localStorage.vidaN = '50'
    localStorage.vidaZ = '64'
    localStorage.sanidadeB = '20'
    localStorage.sanidadeC = '20'
    localStorage.sanidadeE = '20'
    localStorage.sanidadeF = '20'
    localStorage.sanidadeL = '20'
    localStorage.sanidadeM = '20'
    localStorage.sanidadeN = '20'
    localStorage.sanidadeZ = '20'
    location.reload() 
  }

  let dice = false
  const openCustomDice = () =>{
    if(dice == true){
      dice = false
    }
    else{
      dice = true
      openOptions()
    }
  } 

  let customDice = undefined
  const rollCustomDice = (dado) =>{
    var arr = []
    while (arr.length < customDice) {
      var r = Math.floor(Math.random() * dado) + 1
      arr.push(r)
    }
    let soma = arr.reduce((a, b) => a + b, 0)
    let ordem = arr.sort(function (a, b) {
      return b - a
    })
    dadoCerto = soma
    sequencia = ordem
    modificador = 0
    turnOn()
    openCustomDice()
    customDice = undefined
  }

</script>

<main>
  {#if dice}
  <div class="customDice" transition:scale="{{duration: 150, delay: 0, opacity: 0.5, start: 0.5, easing: sineInOut}}">
    <div class="wraper" >
      <input type="number" placeholder="0" bind:value={customDice} >
      <div class="dicebtn">
        <button class="dices" on:click={() => rollCustomDice(100)}>D100</button>
        <button class="dices" on:click={() => rollCustomDice(20)}>D20</button>
      </div>
      <div class="dicebtn">
        <button class="dices"on:click={() => rollCustomDice(12)}>D12</button>
        <button class="dices" on:click={() => rollCustomDice(8)}>D8</button>
      </div>
      <div class="dicebtn">
        <button class="dices"on:click={() => rollCustomDice(6)}>D6</button>
        <button class="dices" on:click={() => rollCustomDice(4)}>D4</button>
      </div>
    </div>
  </div>
  {/if}
  <div class="chose" id="chose" on:click={closeSelection}>
    <div class="choseButtons">
      <img id="image" class="avatar" src="" alt="" />
      <button
        class="choseButton"
        id="força"
        on:click={() => jogarDadoSecundario('força')}>Força</button
      >
      <button
        class="choseButton"
        id="destreza"
        on:click={() => jogarDadoSecundario('destreza')}>Destreza</button
      >
      <button
        class="choseButton"
        id="constituição"
        on:click={() => jogarDadoSecundario('constituição')}
        >Constituição</button
      >
      <button
        class="choseButton"
        id="carisma"
        on:click={() => jogarDadoSecundario('carisma')}>Carisma</button
      >
      <button
        class="choseButton"
        id="inteligencia"
        on:click={() => jogarDadoSecundario('inteligencia')}
        >Inteligência</button
      >
      <button
        class="choseButton"
        id="percepção"
        on:click={() => jogarDadoSecundario('percepção')}>Percepção</button
      >
    </div>
  </div>
  {#if roll}
    <div
      on:click={turnOff}
      transition:fade={{ delay: 0, duration: 200 }}
      class="screen"
      id="screen"
    >
      <div class="whiteBox">
        <div class="big">
          <h1>{dadoCerto}</h1>
        </div>
        <div class="smaller">
          <h2 class="lista">{sequencia} <sup>+{modificador}</sup></h2>
        </div>
      </div>
    </div>
  {/if}
  <div class="main">
    {#each characters as char (char.id)}
      <div class="details">
        <header on:click={() => change(char.id)} class="summary">
          <h3>{char.name}</h3>
          <span style=" color:#26092e;	font-family: sans; font-size:2.5rem;"
            >+</span
          >
        </header>
        {#if char.open}
          <div
            class="colapsible"
            transition:slide={{ delay: 0, duration: 400, easing: sineInOut }}
          >
            <div class="stats">
              <h1
                class="stat"
                on:click={() => jogarDadoPrimario(char.força, char.id, 'força')}
              >
                Força: <span class="number">{char.força}</span>
              </h1>
              <h1
                class="stat"
                on:click={() =>
                  jogarDadoPrimario(char.destreza, char.id, 'destreza')}
              >
                Destreza: <span class="number">{char.destreza}</span>
              </h1>
              <h1
                class="stat"
                on:click={() =>
                  jogarDadoPrimario(char.constituição, char.id, 'constituição')}
              >
                Constituição: <span class="number">{char.constituição}</span>
              </h1>
              <h1
                class="stat"
                on:click={() =>
                  jogarDadoPrimario(char.carisma, char.id, 'carisma')}
              >
                Carisma: <span class="number">{char.carisma}</span>
              </h1>
              <h1
                class="stat"
                on:click={() =>
                  jogarDadoPrimario(char.inteligencia, char.id, 'inteligencia')}
              >
                Inteligência: <span class="number">{char.inteligencia}</span>
              </h1>
              <h1
                class="stat"
                on:click={() =>
                  jogarDadoPrimario(char.percepção, char.id, 'percepção')}
              >
                Percepção: <span class="number">{char.percepção}</span>
              </h1>
            </div>
            <div class="health">
              <div class="life">
                <label for="vida">Vida:</label>
                <progress class="vida" value={char.life} max={char.totalLife} />
                <label for="vida">{char.life}/{char.totalLife}</label>
              </div>
              <div class="sanity">
                <label for="sanidade">Sanidade:</label>
                <progress
                  class="sanidade"
                  value={char.sanidade}
                  max={char.sanidadeTotal}>20</progress
                >
                <label for="sanidade"
                  >{char.sanidade}/{char.sanidadeTotal}</label
                >
              </div>
              <div class="buttons">
                <input type="number" bind:value={statusvalue} class="text" />
                <button class="button" on:click={() => dano(char.name, char.id)}
                  ><img
                    class="image"
                    alt="Dano"
                    src="https://cdn-icons-png.flaticon.com/512/8204/8204591.png"
                  /></button
                >
                <button class="button" on:click={() => cura(char.name, char.id)}
                  ><img
                    class="image"
                    alt="Cura"
                    src="https://cdn-icons-png.flaticon.com/512/7037/7037270.png"
                  /></button
                >
                <button
                  class="button"
                  on:click={() => sanidadeMenos(char.name, char.id)}
                  ><img
                    class="image"
                    alt="-Sanidade"
                    src="https://cdn-icons-png.flaticon.com/512/8519/8519665.png"
                  /></button
                >
                <button
                  class="button"
                  on:click={() => sanidadeMais(char.name, char.id)}
                  ><img
                    class="image"
                    alt="+Sanidade"
                    src="https://cdn-icons-png.flaticon.com/512/7530/7530230.png"
                  /></button
                >
              </div>
            </div>
            <div class="skills">
              <div class="skill">
                <h1 class="tittle">Passiva:</h1>
                <p class="conteudo">{char.passiva}</p>
                <h1 class="tittle">Ataque Básico:</h1>
                <p class="conteudo" on:click={() => skill(char.dado, char.atkBasicoQuantidade, char.atkBasicoModificador)}>{char.atkBasico}</p>
                <h1 class="tittle">{char.skill1Name}</h1>
                <p class="conteudo" on:click={() => skill(char.dado, char.skill1Quantidade, char.skill1Modificador)}>{char.skill1}</p>
                <h1 class="tittle">{char.skill2Name}</h1>
                <p class="conteudo" on:click={() => skill(char.dado, char.skill2Quantidade, char.skill2Modificador)}>{char.skill2}</p>
                {#if char.name == 'Eris'}
                  <h1 class="tittle">Elementos:</h1>
                  <p class="conteudo" on:click={() => skill(4,1,0)}>Fogo: 1d4 de queimadura </p>
                  <p class="conteudo">Raio: +3 em reação</p>
                  <p class="conteudo">Gelo: congela </p>
                  <p class="conteudo" on:click={() => skill(6,1,0)}>Ácido: 1 D6</p>
                  <p class="conteudo">Vento: alcance 2m </p>
                {/if}
               </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
    <div>
      <button class="optionsBtn" on:click={openOptions}>{button}</button>
      {#if options}
       <div class="options" transition:scale="{{duration: 150, delay: 0, opacity: 0.5, start: 0.5, easing: sineInOut}}">
          <button class="btns" on:click={reset}>↺</button>
          <button class="btns" on:click={openCustomDice}>🎲</button>
        </div>
      {/if}
    </div>
  </div>
</main>
