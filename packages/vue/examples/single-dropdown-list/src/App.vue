<template>
  <div id="app">
    <reactive-base
      app="good-books-ds"
      url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
    >
      <single-dropdown-list 
        component-id="BookSensor" 
        data-field="original_series.keyword" />
      <reactive-list
        :pagination="true"
        :from="0"
        :size="5"
        :react="{ and: ['BookSensor'] }"
        component-id="SearchResult"
        data-field="original_title.keyword"
        class-name="result-list-container"
      >
        <template #renderItem="{ item }">
          <div 
            key="item._id" 
            class="flex book-content">
            <img 
              :src="item.image" 
              alt="Book Cover" 
              class="book-image" >
            <div class="flex column justify-center ml20">
              <div class="book-header">{{ item.original_title }}</div>
              <div class="flex column justify-space-between">
                <div>
                  <div>
                    by <span class="authors-list">{{ item.authors }}</span>
                  </div>
                  <div class="ratings-list flex align-center">
                    <span class="stars">
                      <i
                        v-for="(item, index) in Array(
                          item.average_rating_rounded,
                        ).fill('x')"
                        :key="index"
                        class="fas fa-star"
                      />
                    </span>
                    <span 
                      class="avg-rating"
                    >({{ item.average_rating }} avg)</span
                    >
                  </div>
                </div>
                <span 
                  class="pub-year"
                >Pub {{ item.original_publication_year }}</span
                >
              </div>
            </div>
          </div>
        </template>
      </reactive-list>
    </reactive-base>
  </div>
</template>

<script>
import './styles.css';
import { ReactiveBase, ReactiveList, SingleDropdownList, SelectedFilters  } from '@appbaseio/reactivesearch-vue'

export default {
	name: 'App',
	components: {
		ReactiveBase,
		ReactiveList,
		SingleDropdownList,
		SelectedFilters
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
