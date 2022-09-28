<script>
  import { slide } from 'svelte/transition'
  import { sineInOut } from 'svelte/easing'
  import { fade } from 'svelte/transition'
  const define = () => {
    if (localStorage.yes == undefined) {
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
      if (dadoPrimario != -1) {
        let dado = d20(dadoPrimario)
        let lista = dado[1]
        dadoCerto = lista[0]
        sequencia = lista
        modificador = 0
      } else {
        let dado = d20(2)
        let lista = dado[1]
        dadoCerto = lista[1]
        sequencia = lista
        modificador = 0
      }
    } else {
      if (dadoPrimario != -1) {
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
</script>

<main>
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
                    src="https://img.icons8.com/color/344/drop-of-blood.png"
                  /></button
                >
                <button class="button" on:click={() => cura(char.name, char.id)}
                  ><img
                    class="image"
                    alt="Cura"
                    src="https://img.icons8.com/fluency/344/pill.png"
                  /></button
                >
                <button
                  class="button"
                  on:click={() => sanidadeMenos(char.name, char.id)}
                  ><img
                    class="image"
                    alt="-Sanidade"
                    src="https://img.icons8.com/ios/344/poison.png"
                  /></button
                >
                <button
                  class="button"
                  on:click={() => sanidadeMais(char.name, char.id)}
                  ><img
                    class="image"
                    alt="+Sanidade"
                    src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/344/external-happy-emoji-dreamstale-lineal-dreamstale-2.png"
                  /></button
                >
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</main>
