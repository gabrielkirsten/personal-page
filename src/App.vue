<template>
  <div id="app">
    <router-view/>
    <footer> 
      <p>Gabriel Kirsten | 2019 </p>
      check this project <a class="github-link" href="" target="_blank">on github <i class="fab fa-github"></i> </a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#nav { 
  :first-child {
    margin-right: 30px;
  }
}

footer {
  background-color: #333333;
  color: white;
  text-align: center;
  padding: 10px;
}

.github-link {
  color: white;
  font-weight: 700;
}
</style>
