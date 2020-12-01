<template>
    <header class="header-global">
        <base-nav class="navbar-brand" transparent type="" effect="light" expand>
           

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-5 collapse-brand">
                    <a href="">
                        <img src="img/brand/icono.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
              
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                                  
                                      <base-button tag="a" href="#" type="btn btn-success" v-on:click="$router.push('/plans')" class="mt-2">
                                        Ver planes
                                    </base-button>
                
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
.Mylogo{
    width: 100px;
    height: 100px;
    border: blanchedalmond;
}
</style>
