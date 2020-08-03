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
  data() {
    return {
      wordList1: "Error occured",
      wordList2: "Error occured",
      wordList3: "Error occured",
    }
  },
  created() {
    const url1 = "https://frontend-coding-challenge.s3.amazonaws.com/1.txt";
    const url2 = "https://frontend-coding-challenge.s3.amazonaws.com/2.txt";
    const url3 = "https://frontend-coding-challenge.s3.amazonaws.com/3.txt";

    this.getWordsFromList1(url1);
    this.getWordsFromList2(url2);
    this.getWordsFromList3(url3);
  }, 
  mounted(){
    this.getCommonWords();
    //this.getCommonWords(this.wordList1);
  },
  methods:{
    getWordsFromList1(url) {
      fetch(url)
      .then((response) => response.text())
      .then((data) => (this.wordList1 = data))
      .catch(error => console.log(error))
    },

    getWordsFromList2(url){
      fetch(url)
      .then((response) => response.text())
      .then((data) => (this.wordList2 = data))
      .catch(error => console.log(error))
    }, 

    getWordsFromList3(url){
    fetch(url)
      .then((response) => response.text())
      .then((data) => (this.wordList3 = data))
      .catch(error => console.log(error))
    }, 

    getCommonWords(phrase){
      var wordCounts = {}
      var phrase = " Marry had a little lamb, little lamb, and the lamb was white as snow.";
      phrase = phrase.replace(/(^\s*)|(\s*$)/gi,"");
      phrase = phrase.replace(/[ ]{2,}/gi," ");
      phrase = phrase.replace(/\n /,"\n");
      phrase = phrase.replace(/[,.]/g, "");
      phrase = phrase.toLowerCase();
      var words = phrase.split(" ");
      for(var i = 0; i < words.length; i++){
        wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
      }
      console.log(phrase);
      console.log(words)
      console.log(wordCounts)
    }, 

    // checkIfFetchIsCompleted(word){
    //   if(word == "Error occured"){
    //     checkIfFetchIsCompleted(word);
    //   }else{
    //     getCommonWords(word);
    //     return;
    //   }
    // },

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
