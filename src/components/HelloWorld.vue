<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import {createEngine} from '../engine/engine';
import {Renderer} from '../engine/render';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      gameState: {
        body: []
      }
    }
  },
  methods: {
    render(gameState) {
      if (gameState.gameStatus == 3) {
        alert('game over');
      }
      Renderer(gameState.body);
    },
    onKeyDown(e) {
      if (e && e.key && this) {
        switch (e.key) {
          case 'ArrowRight':
            this.$gameEngine.rotate();
            break;
          case 'ArrowUp':
            this.$gameEngine.moveLeft();
            break;
          case 'ArrowDown':
            this.$gameEngine.moveRight();
            break;
          case 'ArrowLeft':
            this.$gameEngine.moveDown();
            break;
        }
      }
    }
  },
  beforeMount() {
    this.$gameEngine = createEngine(this.render);
    window.document.body.addEventListener('keydown', this.onKeyDown.bind(this));
    this.$gameEngine.start();
    setInterval(() => {
        this.$gameEngine.moveDown();
    }, 500);
  },
}
</script>
