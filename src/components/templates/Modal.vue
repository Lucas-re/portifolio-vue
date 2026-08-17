<script setup lang="ts">
    defineProps<{
    modelValue: boolean
    }>()

    const emit = defineEmits(['update:modelValue'])

    const close = () => {
    emit('update:modelValue', false)
    }
</script>

<template>
  <div v-if="modelValue" class="overlay" @click.self="close">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">Título Padrão</slot>
        <button class="close-btn" @click="close">✖</button>
      </header>

      <main class="modal-body">
        <slot name="body" />
      </main>

      <footer class="modal-footer">
        <button  class="btn" @click="close">Fechar</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
    .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* translucido */
    display: flex;
    align-items: center;
    justify-content: center;
    }


    .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: sticky;
    top: 0;
    background: var(--bg-header-color);
    z-index: 10;
    padding: 10px;
    /* border-bottom: 1px solid #ddd; */
    }
    .modal-footer {

    padding: 20px;
    background: var(--bg-header-color);
    }

    .modal-body {
    padding: 20px;
    
    }

    .close-btn {
    float: right;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    }

    .btn {
    padding: 10px 20px;
    background: rgb(151, 150, 150);
    color: var(--text-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .modal {
      background: var(--bg-modal-color);
      width: 85%;
      height: 800px;
      border-radius: 10px;
      overflow-y: auto;
      animation: fadeIn 0.2s ease;
    }

    @media (max-width: 700px) {

      .modal {
          background: var(--bg-modal-color);
          width: 80%;
          height: 700px;
          border-radius: 10px;
          overflow-y: auto;
          animation: fadeIn 0.2s ease;
      }
    }


</style>