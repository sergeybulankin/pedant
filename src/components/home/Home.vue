<template>
  <div>
    <Header>
      <template #title>
        <h1>Каталог товаров</h1>
      </template>
    </Header>

    <CatalogBlock />
  </div>
</template>

<script>
import Header from "../header/HeaderBlock";
import CatalogBlock from "../catalog/CatalogBlock";

export default {
  name: 'Home',
  components: {
    Header,
    CatalogBlock
  }
}
</script>