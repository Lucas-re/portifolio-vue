<script setup lang="ts">
    import { ref, shallowRef, markRaw } from 'vue'
    import Modal from  '../templates/Modal.vue'
    import MeetMe from '../profile/MeetMe.vue'
    import Tips from '../profile/Tips.vue'
    import Portfolio from '../profile/Jobs.vue'

    const showModal = ref(false)
    const modalTitle = ref('')
    const modalBody = shallowRef(null)

    function findMe(){

        showModal.value = true;
        modalTitle.value = `Sobre mim`;
        modalBody.value = markRaw(MeetMe)

    }

    function ViewTipsScreen(){
        
        showModal.value = true;
        modalTitle.value = `Dicas`;
        modalBody.value = markRaw(Tips)
    }

    function ViewJobScreen(){
        
        showModal.value = true
        modalTitle.value = `Portifólio`;
        modalBody.value = markRaw(Portfolio);

    }
</script>

<template>
    <ul>
        <li>
            <a href="#" @click="findMe()">Sobre mim</a>
        </li>

        <li>
            <a href="#" @click="ViewTipsScreen()">Dicas para Devs</a>
        </li>

        <li>
            <a href="#" @click="ViewJobScreen()">Ver meu portifólio</a>
        </li>
    </ul>
    <Modal v-model="showModal">
        <template #header>
            <h3>{{ modalTitle }}</h3>
        </template>
        <template #body>
            <component :is="modalBody" v-if="modalBody" />
        </template>
    </Modal>

</template>