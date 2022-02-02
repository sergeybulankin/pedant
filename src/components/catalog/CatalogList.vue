<template>
    <div class="list">
      <div v-for="(product, key) in list.default" :key="key" class="list-item">
        <slot name="item" :item="product" :id="key"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CatalogList',
  props: ['list']
}
</script>