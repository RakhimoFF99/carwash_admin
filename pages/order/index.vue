<template>
 <div  class="wrapper px-4 py-4">
 <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
            <div class="d-flex justify-content-between px-2">
             <h4 class="card-title my-0">Buyurtma</h4>
             <button class="btn btn-primary mx-4 mb-2">Qo'shish</button>
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
                                    {{dateFormat(item.createdAt)}}
                                </td>
                                <td>
                                    <span class="badge rounded-pill bg-soft-success font-size-12">Paid</span>
                                </td>
                               
                                <td>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
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
            let date1 = dateformat(date, "isoDate");
            date1 = date1.split("-").reverse();
            date1 = date1.join(".");
            return date1;
        },

          async  getAllStatistics () {
            const users = await this.$axios.get('user/all')
       
            if(users) {
                this.user = users.data
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