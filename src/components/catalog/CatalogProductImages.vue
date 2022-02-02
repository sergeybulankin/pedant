<template>
  <div>
    <img :src="images[number_image].path" @click="nextImage(images)">
  </div>
</template>

<script>
export default {
  name: 'ProductImages',
  props: ['images'],
  data() {
    return {
      number_image: 0
    }
  },
  methods: {
    nextImage(images){
      let countImages = images.length-1;
      if (this.number_image === countImages) this.number_image = 0; else this.number_image = this.number_image + 1;
    }
  }
}
</script>