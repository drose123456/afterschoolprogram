
<template>
<!-- vue template  in vuetify html format-->
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>My SErvice Provider</v-toolbar-title>
       <!-- create divider -->
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <!-- allow spacing -->
        <v-spacer></v-spacer>
        <!-- on click on this butto will make a modal call -->
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
            <v-col>
        <v-btn dark color="indigo" to="/dashboard">student</v-btn>
      </v-col>

          </template>
          <!-- this the modal card -->
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.course" label="Topic"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.location" label="location"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="Price"></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <!-- this handle event on click -->
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>


<script>
  export default {
    data: () => ({
      // thia will initialize the all data used in the vue js parameter
      dialog: false,
      headers: [
        {
          text: 'Course',
          align: 'left',
          sortable: false,
          value: 'course',
        },
        { text: 'location', value: 'location' },
    
        { text: 'Price', value: 'price' },
        
        { text: 'Actions', value: 'action', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        
        course: '',
        location: '',
        price: 0,
      
        
      },
      defaultItem: {
        course: '',
        location: '',
        price: 0,
               
      },
    }),

    computed: {
      // this return the title of the form
      formTitle () {
        return this.editedIndex === -1 ? 'New program' : 'Edit Program'
      },
    },

// this will watch changes such as editing aand adding
    watch: {
      dialog (val) {
        val || this.close()
      },
    },

// this state will change on any edit
    created () {
      this.initialize()
    },

// this method initialize
    methods: {
      initialize () {
        this.desserts = [
           {
            course: 'Math',
            location: "hendon",
            price: '100',
          
          },
          {
            course: 'Math',
            location: "conlinale",
            price: '80',
          },
          {
             course: 'Math',
            location: "brent cross",
            price: '90',
          },
          {
            course: 'Math',
            location: "golder-green",
            price: '120',
          },
          {
            course: 'english',
            location: "hendon",
            price: '110',
          },
          {
           course: 'english',
            location: "colindale",
            price: '90',
          },
          {
            course: 'english',
            location: "brentcross",
            price: '90',
          },
          {
           course: 'english',
            location: "golders-green",
            price: '130',
          },
          {
            course: 'piano',
            location: "hendon",
            price: '120',
          },
          {
            course: 'piano',
            location: "golder-green",
            price: '140',
          },
        ]
      },
// this edit the table
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        localStorage.setItem(this.editedIndex,JSON.stringify(this.editedItem));
        this.dialog = true
      },
// thishandle the delete part
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },
// this will close the dialog button
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
// this handles the save to the admin and student and store in the local storage
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
          localStorage.setItem(this.editedIndex,JSON.stringify(this.editedItem));
        }
        this.close()
      },
    },
  }
</script>