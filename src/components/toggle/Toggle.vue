<script setup lang="ts">
// import TheWelcome from '../../components/TheWelcome.vue'
// import Profile from '../../components/profile/Profile.vue'
function toggleMode(){
    

    const body = document.body;

    /**
     * Comentado, esta a ideia inicial que era criar uma estrutura 
     * condicional para para adicionar e remover a classe light ao 
     * clicar no botão switch
     */

    // if(body.classList.contains('light-mode')){
    //     body.classList.remove('light-mode');
    // }else{
    //     body.classList.add('light-mode');
    // }

    /**
     * Aqui foi adicionado uma estrutura que já faz exatamente isso
     * de uma maneira bem simplificada 
     */
    body.classList.toggle('light-mode');
}
</script>

<template>
    <div id="switch" @click="toggleMode()">
        <button></button>
        <span></span>
    </div>
</template>
