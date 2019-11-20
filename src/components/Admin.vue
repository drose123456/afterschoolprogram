<template>
<v-container>
  
  <v-card height="700px">
    
      <AddAdmin/>

<!--     
    <v-navigation-drawer
      absolute
      permanent
      right
    >
      <template v-slot:prepend>
   <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Service provider</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
          
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="item.method"
          >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </v-card>


</v-container>
  
</template>


<script>
// import ListComponent from "./ListComponent";
  import AddAdmin from "./AddAdmin";
  
export default {
  
   name: "admin",
   components: { 
        AddAdmin
   },
       data () {
      return {
        items: [
          { title: 'Student and Parent', icon: 'mdi-home-city'},
          { title: 'Admin', icon: 'mdi-account' },
       
        ],
      }
    },

   
    
  }

  </script>