<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>Hello Earth</h1>
    <h2>Essential Links</h2>
	<h3>{{$route.params.earthmsg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: 'Welcome to Your Vue2.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
*{
	color:blue;
}
</style>
