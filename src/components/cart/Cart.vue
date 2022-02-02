<template>
  <div class="cart">
    <h1>Корзина <span v-if="amountToBePaid">- {{ amountToBePaid | formatPrice }} рублей</span></h1>
    <slot name="cart-items" :cart="cart" :list="list" :amountToBePaid="amountToBePaid"></slot>
  </div>
</template>

<script>
import Filters from "../mixins/Filters";

export default {
  name: 'Cart',
  props: ['cart', 'list', 'amountToBePaid'],
  mixins: [ Filters ]
}
</script>