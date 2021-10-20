<template>
<div class="px-4 py-4">
 <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-4">Avto moykalar</h4>
                <div class="table-responsive">
                    <table class="table table-centered table-nowrap mb-0">
                        <thead class="table-light">
                            <tr>
            
                                <th>Ism</th>
                                <th>Telefon</th>
                                <th>Sana</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in wash" :key="item._id">
                        
                                <td>{{item.name}}</td>
                                <td>
                                   {{item.phone}}
                                </td>
                                <td>
                                    {{dateFormat(item.createdAt)}}
                                </td>
                                <td>
                                   <el-switch v-model="switchBtn"> </el-switch>
                                </td>
                               
                               
                            </tr>

                        </tbody>
                    </table>
                </div>
                <!-- end table-responsive -->
            </div>
        </div>
    </div>
</div>
</div>
  

</template>

<script>
import dateformat from "dateformat";
export default {
    data:() => ({
    wash:null,
    switchBtn:false
    }),
    methods:{
        async getAllUser () {
            const wash = await this.$axios.get(`wash/${this.$auth.user._id}`);
      if (wash) {
        this.wash = wash.data.data
      }

        },
         dateFormat(date) {
      let date1 = dateformat(date, "dd.mm.yyyy HH:MM:ss");
      return date1;
    },
    },
    mounted() {
       this.getAllUser()
    }
    
}
</script>
