<template>
 <div  class="wrapper px-4 py-4">
 <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
            <div class="d-flex justify-content-between ">
             <h4 class="card-title ">Buyurtma</h4>
        <nuxt-link class="text-white" to="/order/add"> <el-button type="primary mb-3 mx-4"> Qo'shish  </el-button></nuxt-link>
            </div>
               
                <div :class="table-responsive">
                    <table class="table table-centered table-nowrap mb-0">
                        <thead class="table-light">
                            <tr>
                               
            
                                <th>Ism</th>
                                <th>Telefon</th>
                                <th>Sana</th>
                                
                                <th>Status</th>
                                <th>Batafsil</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in user" :key="item._id">

                                <td>{{item.name}}</td>
                                <td>
                                   {{item.phone}}
                                       
                                </td>
                                    
                                <td>
                                    {{dateFormat(item.orderTime)}}
                                </td>
                                <td>
                                    <span style="font-weight:600" class="badge rounded-pill bg-soft-success font-size-12 text-secondary">{{defineStatus(item.status)}}</span>
                                </td>
                               
                                <td>
                                    <!-- Button trigger modal -->
                                    <button style="background-color:rgb(64,158,255);font-weight:600" type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                                    Batafsil
                                    </button>
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
         data : () => ({
            user:null
        }),
        methods:{
              dateFormat(date) {
            let date1 = dateformat(date, "dd.mm.yyyy HH:MM:ss");
         
            return date1;
        },

          async  getAllStatistics () {
            const users = await this.$axios.get('order/all')
       
            if(users) {
                this.user = users.data.data
                }
           
            },
            defineStatus (status) {
                if(status == 1) {
                    return "Buyurtma qabul qilindi"
                }
            }
        },
        beforeMount() {
            this.getAllStatistics()
        }
    }
</script>

<style  scoped>
    
</style>