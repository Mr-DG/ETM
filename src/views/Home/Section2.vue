<template>
  <div class="section section2">
    <div class="content">
      Each NFT is non-fungible or non-substitutable , the opposite of Fungible Tokenof which Bitcoin is an exampleThe
      music industry chain mainly consists of three parts : contentproviders ( musicians , record companies , etc . )
      service providers ( distributionchannels , performance brokers , etc ) and consumers , with many intermediaries
      andcomplex value chain
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.section2 {
  background-color: #fff;
  background-image: url('../../assets/imgs/pc/section2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .content {
    color: #fff;
    font-size: 30rem;
    line-height: 1.5;
    font-weight: 600;
    width: 1200rem;
    margin-bottom: 80px;
    text-align: center;
  }
}

@media screen and (max-width: 750px) {
  .section2 {
    background-image: url('../../assets/imgs/mobile/section2.png');
    background-position: center top;

    .content {
      padding: 0 100rem;
      margin-bottom: 120rem;
      font-size: 28rem;
    }
  }
}
</style>