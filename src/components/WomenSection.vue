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
                    <button class="btn_next">Next product</button>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    name: 'WomenSection',
    data() {
        return {
            title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
            category: "women's clothing",
            image: require("../assets/images/51Y5NI-I5jL._AC_UX679_.jpg"),
            description: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
            price: "$56.99"
        }
    }
}
</script>