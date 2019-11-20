<template>
<!-- this is where student components -->
<v-container>
  
  <v-card height="700px">
    <v-layout>
      <AddAfterSchool/>
    </v-layout>
    
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
            <v-list-item-title>Student and Parent</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-col>
        <!-- this button direct to the admin page -->
        <v-btn color="indigo" to='/admin'>Admin</v-btn>
      </v-col>
      
      
      
  
    </v-navigation-drawer>
  </v-card>


</v-container>
  
</template>


<script>

  import AddAfterSchool from "./AddAfterSchool";

export default {
  
   name: "serviceprovider",
   components: { 
      // ListComponent,

        AddAfterSchool 
   },
       data () {
      
    
    },

    methods:{
        admin(){
            this.$router.push('/admin')
        },
        student(){
            this.$router.push('/')
        },

    }
  }


</script>