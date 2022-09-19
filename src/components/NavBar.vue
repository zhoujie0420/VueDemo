<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">MySpace</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link "    :to = "{ name : 'home'}"  href="#">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"     :to = "{ name : 'userlist'}" href="#">好友列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"     :to = "{ name : 'userprofile'}" href="#">用户动态</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link "    :to = "{ name : 'login'}" href="#">登录 </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"     :to = "{ name : 'register'}" href="#">注册  </router-link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    
</template>


<script>
export default {
    name : "NavBar",
}

</script>


<style scoped>

</style>