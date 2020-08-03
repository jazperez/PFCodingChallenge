<template>
  <div>
    <div>Piñata Farms Front-End Coding Challenge</div>
    <video width="600" height="540" controls>
      <source src="https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4" type="video/mp4">
    </video>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    const url1 = "https://frontend-coding-challenge.s3.amazonaws.com/1.txt";
    fetch(url1)
      .then(response => response.text())
      .then(data => (this.text = data))
      .then(function(data) {
        console.log(data)
      })
      .catch(error => console.log(error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
