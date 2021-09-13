<template>
  <v-dialog v-model="breweries.isShowDetailDialog" max-width="1000">
    <v-card>
    <v-card-title></v-card-title>
      <v-card-text>
        <div class="container">
          <div class="row">
            <div class="col-6">
              <image-brewery :brewery="breweries.brewery"></image-brewery>
            </div>
            <div class="col-6">
                <div class="container">
                    <div class="row title-contact mb-3">
                        {{ breweries.brewery.name }}
                    </div>
                    <div class="row row-contact">
                        <div class="col-3">Phone</div>
                        <div class="col-9">{{ getFormattedPhone() }}</div>
                    </div>
                    <div class="row row-contact">
                        <div class="col-3">Website</div>
                        <div class="col-9">
                            <a v-if="getFormattedWebsite() !== EMPTY_DATA" :href="getFormattedWebsite()" target="_blank">
                                {{ getFormattedWebsite() }}
                            </a>
                            <div v-else>
                                {{ getFormattedWebsite() }}
                            </div>
                        </div>
                    </div>
                    <div class="row row-contact">
                        <div class="col-3">Address</div>
                        <div class="col-9">{{ getFormattedAddress() }}</div>
                    </div>
                    <map-brewery
                        v-if="haveLocationData(breweries.brewery.latitude, breweries.brewery.longitude)"
                        :latitude="breweries.brewery.latitude"
                        :longitude="breweries.brewery.longitude">
                    </map-brewery>
                </div>

            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import ImageBrewery from "@/components/ImageBrewery.vue";
import MapBrewery from "@/components/MapBrewery.vue";

export default {
  name: "DialogBrewery",
  components: {
    ImageBrewery,
    MapBrewery
  },
  props: {},
  data() {
    return {
        EMPTY_DATA: "N/A"
    };
  },
  computed: {
    ...mapState(["breweries"])
  },
  methods: {
    ...mapMutations["breweries"],
    getFormattedAddress() {
        const brewery = this.breweries.brewery
        const addressArr = []
        if (brewery.address3) {
            addressArr.push(brewery.address3)
        }
        if (brewery.address2) {
            addressArr.push(brewery.address3)
        }
        if (brewery.city) {
            addressArr.push(brewery.city)
        }
        if (brewery.state) {
            addressArr.push(brewery.state)
        }
        if (brewery.postal_code) {
            addressArr.push(brewery.postal_code)
        }
        return (addressArr.length > 0) ? addressArr.toString(", ") : this.EMPTY_DATA
    },
    getFormattedPhone() {
        return this.breweries.brewery.phone ? this.breweries.brewery.phone : this.EMPTY_DATA
    },
    getFormattedWebsite() {
        return this.breweries.brewery.website_url ? this.breweries.brewery.website_url : this.EMPTY_DATA
    },
    haveLocationData() {
        return this.breweries.brewery.latitude && this.breweries.brewery.longitude
    }
  }
};
</script>

<style lang="scss" scoped>
.title-contact {
    font-size: 1.5rem;
    justify-content: center;
}
.row-contact {
    font-size: 1.2rem;
}
* {
    font-family: "Noto Serif SC", serif;
}
img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
}
</style>