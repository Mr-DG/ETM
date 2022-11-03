<template>
  <div class="section section5">
    <div class="container">
      <div class="title">
        Entertainment public chain
        ETM content ledger
      </div>
      <div class="content">
        <div class="content-item">
          <div class="item-left"><img src="../../assets/imgs/pc/heart.png" alt=""></div>
          <div class="item-right">
            Consistent audio content and metadata format specifications to ensureaccessibility (
            similar to the OMI metadata specifications
          </div>
        </div>
        <div class="content-item">
          <div class="item-left"><img src="../../assets/imgs/pc/heart.png" alt=""></div>
          <div class="item-right">
            A registry of all nodes accessible in ETM
          </div>
        </div>
        <div class="content-item">
          <div class="item-left"><img src="../../assets/imgs/pc/heart.png" alt=""></div>
          <div class="item-right">
            plementation of the token and governance system described in this paper
          </div>
        </div>
        <div class="content-item">
          <div class="item-left"><img src="../../assets/imgs/pc/heart.png" alt=""></div>
          <div class="item-right">
            Social graph of all users interacting with the ETM public chain protocol
          </div>
        </div>
        <div class="content-item">
          <div class="item-left"><img src="../../assets/imgs/pc/heart.png" alt=""></div>
          <div class="item-right">
            Artist-controlled decentralized processes , including tracking of content , revenuesharing , and content
            ownership structures
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.section5 {
  background-color: #fff;
  background-image: url('../../assets/imgs/pc/section5.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .container {
    max-width: 1200rem;
    font-weight: 600;

    .title {
      font-size: 80rem;
      text-align: center;
      line-height: 1.2;
      text-shadow: 0px 7px 0px #000;
      margin-bottom: 30rem;
    }

    .content {
      font-size: 30rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .content-item {

        display: flex;
        margin-bottom: 20rem;
        width: 80%;

        .item-left {
          display: flex;
          align-items: center;
        }

        .item-right {
          margin-left: 50rem;
          text-shadow: 0px 4px 0px #000;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .section5 {
    background-image: url('../../assets/imgs/mobile/section5.png');

    .container {

      .title {
        font-size: 48rem;
        margin: 0 auto 140rem;
      }

      .content {
        font-size: 28rem;

        .content-item {
          margin-bottom: 50rem;

          .item-left {
            align-items: flex-start;

            img {
              width: 64rem;
            }
          }

          .item-right {}
        }
      }
    }
  }
}
</style>