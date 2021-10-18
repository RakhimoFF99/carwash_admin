<template>
    <div class="layout d-flex">
            <sidebar />
        <div class="header">
            <div class="header__up">
             <div class="header-user account" >
                        <div class="dropdown d-inline-block d-flex justify-content-end px-4">
                            <button
                                type="button"
                                class="btn header-item waves-effect"
                                id="page-header-user-dropdown"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span
                                    class="d-none d-xl-inline-block ms-1 fw-medium font-size-15"
                                    style="letter-spacing:1px;font-weight:500"
                                    @click="showUserData"
                                    >User</span
                                >
                                <i
                                    class="uil-angle-down d-none d-xl-inline-block font-size-15"
                                ></i>
                            </button>
                            <div
                                ref="showUser"
                                class="dropdown-menu dropdown-menu-end"
                            >
                                <a class="dropdown-item" href="#"
                                    ><i
                                        class="uil uil-user-circle font-size-18 align-middle text-muted me-1"
                                    ></i>
                                    <span class="align-middle">Profile</span></a
                                >
                                <a
                                    
                                    class="dropdown-item"
                                    href="javascript: void(0);"
                                    ><i
                                        class="uil uil-wallet font-size-18 align-middle me-1 text-muted"
                                    ></i>
                                    <span class="align-middle">Chiqish</span></a
                                >
                            </div>
                        </div>
                        </div>

            </div>
            <nuxt />
        </div>  
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
    export default {
        methods:{
          showUserData() {
            this.$refs.showUser.classList.toggle("show");
        },


        },
        components:{
            Sidebar
        }
        
    }
</script>

<style scoped>
    .layout {
        min-height: 100vh;
        width: 100%; 
        }
   
    .header {
        width: 100%;
        
    }
    .header__up {
        width:100%;
        box-shadow: -1px 24px 43px -5px rgba(123, 123, 163,0.1 );
        height: 70px;
    }
</style>