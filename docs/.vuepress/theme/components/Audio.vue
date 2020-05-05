<template>
  <div class="audioMain">
    <a
      class="audioA audioBtn btn-5"
      @click.prevent="handleAudio"
    >{{mini?'我要听歌':'先藏起来'}}</a>
    <aplayer
      :audio="audio"
      :mini="mini"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import APlayer from '@moefe/vue-aplayer'
Vue.use(APlayer)
export default {
  name: 'Audio',
  data() {
    return {
      mini: true,
      audio: [
        {
          name: 'The Party We Have Never Seen',
          artist: 'Nana Takahashi',
          url: 'https://cdn.moefe.org/music/mp3/thepartywehaveneverseen.mp3',
          cover: 'https://p1.music.126.net/IwclpJu4gaqhSZrKunEFWg==/3297435379408525.jpg?param=300y300' // prettier-ignore
        },
        {
          name: 'The',
          artist: 'Nana Takahashi',
          url: 'https://cdn.moefe.org/music/mp3/thepartywehaveneverseen.mp3',
          cover: 'https://cdn.jsdelivr.net/gh/peinkid/peinkid.github.io@v0.1/eye.png' // prettier-ignore
        }
      ]
    }
  },
  methods: {
    handleAudio() {
      this.mini = !this.mini
    }
  },
  created() {
    console.log(this)
  }
}
</script>
<style>
.audioMain {
  position: fixed;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
}

.audio {
  width: 66px;
  height: 66px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.audioA {
  border-radius: 8px;
  margin-left: 4px;
  background: linear-gradient(to right, #88c1ea, #e84118);
  border-bottom: 1px solid;
  color: #fff;
  line-height: 1.4;
  padding: 0.25em;
}
.audioA:hover {
  text-decoration: none;
  color: #f5f6fa;
}

.audioBtn {
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  width: 100%;
}

.btn-5 {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-5:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: #88c1ea;
  outline-offset: 4px;
  text-shadow: 1px 1px 2px #427388;
}
</style>