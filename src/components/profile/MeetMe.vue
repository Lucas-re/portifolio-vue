<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { buscarAbout } from '@/services/profile/about.js';
const allAbouts = ref([]);

onMounted(async () => {
    allAbouts.value = await buscarAbout();
});

</script>

<template>
        
        <div>

                <div class="container-top">
                        <h1 ></h1>
                        <p></p>  
                </div>
        </div>


        <div>
        
                <div class="container-right">
                        <h1></h1>
                        <p></p>  
                </div>
        
                <div class="container-left">
                        <h1></h1>
                        <p></p>  
                </div>


                
        </div>

        <div>
        
                <div class="container-right">
                        <h1></h1>
                        <p></p>  
                </div>
        
                <div class="container-left">
                        <h1></h1>
                        <p></p>  
                </div>


                
        </div>

        <div>

                <div class="container-botton">
                        <h1></h1>
                        <p></p>  
                </div>
        </div>
</template>

<style scoped>

    div {
        display: flex;
        flex-direction: row;
        padding: 10px;
        gap: 16px;

    }
    .container-top {
      background: var(--bg-container-color);
      width:100%;
      height: 25vh;
      border-radius: 10px;
    }

     .container-left {
      background: var(--bg-container-color);
      width: 50%;
      height: 25vh;
      border-radius: 10px;
    }
      .container-right {
      background: var(--bg-container-color);
      width: 50%;
      height: 25vh;
      border-radius: 10px;
    }
    .container-botton {
      background: var(--bg-container-color);
      width:100%;
      height: 25vh;
      border-radius: 10px;
    }

    div :hover{
        background-color: var(--surface-container-color-hover);
     }

    @media (max-width: 930px) {

        div {
          display: flex;
          flex-direction: column;
          padding: 10px;
          gap: 16px;

        }

        .container-left {
          background: var(--bg-container-color);
          width: 100%;
          height: 25vh;
          border-radius: 10px;
        }

      .container-right {
          background: var(--bg-container-color);
          width: 100%;
          height: 25vh;
          border-radius: 10px;
      }
    }
</style>