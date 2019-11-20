<template>
    <v-container fluid fill-height >
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue">
                        <v-toolbar-title>
                            Signup Form
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-alert :value="false" color="error" icon="warning" >
                                This user alreay exist try a diiferent set of Data
                            </v-alert>
                            <!-- binding of the validation here -->
                            <v-text-field
                    
                            name="login"
                            label="Login"
                            :rules="[rules.required]"
                             >

                            </v-text-field>
                            <v-text-field
                
                            name="email"
                            label="Email"
                            type="email"
                            :rules="[rules.required, rules.email]"
                             >

                            </v-text-field>
                            <v-text-field
                        
                            name="password"
                            label="Password"
                            :rules="[rules.required]"
                            type='password'
                            v-model="password"
                             >

                            </v-text-field>
                            <v-text-field
                            
                            name="password"
                            label="Confirm Password"
                            :rules="[rules.required]"
                            type='password'
                            :error="valid()"
                            v-model="confirmpassword"
                             >
                            </v-text-field>
                        </v-form>
                        <v-divider light></v-divider>
                        <!-- direct to those actions on click -->
                            <v-card-actions>
                                <v-btn to='./login' rounded color='black' dark>Signin</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn rounded color="success" to="/signup">Register</v-btn>
                            </v-card-actions>
                    </v-card-text>
                </v-card>

            </v-flex>
        </v-layout>

    </v-container>
</template>


<script>
export default {
    // validation point for the form
    name:"signup",
    data:()=>({
        password:"",
        confirmpassword:'',
      rules:{
          required:value=>!!value || "Required",
          email:[
        value => !!value || 'E-mail is required',
        value=> /.+@.+\..+/.test(value) || 'E-mail must be valid',
      ], 
      }  
    }),
    methods: {
        
        valid(){
            if(this.password===this.confirmpassword){
                return false;
            }
        }
    }
}
</script>