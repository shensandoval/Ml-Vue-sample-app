<template>
    <v-container>
        <v-row>
            <v-col>           
                <div>
                    <h1>{{ msg }}</h1>
                </div>
            </v-col>

            <v-col>
                <v-card class="mx-auto" max-width="300" max-height="100px" style="margin-top:54%">
                    <v-card-text>
                        <div>Sample</div>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col>
                
            </v-col>

        </v-row>
    </v-container>
</template>


<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>