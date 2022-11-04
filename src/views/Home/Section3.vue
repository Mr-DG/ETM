<template>
  <div class="section section3">
    <div class="container">
      <div class="title">ETM Economics Model</div>
      <div class="content">
        <div class="content-left">
          <p>entertainment public chain protocol ETM will be used by manydifferent stakeholders with different goals .
            In order for these differentstakeholders to effectively work together to achieve common networkgoals
          </p>
          <p>
            there needs to be a unified incentive structure that aligns individualterests with the interests of the
            protocol
          </p>
        </div>
        <div class="content-right">
          <div class="right-item">
            <div class="item-icon"><img src="../../assets/imgs/pc/glasses.png" alt=""></div>
            <div class="item-content"><span>Protocol Network Security</span></div>
          </div>
          <div class="right-item">
            <div class="item-icon"><img src="../../assets/imgs/pc/glasses.png" alt=""></div>
            <div class="item-content"><span>Feature Access</span></div>
          </div>
          <div class="right-item">
            <div class="item-icon"><img src="../../assets/imgs/pc/glasses.png" alt=""></div>
            <div class="item-content"><span>Stake Governance</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped lang="less">
.section3 {
  background-color: #fff;
  background-image: url('../../assets/imgs/pc/section3.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 1200rem;

    .title {
      font-size: 80rem;
      text-align: center;
      margin-bottom: 120rem;
      text-shadow: 0px 7px 0px #000;
    }

    .content {
      font-size: 30rem;
      display: flex;
      gap: 150rem;

      .content-left {
        width: 60%;
        line-height: 1.5;
        text-shadow: 0px 4px 0px #000;

        & p:first-child {
          margin-bottom: 50rem;
        }
      }

      .content-right {
        width: 40%;
        text-shadow: 0px 4px 0px #000;

        .right-item {
          margin-bottom: 50rem;

          .item-icon {
            img {
              width: 120rem;
            }
          }

          .item-content {
            span {
              border-bottom: 2px solid #fff;
            }
          }
        }
      }
    }
  }

}

@media screen and (max-width: 750px) {
  .section3 {
    background-image: url('../../assets/imgs/mobile/section3.png');

    .container {
      padding: 0 100rem;

      .title {
        font-size: 48rem;
        text-shadow: 0 3px 0 #000;
      }

      .content {
        flex-direction: column;
        gap: 0;

        .content-left {
          width: 100%;
          text-align: center;
          font-size: 28rem;
          text-shadow: 0 2px 0 #000;

          & p:last-child {
            margin-bottom: 100rem;
          }
        }

        .content-right {
          width: 100%;

          .right-item {
            display: flex;
            gap: 20rem;

            .item-icon {
              img {
                width: 80rem;
              }
            }

            .item-content {
              span {
                font-size: 32rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>