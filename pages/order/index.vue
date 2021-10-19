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
                                    <span style="font-weight:600" class="badge rounded-pill bg-success font-size-12 ">{{defineStatus(item.status)}}</span>
                                </td>
                               
                                <td>
                                    <!-- Button trigger modal -->
                                    <div class="d-flex align-content-center">
                                    <div class="d-inline  px-2 py-1 text-white" style="margin-left:10px; border-radius:10px;background-color:teal;cursor:pointer">
                                        <fa icon="times" style="width:15px" />

                                    </div>
                                   
                                    <div class="d-inline  px-2 py-1 text-white" style="margin-left:10px; border-radius:10px;background-color:rgb(64,158,255);cursor:pointer">
                                        <fa icon="check" />

                                    </div>
                                     </div>
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
            user:null,
            
        }),
        methods:{
              dateFormat(date) {
            let date1 = dateformat(date, "dd.mm.yyyy HH:MM:ss");
         
            return date1;
        },


        async completeOrder (id) {
         const response = await this.$axios.$get(`/complete/order/${id}`)  
         console.log(response)
        },


        async rejectOrder (id) {
            const response = await this.$axios.$get(`/reject/order/${id}`)
            console.log(response)
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
                else if (status == 2) {
                    return "Buyurtma xaydovchi tomonidan bekor qilindi"
                }
                else if (status == 3 ) {
                    return "Buyurtma avtomoyka tomonidan bekor qilindi"
                }
                else if (status === 4) {
                    return "Buyurtma yakunlandi"
                }
            }
        },
        mounted() {
            this.getAllStatistics()
        }
    }
</script>

<style  scoped>
    
</style>