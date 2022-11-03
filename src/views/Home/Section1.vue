<template>
  <div class="section section1">
    <div class="layout">
      <div class="content-box">
        <div class="title">Entertainment</div>
        <div class="title2">Public Chain</div>
        <div class="content">the ETM Entertainment Public Chain protocol is fully decentralized and operated by a strong
          decentralized
          community of artists , fans , and node operators
        </div>
        <div class="download-box">
          <div class="download-title"><img src="../../assets/imgs/pc/download.png" />DOWNLOAD</div>
          <div class="download-btn-box">
            <div class="download-android"><img src="../../assets/imgs/pc/android-icon.png" />Android</div>
            <div class="download-ios"><img src="../../assets/imgs/pc/ios-icon.png" />iOS</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped lang="less">
.section1 {
  background-color: #fff;
  background-image: url('../../assets/imgs/pc/section1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;

  .content-box {

    .title {
      font-size: 80rem;
      font-weight: 600;
      line-height: 1;
      text-shadow: -3px -3px 0px rgb(91, 0, 185);
    }

    .title2 {
      font-size: 60rem;
      font-weight: 600;
      margin-bottom: 50rem;
      text-shadow: -3px -3px 0px rgb(91, 0, 185);
    }

    .content {
      max-width: 500rem;
      font-size: 30rem;
      font-weight: 600;
      margin-bottom: 75rem;
      line-height: 1.2;
    }

    .download-box {
      font-size: 32rem;
      font-weight: 600;

      img {
        width: 35rem;
        margin-right: 30rem;
      }

      .download-btn-box {

        .download-android,
        .download-ios {
          width: 250rem;
          padding: 10rem 30rem;
          display: flex;
          align-items: center;
          border: 2px solid #000;
          border-radius: 20px;
          color: #fff;
          text-align: center;
          cursor: pointer;
        }

        .download-ios {
          img {
            margin-right: 70rem;
          }
        }
      }


      .download-title,
      .download-android {
        margin-bottom: 20rem;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .section1 {
    background-image: url('../../assets/imgs/mobile/section1.png');
    background-position: center top;
    display: block;

    .layout {
      padding: 0 110rem;

      .content-box {
        .title {
          margin-top: 170rem;
          font-size: 72rem;
          text-shadow: -1px -1px 0px rgb(91, 0, 185);
        }

        .title2 {
          font-size: 48rem;
          text-shadow: -1px -1px 0px rgb(91, 0, 185);
        }

        .content {
          font-size: 28rem;
          color: #fff;
          text-shadow: 0 1px 0 #000;
          // margin-top: 630rem;
          position: absolute;
          bottom: 200rem;
          margin-bottom: 40rem;
        }

        .download-box {
          position: absolute;
          left: 50%;
          bottom: 60rem;
          transform: translate(-50%, 0);

          .download-title {
            margin-bottom: 0;
            width: 100%;
            text-align: center;
            margin-bottom: 20rem;
            font-size: 36rem;
          }

          .download-btn-box {
            display: flex;
            gap: 30rem;

            .download-android {
              margin-bottom: 0;
            }

            .download-android,
            .download-ios {
              width: 240rem;
              padding: 18rem 30rem;
              justify-content: center;
              border: 1px solid #000;
              border-radius: 10px;
              color: #fff;
              text-align: center;
              cursor: pointer;
              font-size: 32rem;
            }

            .download-ios {
              img {
                margin-right: 50rem;
              }
            }

            img {
              width: 50rem;
            }
          }
        }
      }
    }
  }
}
</style>