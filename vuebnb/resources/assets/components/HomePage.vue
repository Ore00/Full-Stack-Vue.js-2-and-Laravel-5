<template>
    <div class="home-container">
        <listing-summary-group
            v-for="(group, country) in listing_groups"
            :key="country"
            :listings="group"
            :country="country"
            class="listing-summary-group"
        ></listing-summary-group>
    </div>
</template>
<script>
import { groupByCountry } from '../js/helpers';
import axios from 'axios';
import routeMixin from '../js/route-mixin';
import ListingSummaryGroup from './ListingSummaryGroup.vue';

export default {
    mixins:[ routeMixin ] ,
    data(){
        return{ listing_groups: [] };
    },
    methods: {
        assignData( { listings }){
          this.listing_groups = groupByCountry(listings);  
        },
    },
    components: {
       ListingSummaryGroup
    }
}
</script>
<style>
    
</style>