<template>
  <div class="first" id="y1">
    <div class="inner-first">
      <h1 class="heading-2">ТОРПЕДО-ТЕРАПИЯ</h1>
      <div class="stack__l">
        <div class="heroparagraph">
          <p class="copy__m">ЭФФЕКТИВНОЕ РЕШЕНИЕ,</p>
        </div>
        <div class="text-block-343">
          успешно применяемое при состояниях,
          <br />воспринимаемых как не улучшающиеся,
          <br />несмотря на лекарства и другие формы лечения
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page3.content {
  .first {
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 4%;
    background-color: #edeff2;
    background-image: radial-gradient(
        circle farthest-corner at 50% 50%,
        hsla(0, 0%, 100%, 0.77),
        transparent
      ),
      url("../../assets/images/ers.jpg");
    background-position: 0px 0px, 50% 50%;
    background-size: auto, cover;
    background-repeat: repeat, no-repeat;
    background-attachment: scroll, scroll;

    .inner-first {
      padding-bottom: 4rem;

      .heading-2 {
        margin-bottom: 9px;
        color: #d10003;
        font-size: 85px;
        line-height: 1.2em;
        font-weight: 900;
        text-align: center;
        font-family: impact;
      }

      .stack__l {
        padding-bottom: 0rem;
      }

      .copy__m {
        font-size: 32px;
        line-height: 1.2em;
        font-weight: 400;
        text-align: center;
      }

      .text-block-343 {
        margin-bottom: 2%;
        font-size: 24px;
        line-height: 1.4em;
        text-align: center;
      }

      @media (max-width: 1025px) {
        .heading-2 {
          font-size: 60px;
        }
      }
      @media (max-width: 500px) {
        .heading-2 {
          font-size: 32px;
        }
        .copy__m {
          font-size: 20px;
        }
        .text-block-343 {
          font-size: 14px;
        }
      }
    }

    @media (max-width: 500px) {
      .inner-first {
        padding-bottom: 2rem;
      }
    }
  }
}
</style>