<template>
  <div class="pa-12">
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in sliderItems"
        :key="i"
        :src="item.src"
        cover
      ></v-carousel-item>
    </v-carousel>

    <v-row class="ga-5 my-4">
      <v-card class="mx-auto" max-width="500">
        <v-container fluid>
          <v-row dense>
            <v-col v-for="card in gridCard" :key="card.title" :cols="card.flex">
              <v-card>
                <v-img
                  :src="card.src"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover
                >
                  <v-card-title
                    class="text-white"
                    v-text="card.title"
                  ></v-card-title>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="surface-variant"
                    icon="mdi-heart"
                    size="small"
                    variant="text"
                  ></v-btn>

                  <v-btn
                    color="surface-variant"
                    icon="mdi-bookmark"
                    size="small"
                    variant="text"
                  ></v-btn>

                  <v-btn
                    color="surface-variant"
                    icon="mdi-share-variant"
                    size="small"
                    variant="text"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="mx-auto" max-width="500">
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in gridCard.reverse()"
              :key="card.title"
              :cols="card.flex"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover
                >
                  <v-card-title
                    class="text-white"
                    v-text="card.title"
                  ></v-card-title>
                </v-img>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    color="surface-variant"
                    icon="mdi-heart"
                    size="small"
                    variant="text"
                  ></v-btn>

                  <v-btn
                    color="surface-variant"
                    icon="mdi-bookmark"
                    size="small"
                    variant="text"
                  ></v-btn>

                  <v-btn
                    color="surface-variant"
                    icon="mdi-share-variant"
                    size="small"
                    variant="text"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-row>

    <v-row>
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          cover
        ></v-img>

        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>

            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>

            <div class="text-grey ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4">
          <v-chip-group v-model="selection">
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </div>

        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
            Reserve
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          cover
        ></v-img>

        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>

            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>

            <div class="text-grey ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4">
          <v-chip-group v-model="selection">
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </div>

        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
            Reserve
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template v-slot:loader="{ isActive }">
          <v-progress-linear
            :active="isActive"
            color="deep-purple"
            height="4"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          cover
        ></v-img>

        <v-card-item>
          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-subtitle>
            <span class="me-1">Local Favorite</span>

            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :model-value="4.5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            ></v-rating>

            <div class="text-grey ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Tonight's availability</v-card-title>

        <div class="px-4">
          <v-chip-group v-model="selection">
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </div>

        <v-card-actions>
          <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
            Reserve
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>

    <v-data-table
      v-model="selected"
      :items="tableItems"
      item-value="name"
      show-select
    ></v-data-table>

    <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"
        ></v-btn>
      </div>

      <div class="pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-footer>
  </div>
</template>

<script setup lang="ts">
const sliderItems = [
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
];

const gridCard = [
  {
    title: "Pre-fab homes",
    src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
    flex: 12,
  },
  {
    title: "Favorite road trips",
    src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
    flex: 6,
  },
  {
    title: "Best airlines",
    src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
    flex: 6,
  },
];

const loading = ref(false);

const menuItems = [
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
];

const reserve = () => {
  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
};

const tab = ref(null);

const tiles = [
  { img: "keep.png", title: "Keep" },
  { img: "inbox.png", title: "Inbox" },
  { img: "hangouts.png", title: "Hangouts" },
  { img: "messenger.png", title: "Messenger" },
  { img: "google.png", title: "Google+" },
];

const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];

const sheet = ref(false);

const tableItems = [
  {
    name: "🍎 Apple",
    location: "Washington",
    height: "0.1",
    base: "0.07",
    volume: "0.0001",
  },
  {
    name: "🍌 Banana",
    location: "Ecuador",
    height: "0.2",
    base: "0.05",
    volume: "0.0002",
  },
  {
    name: "🍇 Grapes",
    location: "Italy",
    height: "0.02",
    base: "0.02",
    volume: "0.00001",
  },
  {
    name: "🍉 Watermelon",
    location: "China",
    height: "0.4",
    base: "0.3",
    volume: "0.03",
  },
  {
    name: "🍍 Pineapple",
    location: "Thailand",
    height: "0.3",
    base: "0.2",
    volume: "0.005",
  },
  {
    name: "🍒 Cherries",
    location: "Turkey",
    height: "0.02",
    base: "0.02",
    volume: "0.00001",
  },
  {
    name: "🥭 Mango",
    location: "India",
    height: "0.15",
    base: "0.1",
    volume: "0.0005",
  },
  {
    name: "🍓 Strawberry",
    location: "USA",
    height: "0.03",
    base: "0.03",
    volume: "0.00002",
  },
  {
    name: "🍑 Peach",
    location: "China",
    height: "0.09",
    base: "0.08",
    volume: "0.0004",
  },
  {
    name: "🥝 Kiwi",
    location: "New Zealand",
    height: "0.05",
    base: "0.05",
    volume: "0.0001",
  },
];

const selected = ref([]);
</script>

<style scoped lang="scss"></style>
