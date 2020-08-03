<template>
  <div>
    <div class="title">Piñata Farms Front-End Coding Challenge</div>
      <div class="container">
      <video controls>
        <source src="https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4" type="video/mp4">
      </video>
      <div :key="componentKey">
        <div class="word-overlay tooltip"
        v-for="commonWord in commonWords" 
        :key="commonWord.word" 
        :class="commonWord.textColor"
        @click="changeColor(commonWord.textColor)"
        @mouseover="showCoords($event)">
        {{commonWord.word}}
        <span class="tooltiptext">{{coordMsg}}</span>
      </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      coordMsg:'',
      componentKey: 0,
      wordList1: 
        {
          word: "Error occured",
          show: true,
          colorCounter: 0,
          colors: ["red", "blue", "green", "yellow", "white"]
        },
      wordList2:
        {
          word: "Error occured",
          show: true,
          colorCounter: 0,
          colors: ["red", "blue", "green", "yellow", "white"]
        },
      wordList3:
        {
          word: "Error occured",
          show: true,
          colorCounter: 0,
          colors: ["red", "blue", "green", "yellow", "white"]
        },
      commonWords:[
        {
          word: "Moondance", 
          show: true, 
          textColor: "red"
        }, 
        // {word: "MJ", show: true, colors: ["red", "blue", "green", "yellow", "white"]},
        // {word: "Magic", show: true, colors: ["red", "blue", "green", "yellow", "white"]},
        // {word: "groove", show: true, colors: ["red", "blue", "green", "yellow", "white"]},
        // {word: "all-night", show: true, colors: ["red", "blue", "green", "yellow", "white"]}
      ]
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
  // mounted(){
  //  // this.getCommonWords(this.wordList1.word) 
  // },
  methods:{
    getWordsFromList1(url) {
      fetch(url)
      .then((response) => response.text())
      .then((data) => (this.wordList1.word = data))
      .then(function(data){
        console.log(data)
      })
      .catch(error => console.log(error))
    },

    getWordsFromList2(url){
      fetch(url)
      .then((response) => response.text())
      .then((data) => (this.wordList2.word = data))
      .catch(error => console.log(error))
    }, 

    getWordsFromList3(url){
    fetch(url)
      .then((response) => response.text())
      .then((data) => (this.wordList3.word = data))
      .catch(error => console.log(error))
    }, 

    getCommonWords(phrase){
      this.forceRerender();
      var wordCounts = {}
      console.log("phrase: "+ phrase)
      //var phrase = " Marry had a little lamb, little lamb, and the lamb was white as snow.";
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

    showCoords($event) {
      var x = $event.clientX;
      var y = $event.clientY;
      var coords = "X: " + x +"px" + ", Y: " + y + "px";
      this.coordMsg = coords;
    },

      changeColor(textColor){
      textColor = this.commonWords.textColor;
      var colors = ["red", "blue", "green", "yellow", "white"]
      var lastColor = colors.length - 1;
      for(var i=0; i < colors.length; i++){
        if(textColor == colors[i]){
          textColor = colors[i++];
          console.log("first if " + textColor)
          this.commonWords.textColor = textColor;
        }if(colors[i] == colors[lastColor]){
          textColor = colors[0];
          console.log("second if " + textColor)
          this.commonWords.textColor = textColor;
        }else{
          textColor = colors[i++];
          console.log("else " + colors[i++])
          this.commonWords.textColor = textColor;
        }
      }
    },

    forceRerender() {
      this.componentKey += 1;
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

/* body containing video */
.container {
    position: relative;
    text-align: center;
}

/* font */
.title{
    margin-bottom: 3%;
    font-size: 150%;
}

video {
  position: relative;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.word-overlay {
  color:red;
  font-size: 150%;
  font-weight: 600;
  background: rgba(0,0,0,0);
  position: absolute;
  top: 0; right: 0; left: 0;
  display: flex;
  align-items: left;
  justify-content: center;
  cursor: pointer;
}

.red{
  color:red;
}
.blue{
  color:blue;
}
.green{
  color:green;
}
.yellow{
  color:yellow;
}
.white{
  color:white;
}

.tooltip {
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: grey;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 1% 1%;
  
  /* Position the tooltip */
  z-index: 1;
  left: 45%;
  top:100%;

}

.tooltip:hover .tooltiptext {
  transition-delay: 2s;
  visibility: visible;
}

.tooltiptext{
  font-size:10%;
  position: absolute;

}
</style>
