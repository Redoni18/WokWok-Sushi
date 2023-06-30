<template>
<transition name="modal" mode="out-in">
  <div @click="close" class="modal-backdrop">
    <div @click.stop class="modal">
      <header class="modal-header">
        <slot name="header">
          This is the default title!
        </slot>
      </header>

      <section class="modal-body">
        <slot name="body">
          This is the default body!
        </slot>
       </section>

      <footer class="modal-footer">
        <p
            type="button"
            class="close-button"
            @click="close"
        >
            Close
        </p>
        <slot name="footer">
          <!--  -->
        </slot>
      </footer>
    </div>
  </div>
</transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    top: 10%;
    left: 30%;
    width: 50%;
    height: auto;
    border: none;
    outline: none;
    border-radius: 8px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    background: #fafafa;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
  }

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
}

.modal-body {
    position: relative;
    padding: 20px 20px;
    overflow: auto;
}

.close-button{
    padding: 10px 20px;
    width: fit-content;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 46px;
    border: none;
    outline: none;
    cursor: pointer;
    background: var(--primary-color);
}

.tray-enter,
.tray-leave-to { opacity: 0 }

.tray-leave,
.tray-enter-to { opacity: 1 }

.tray-enter-active,
.tray-leave-active { transition: opacity 300ms }
</style>