<template>
  <div>
    <cart v-if="productsInCart && productsInList"
          :cart="productsInCart"
          :list="productsInList"
          :amountToBePaid="amountToBePaid"
    >
      <template #cart-items="{ cart: cartProducts, list: items  }">
        <div class="cart-empty" v-if="cartProducts.length === 0">
          Вы почему-то ничего не добавили 😶 <br>
          <router-link :to="{ name: 'home'}">А у нас много чего есть 😏</router-link>
        </div>

        <div class="cart-item" v-for="(product, index) in cartProducts" :key="index">
          <div class="cart-item-image">
            <img :src="items[product.id].images[0].path" alt="">
          </div>
          <div class="cart-item-description">
            <div class="cart-item-description__title">
              <h2>{{ items[product.id].name }} {{ items[product.id].memory }} ({{ items[product.id].color }})</h2>

            </div>
            <div class="cart-item-description__price">
              {{ items[product.id].price | formatPrice }} ₽
            </div>
            <div class="cart-item-description__in-cart">
              Количество - {{ product.count }}
            </div>
            <div class="cart-item-description__etc">
              <a :href="items[product.id].url">Подробнее о данной модели</a>
            </div>
            <div class="product-sum">
              Общая сумма - {{ product.count * items[product.id].price | formatPrice }}
              <span class="delete-product" @click="deleteProduct(product.id)">Удалить продукт из корзины</span>
            </div>
          </div>
        </div>
      </template>
    </cart>
  </div>
</template>

<script>
import Cart from "./Cart";
import Filters from "../mixins/Filters";
import { showDeleteProduct } from '../notifications/delete_product_in_cart';

export default {
  name: 'CartList',
  data() {
    return {
      list: null,
      cart: null,
      sum: 0
    }
  },
  computed: {
    productsInCart() {
      return this.cart;
    },
    productsInList() {
      return this.list;
    },
    amountToBePaid() {
      return this.sum;
    }
  },
  async mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart'))
    this.list = await import("../../structure/products.json");
    this.finalSum();
  },
  mixins: [ Filters ],
  methods: {
    finalSum() {
      this.cart.forEach((product) => {
          this.sum += this.list[product.id].price * product.count;
      })
    },
    deleteProduct(id) {
      const productsInCart = JSON.parse(localStorage.getItem('cart'));
      const filtered = productsInCart.filter(item => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(filtered));
      this.cart = filtered // решение напрямую
      this.sum = 0; // TODO плохой способ обнуления

      this.finalSum(); // пересчитываем финальную сумму

      showDeleteProduct({
        top: 10,
        right: 10,
        html: 'Товар удален из корзины 😥',
      });
    }
  },
  components: {
    Cart
  }
}
</script>