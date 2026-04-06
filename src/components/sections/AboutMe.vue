<script setup lang="ts">

function findMe(){
    alert("Ops! Esta tela ainda esta em Desenvolvimento. Logo Logo ela estará disponivel! Abraços");
}

function ViewTipsScreen(){
    alert("Ops! A tela de dicas ainda não esta disponivel. Logo Logo ela estará disponivel! Abraços");
}

function ViewJobScreen(){
    alert("Ops! A tela que irá exibir os meus trabalhos ainda esta em Desenvolvimento. Logo Logo ela estará disponivel para Exibição! Abraços");
}
</script>

<template>
    
    <ul>
        <li>
            <a href="#" @click="findMe()">Me conheça um pouco</a>
        </li>

        <li>
            <a href="#" @click="ViewTipsScreen()">Dicas para Devs</a>
        </li>

        <li>
            <a href="#" @click="ViewJobScreen()">Ver meu portifólio</a>
        </li>
    </ul>
    
</template>