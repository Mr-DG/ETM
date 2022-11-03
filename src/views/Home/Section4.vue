<template>
  <div class="section section4">
    <div class="container">
      <div class="title">
        Entertainment public chain
        ETM content nodes
      </div>
      <div class="content">As mentioned above , if the content is licensed , the artists client generates anencryption
        key for the shared content at the time of upload . It is then managed by acontent node selected by the artist .
        Thanks to Etm-dius , anyone can now accessencrypted content that is kept available by the selected content node
        Proxy relencryption allows content nodes to optionally issue keys to a given user upon request
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.section4 {
  background-color: #fff;
  background-image: url('../../assets/imgs/pc/section4.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;

  .container {
    max-width: 1200rem;

    .title {
      font-size: 80rem;
      text-align: center;
      line-height: 1.1;
      margin-bottom: 130rem;
      text-shadow: 0px 7px 0px #000;
    }

    .content {
      font-size: 30rem;
      text-align: center;
      text-shadow: 0px 4px 0px #000;
      line-height: 1.4;
    }
  }
}

@media screen and (max-width: 750px) {
  .section4 {
    background-image: url('../../assets/imgs/mobile/section4.png');

    .container {
      padding: 0 90rem;

      .title {
        font-size: 48rem;
        width: 80%;
        margin: 0 auto 150rem;
        text-shadow: 0px 2px 0px #000;
        line-height: 1.3;
      }

      .content {
        font-size: 28rem;
        text-align: center;
        text-shadow: 0px 2px 0px #000;
        line-height: 1.4;
      }
    }
  }
}
</style>