<template>

  <v-card>
    <v-card-title>
    Student Page
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        :sort-by= 'fat'
        :sort-desc=false
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

 

<script>
// creating dummie data to the student pages
 export default {
    name:"student",
    data () {
      return {
        search: '',
        headers: [
         
          { text: 'Courses', value: 'courses' },
          { text: 'Location', value: 'location' },
          { text: 'Price', value: 'Price' }
          
        ],
        desserts: [
          {
            courses: 'Math',
            location: "hendon",
            Price: '100',
          
          },
          {
            courses: 'Math',
            location: "conlinale",
            Price: '80',
          },
          {
             courses: 'Math',
            location: "brent cross",
            Price: '90',
          },
          {
            courses: 'Math',
            location: "golder-green",
            Price: '120',
          },
          {
            courses: 'english',
            location: "hendon",
            Price: '110',
          },
          {
           courses: 'english',
            location: "colindale",
            Price: '90',
          },
          {
            courses: 'english',
            location: "brentcross",
            Price: '90',
          },
          {
           courses: 'english',
            location: "golders-green",
            Price: '130',
          },
          {
            courses: 'piano',
            location: "hendon",
            Price: '120',
          },
          {
            courses: 'piano',
            location: "golder-green",
            Price: '140',
          },
        ],
      }
    },
  }

</script>
