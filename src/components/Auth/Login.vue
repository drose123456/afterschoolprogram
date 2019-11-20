<template>
    <v-container fill-height>
        <v-layout align-center justify-center >
            <v-flex xs12 sm8 md6>
                 <v-form>
                     <v-card class="elevation-12">
                         <v-toolbar dark color="blue">
                             <v-toolbar-title>
                                 Login Form
                             </v-toolbar-title>     
                         </v-toolbar>
                         <v-card-text>
                            <v-text-field
                            name="login"
                            label="Login"
                            type="text"
                            >
                                 
                            </v-text-field> 

                             <v-text-field name="password" label="Password" type="password" >
                            </v-text-field>      
                         </v-card-text>
                         <v-divider light></v-divider>
                         <v-card-actions>
                             <!-- call to action to various routes -->
                             <v-btn to="/signup" rounded color="indigo" dark>Signup</v-btn>
                             <v-spacer></v-spacer> 
                              <v-btn to="/dashboard" rounded color="primary">
                                  Login
                                  </v-btn>
                         </v-card-actions>
                     </v-card>
                 </v-form>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script> 
export default {    
        name:'login',
        methods:{
            
        }
}
 