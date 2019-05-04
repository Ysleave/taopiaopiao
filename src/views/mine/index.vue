<template>
  <div id="main">
    <Header title="猫眼电影"/>
    <div id="content">
      <login />
    </div>
    <TabBar/>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import Login from "@/components/Login";

export default {
  name: 'mine',
  components: {
    Header,
    TabBar,
    Login
  },

  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
