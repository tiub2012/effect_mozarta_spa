<template>
  <div class="page-header">
    <div class="max960 row">
      <div class="page-header-img">
        <div class="inner-page-header-img">
          <div class="iphi">
            <div class="div-a">
              <img src="@/assets/images/500.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="page-header-content">
        <div class="text-block-501">Сеанс-программа</div>
        <h1 class="heading _786765 al">
          ЭФФЕКТ
          <strong class="ab">МОЦАРТА</strong>
        </h1>
        <div class="text-block-501">
          Синхронизация биологических ритмов
          <br />в технике применения модели Моцарта
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1.heading._786765 {
  font-size: 70px;
  font-weight: 100;
}
.page-header-content {
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.page-header {
  min-height: 150px;
  padding: 1%;
  background-color: #fff;
}
.page-header-img {
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 240px;
}
.inner-page-header-img {
  display: flex;
  height: 100%;
  min-height: 200px;
  padding: 33px;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.iphi {
  position: absolute;
  left: 0%;
  top: 0%;
  display: block;
  width: 100%;
  height: 100%;
}
.div-a {
  display: flex;
  justify-content: center;
  height: 200px;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  background-image: none;
  box-shadow: 0 3px 10px 1px rgba(3, 131, 245, 0.28);
  font-weight: 300;
  text-align: center;
}
.div-a img {
  max-width: 100%;
}
@media (max-width: 1025px) {
  h1.heading._786765 {
    font-size: 62px;
  }
  .page-header {
    padding: 3%;
  }
}
@media (max-width: 801px) {
  h1.heading._786765 {
    font-size: 52px;
  }
}
@media (max-width: 500px) {
  .div-a {
    height: 120px;
    width: 120px;
  }
  .page-header-img {
    max-width: 120px;
  }
  h1.heading._786765 {
    font-size: 35px;
  }
  .text-block-501 {
    font-size: 13px;
  }
  .header-page .heading {
    margin-bottom: 3px;
  }
  .inner-page-header-img {
    min-height: 134px;
  }
}
</style>