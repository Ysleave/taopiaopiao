<template>
  <div class="Message">
    <h2>{{ title}}</h2>
    <p>{{ content }}</p>
    <div>
        <div @touchstart="handleCancel">{{ cancel }}</div>
        <div @touchstart="handleok">{{ ok }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style scoped>
  .Message{
      width: 200px;
      height:120px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background: white;
      box-shadow: 3px 3px 3px 3px #ccc;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -60px 0 0 -100px;
  }
  .Message h2{
      text-align: center;
      line-height: 40px;
      font-size: 18px
  }
  .Message p{
      text-align: center;
      line-height: 40px;
  }
  .Message > div{
      display: flex;
      position: absolute;
      bottom: 0;
      width: 100%;
      border-top: 1px solid #ccc;
  }
  .Message > div div{
      flex: 1;
      text-align: center;
      line-height: 30px;
      border: 1px solid #ccc;      
}
/* .Message >div div:last-child{
    border: none;
} */

</style>
