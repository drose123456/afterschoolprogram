<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add After school</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="topic" v-model="topic" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="location" hint="example of helper text only on focus" v-model="location"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4" v-model="price">
                <v-text-field
                  label="Price"
                  required
                  type="number" min="50"
                ></v-text-field>
              </v-col>
              
    
            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
         
          <v-btn color="blue darken-1" text @click.prevent="save()">Save</v-btn>
          <v-btn color="blue darken-1" text @click.prevent="retrieve()">retrieve</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name:"popup",
     data: () => ({
      dialog: false,
      price:"",
      topic:'',
      location:"",
      activities:null
      
    }),

    methods:{
        save(){
            topics=0;
            for(var topics=0; topics<localStorage.length;topics++)
            this.activities={
                topic:this.topic,
                location:this.location,
                price:this.price,
                topics:topics
            }
            localStorage.setItem(topics,JSON.stringify(this.activities));
            this.topic="",
            this.price="",
            this.location="",
            this.dialog=false;
            return topics
        }
        


        }
  
}

</script>