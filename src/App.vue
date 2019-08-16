<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  }
}
</script>

<style>
*{margin:0;padding:0;}
a{ 
text-decoration:none; 
color:#333; 
} 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
.fl{float: left;}
.fr{float:right}
ul{list-style: none}
.clear::before{content: "";
    display: table;clear: both;}
</style>
