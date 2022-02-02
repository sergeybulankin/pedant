export default {
    filters: {
        formatPrice(price) {
            return new Intl.NumberFormat('ru-RU').format(price);
        }
    }
}