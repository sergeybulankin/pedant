<template>
  <header>
    <slot name="title"></slot>

    <Cart>
      <template #cart>
        <router-link :to="{ name: 'cart'}">Корзина</router-link>
      </template>
    </Cart>
  </header>
</template>

<script>
import Cart from "./HeaderCart";

export default {
  name: 'Header',
  components: {
    Cart
  }
}
</script>