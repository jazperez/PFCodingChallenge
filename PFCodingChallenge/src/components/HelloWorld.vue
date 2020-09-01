<template>
  <div>
    <div class="title">Piñata Farms Front-End Coding Challenge</div>
    <div class="container">
      <div class="child1">
        <div @ondragover="onDragOver(event);" @ondrop="onDrop(event);">
          <div :key="componentKey" class="word-overlay">
            <video controls name="Video of man doing the moonwalk to Michael Jackson's song, 'Rock With You' ">
              <source
                src="https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4"
                type="video/mp4"
              />
            </video>
            <div
              draggable="true"
              id="draggable"
              @ondragstart="onDragStart(event);"
              class="tooltip dragme"
              v-for="commonWord in commonWords"
              :key="commonWord.word"
              v-show="commonWord.show"
              :class="commonWord.textColor"
              @click="changeColor(commonWord.textColor)"
              @mouseover="showCoords($event)"
            >
              {{commonWord.word}}
              <span class="tooltiptext">{{coordMsg}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="child2">
        <li class="button-row">
          <a 
            v-for="commonWord in commonWords"
            :key="commonWord.word"
            @click="commonWord.show = !commonWord.show"
            :style='{"background-color" : (commonWord.show? "#42b983" : "#555" )}'>
            {{ commonWord.word }}
          </a>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      coordMsg: "",
      componentKey: 0,
      wordList: {
        word: "Error occured",
        show: true,
        colorCounter: 0,
        colors: ["red", "blue", "green", "yellow", "white"]
      },
      resultArrayList:[],
      longString:"",
      commonWords: [
        {
          word: "Moondance",
          show: true,
          textColor: "red"
        },
        {
          word: "MJ",
          show: true,
          textColor: "red",
          colors: ["red", "blue", "green", "yellow", "white"]
        },
        {
          word: "Magic",
          show: true,
          textColor: "red",
          colors: ["red", "blue", "green", "yellow", "white"]
        },
        {
          word: "groove",
          show: true,
          textColor: "red",
          colors: ["red", "blue", "green", "yellow", "white"]
        },
        {
          word: "all-night",
          show: true,
          textColor: "red",
          colors: ["red", "blue", "green", "yellow", "white"]
        }
      ]
    };
  },
  created() {
    const url1 = "https://frontend-coding-challenge.s3.amazonaws.com/1.txt";
    const url2 = "https://frontend-coding-challenge.s3.amazonaws.com/2.txt";
    const url3 = "https://frontend-coding-challenge.s3.amazonaws.com/3.txt";

    //var urls = [url1, url2, url3];
    //var getWords = this.getWordsFromLists(urls)

    const aggregatedInput = this.getWordsFromLists(url1, url2, url3);
    console.log("calling big method " + aggregatedInput);
    //console.log("calling big method " + getWords);

    //this.getCommonWords(aggregatedInput);
    this.getCommonWords();
  },
  mounted() {
    //setTimeout(this.getCommonWords(this.wordList1.word), 300000);
    //this.getCommonWords(this.wordList1.word);
  },
  methods: {
    async getWordsFromLists(url1, url2, url3) {
      //solution 3
      try{
        let data = await Promise.all([
          fetch(url1),
          fetch(url2),
          fetch(url3),
        ]).then(function (responses){
        return Promise.all(responses.map(response => response.text()))
          .then(
            arrayResults => {const singleArray = arrayResults.reduce((p, c) => p + c)
            console.log("SingleArray: " + singleArray)
            return singleArray
            })
        })
        console.log("data: " + data)
        return data;
      }
      catch (error){
        console.log("Error occurred: " + error)
        throw (error)
      }
      
      //solution2
      // var promise = new Promise(function (resolve, reject) {
      //   Promise.all([
      //     fetch(url1),
      //     fetch(url2),
      //     fetch(url3)])
      //     .then(function (responses) {
      //       Promise.all(responses.map((response) => response.text())).then(
      //         (arrayResults) => {
      //           const singleArray = arrayResults.reduce((p, c) => p + c);
      //           console.log("within promise " + singleArray)
      //           resolve(singleArray);
      //         }
      //       );
      //     })
      //   .catch(function (error) {
      //     console.log("Error occurred: " + error);
      //   });
      // });
      
      
      // promise.then(
      //   function (singleArray) {
      //     console.log("at promise.then single array result: " + singleArray)
      //     return singleArray;
      //   },
      //   function (err) {
      //     console.log("Error occurred: " + err);
      //   }
      // );

      //solution1
      // return Promise.all([
      //   fetch(url1),
      //   fetch(url2),
      //   fetch(url3)
      // ])
      // .then(function (responses){
      //   return Promise.all(responses.map(response => response.text()))
      //     .then(
      //       arrayResults => {const singleArray = arrayResults.reduce((p, c) => p + c)
      //       return singleArray
      //       })
      // })
      // .catch(function (error) {
      //   console.log("Error occurred: " + error);
      // })
      // .then(function (data) {
      //   console.log(data);
      // })
    },

    getCommonWords(phrase) {
      var numOfCommonWords = 5;
      var wordCounts = {};
      //console.log("phrase: " + phrase);
      //var phrase = phrase;
      //test phrase
      var phrase =
        " Marry had a little lamb, little lamb, and the lamb was white as snow. Lamb was so little and so white.";
      phrase = phrase.replace(/(^\s*)|(\s*$)/gi, "");
      phrase = phrase.replace(/[ ]{2,}/gi, " ");
      phrase = phrase.replace(/\n /, "\n");
      phrase = phrase.replace(/[,.]/g, "");
      phrase = phrase.toLowerCase();
      var words = phrase.split(" ");
      for (var i = 0; i < words.length; i++) {
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
      }
      var sortedNumCount = Object.entries(wordCounts).sort((a,b)=>b[1]-a[1]).map(el=>el[0])
      this.resultArrayList = sortedNumCount.slice(0,numOfCommonWords);

      console.log(phrase);
      console.log(words);
      console.log(wordCounts);
      console.log(sortedNumCount);
      console.log(this.resultArrayList);
      
      return this.resultArrayList;
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
      var coords = "X: " + x + "px" + ", Y: " + y + "px";
      this.coordMsg = coords;
    },

    changeColor(textColor) {
      textColor = this.commonWords.textColor;
      var colors = ["red", "blue", "green", "yellow", "white"];
      var lastColor = colors.length - 1;
      for (var i = 0; i < colors.length; i++) {
        if (textColor == colors[i]) {
          textColor = colors[i++];
          console.log("first if " + textColor);
          this.commonWords.textColor = textColor;
        }
        if (colors[i] == colors[lastColor]) {
          textColor = colors[0];
          console.log("second if " + textColor);
          this.commonWords.textColor = textColor;
        } else {
          textColor = colors[i++];
          console.log("else " + colors[i++]);
          this.commonWords.textColor = textColor;
        }
      }
    },

    forceRerender() {
      this.componentKey += 1;
    }
  },
  // allowDrop($event) {
  //   event.$preventDefault();
  // },

  onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
  },

  onDragOver(event) {
    event.preventDefault();
  },
  
  onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
    .dataTransfer
    .clearData();
  }

};
</script>

<style>
a {
  background-color: #42b983;
  color: white;
  padding: 1em 1.5em;
  text-decoration: none;
  margin-bottom:20%;
  margin-top:20%;
  display: block;
  cursor: pointer;
}
a:hover {
  background-color: #555;
}
a:active {
  box-shadow: none;
  top: 5px;
}

.container{
  position:relative;
  justify-content: center;
  padding-left:20%;
  padding-right:20%;
}
.child1{
  display: inline-block;
  float:left;
}
.child2{
  display: inline-block;
  float:right;
  
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

/* font */
.title {
  margin-bottom: 3%;
  font-size: 150%;
}
.button-ul {
  display: inline-block;
}
.button-list {
  display: block;
}

video {
  width: 100%;
  height: 100%;
  position: relative;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.word-overlay {
  position: absolute;
  /* pointer-events: none; */
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.dragme {
  cursor: pointer;
  font-size: 150%;
  font-weight: 600;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  justify-content: center;
}

.button-row{
  display:block;
}

.red {
  color: red;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
.yellow {
  color: yellow;
}
.white {
  color: white;
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
  top: 100%;
}

.tooltip:hover .tooltiptext {
  transition-delay: 2s;
  visibility: visible;
}

.tooltiptext {
  font-size: 10%;
  position: absolute;
}
</style>