<template>
  <div class="wrapper">
    <div v-if="productsList" class="catalog-block">
      <catalog-list :list="productsList">
        <template #item="{ item: product, id: key }">
          <div class="list-product">
            <div class="list-product-image">
              <product-images :images="product.images"></product-images>
            </div>
            <div class="list-product-name">
              <h2>{{ product.name }} {{ product.memory }} ({{ product.color}})</h2>
            </div>

            <div class="list-product-rating">
              <icon-base
                  width="14"
                  height="14"
                  icon-color="#FFCF55"
                  v-for="index in 5" :key="index"
              >
                <icon-star />
              </icon-base>
              <span class="list-product-rating__review">{{ product.rating }}</span>
            </div>

            <div class="list-product-prices">
              <div class="list-product-other_seller_price">
                <div class="description-price">Цены у других</div>
                <span class="other_seller_price">{{ product.other_seller_price | formatPrice }}</span>
              </div>

              <div class="list-product-price">
                <div class="description-price">Цены у нас</div>
                от {{ product.price | formatPrice }}
              </div>
            </div>

            <div class="list-product-sales">
              <!-- ну это кринжатина, конечно -->
              <!-- TODO организовать нормальный вывод статистической информации -->
              <div v-for="(value, name, index) in product.statistics" :key="index">
                <div class="sales">
                    <span v-if="index === 0">Продано всего:</span>
                    <span v-else>Крайняя покупка:</span>
                    {{ value }}
                </div>
              </div>
            </div>

            <div class="add-to-cart" @click="addToCart(key)">
                Добавить в корзину
            </div>
          </div>
        </template>
      </catalog-list>
    </div>

    <div v-else>
      Данные еще не получены :(
    </div>
  </div>
</template>

<script>
import CatalogList from "./CatalogList";
import ProductImages from "./CatalogProductImages";
import Filters from "../mixins/Filters";
import IconBase from "../icons/IconBase";
import { success } from '../notifications/success_add_to_cart';
import IconStar from "../icons/IconStar";

export default {
  name: 'CatalogBlock',
  data() {
    return {
      list: null
    }
  },
  computed: {
    productsList() {
      return this.list;
    }
  },
  async mounted() {
    this.list = await import("../../structure/products.json");
  },
  mixins: [ Filters ],
  methods: {
    addToCart(id) {
      let oldProducts = JSON.parse(localStorage.getItem('cart')) || [];

      let newProduct = oldProducts.find(x => x.id === id); // ищем в хранилище есть ли уже товар

      if (newProduct) {
        newProduct.count = newProduct.count + 1; // если есть, то добавляем количество товара
      } else {
        newProduct = {'id': id, 'count': 1}; // иначе создаем новый массив
        oldProducts.push(newProduct);
      }

      localStorage.setItem('cart', JSON.stringify(oldProducts));

      success({
        top: 10,
        right: 10,
        html: 'Товар добавлен в корзину 😍',
      });
    },

  },
  components: {
    IconStar,
    CatalogList,
    ProductImages,
    IconBase
  }
}
</script>