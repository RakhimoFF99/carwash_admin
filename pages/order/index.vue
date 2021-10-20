<template>
  <div class="wrapper px-4 py-4">
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h4 class="card-title">Buyurtmalar</h4>
              <nuxt-link class="text-white" to="/order/add">
                <el-button type="primary mb-3 mx-4">
                  Qo'shish
                </el-button></nuxt-link
              >
            </div>

            <div class="table-responsive">
              <table class="table table-centered table-nowrap mb-0">
                <thead class="table-light">
                  <tr>
                
                    <th>Ism</th>
                    <th>Telefon</th>
                    <th>Sana</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in user" :key="item._id">
                
                    <td>{{ item.name }}</td>
                    <td>
                      {{ item.phone }}
                    </td>

                    <td>
                      {{ dateFormat(item.orderTime) }}
                    </td>
                    <td>
                      <span
                        style="font-weight: 600"
                        class="badge rounded-pill bg-warning font-size-12"
                        >{{ defineStatus(item.status) }}</span
                      >
              
                    </td>

                    <td>
                      <!-- Button trigger modal -->
                      <div class="d-flex align-content-center">
                        <el-popconfirm
                          confirm-button-text="Xa"
                          cancel-button-text="Yo'q"
                          @confirm="rejectOrder(item._id)"
                         
                          title="Buyurtmani bekor qilasizmi ?"
                        >
                          <el-button slot="reference">
                            <fa icon="times" />
                          </el-button>
                        </el-popconfirm>
                        <el-popconfirm
                          confirm-button-text="Xa"
                          @confirm="completeOrder(item._id)"
                          cancel-button-text="Yo'q"
                          title="Buyurtmani yakunlaysizmi ?"
                          style="margin-left: 10px"
                        
                        >
                          <el-button slot="reference">
                            <fa icon="check" />
                          </el-button>
                        </el-popconfirm>
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
  data: () => ({
    user: null,
    polling:null
  
  }),
  methods: {
    dateFormat(date) {
      let date1 = dateformat(date, "dd.mm.yyyy HH:MM:ss");

      return date1;
    },
      pollingData () {
         this.polling =  setInterval(() => {
      console.log(1)
    },20000)
      },

    async completeOrder(id) {
    try {
      const response = await this.$axios.$post(`/complete/order/${id}`)
      console.log(response)
      if(response.success) {
        this.$toast.success("Buyurtma mufaqqiyatli yakunlandi")
        this.getAllStatistics()
      }
    }
    catch(e) {
``
      this.$toast.error("Buyurtma xolati avval o'zgartirilgan")
    }
    
    
    },

    async rejectOrder(id) {
         try {
      const response = await this.$axios.$post(`/reject/order/${id}`)
      console.log(response)
      if(response.success) {
        this.$toast.success("Buyurtma bekor qilindi")
        this.getAllStatistics()
      }
      else {
             this.$toast.error(response.message)
      }
    }
    catch(e) {
      this.$toast.error("Buyurtma xolati avval o'zgartirilgan")
    }
    
    },

    async getAllStatistics() {
      const users = await this.$axios.get(`order/all`);
      if (users) {
        this.user = users.data.data
      }
     
    },
    defineStatus(status) {
      if (status == 1) {
        return "Buyurtma qabul qilindi";
      } else if (status == 2) {
        return "Buyurtma xaydovchi tomonidan bekor qilindi";
      } else if (status == 3) {
        return "Buyurtma avtomoyka tomonidan bekor qilindi";
      } else if (status === 4) {
        return "Buyurtma yakunlangan";
      }
    },
  },
  created(){
    this.pollingData()
  },
  mounted() {
    this.getAllStatistics();
  },
  beforeDestroy() {
    clearInterval(this.polling)
  }
};
</script>

<style  scoped>
</style>