<template>
  <div class="main">
   <div class="container">
      <div class="imag"><img class="img" v-bind:src="image"></div>
      <div class="text-container">
         <h1>{{ title }}</h1>
         <h4>{{ category }}</h4>
         <!-- <star-rating class="rate" v-bind:star-size="20"/> -->
         <span></span>
         <p>{{ description }}</p>
         <span></span>
         <h2>{{ price }}</h2>
         <div class="buttons">
          <button class="btn_buy">Buy now</button>
          <router-link to="/womensection"><button class="btn_next">Next product</button></router-link>
         </div>
      </div>
   </div>
  </div>
</template>

<script>
//import StarRating from 'vue-star-rating'

export default {
  name: 'MenSection',
  data() {
    return {
      id: [],
      
      title: "Mens Casual Premium Slim Fit T-Shirts",
      category: "men's clothing",
      image: require("../assets/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"),
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      price: "$22.3"
    };
  },
  components: {
  //  StarRating
  },
  created() {
    // Simple GET request using fetch
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
  }
}
</script>