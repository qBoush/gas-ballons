<script setup>
</script>

<template>
  <div class="footer">
    <div class="footer-top">
      <img src="../images/footer/logo-footer.png" height="38" width="190"/>
      <a href="#">О компании</a>
      <a href="#">Каталог</a>
      <a href="#">Оптовикам</a>
      <a href="#">Контакты</a>
      <button>Записаться на консультацию</button>
    </div>

    <div class="footer-center">
      <a href="#">Оплата и доставка</a>
      <a href="#">Гарантия и возврат</a>
      <a href="#">Подарочные сертификаты</a>
      <a href="#">Акции и скидки</a>
      <a href="#">Новости и статьи</a>
      <a href="#">Личный кабинет</a>
      <a class="footer-center-map" href="#">Карта сайта</a>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <a href="#">© «evroballon.ru», 2021</a>
        <a href="#">Политика безопасности</a>
        <a href="#">ОГРН 123456789</a>
      </div>
      <div class="footer-bottom-right">
        <a href="#">nikitinbb17@gmail.com</a>
        <a class="footer-bottom-right-socials" href="#"><img src="../images/footer/Mask Group.png" height="30" width="30"/></a>
        <a class="footer-bottom-right-socials" href="#"><img src="../images/footer/facebook%201.png" height="30" width="30"/></a>
        <a class="footer-bottom-right-socials" href="#"><img src="../images/footer/vk%201.png" height="30" width="30"/></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'roboto';
  src: url('../fonts/Roboto-VariableFont_wdth,wght.ttf') format('truetype');
  font-style: normal;
}

* {
  font-family: 'roboto';
  box-sizing: border-box;
}

.footer {
  background-color: #2B2B2B;
  width: 100%;
}

.footer-top {
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
  width: 1170px;
  margin: 0 auto;
  border-bottom: 1px solid #3D3D3D;
  height: 108px;
}

.footer-top img {
  display: block;
}

.footer-top button {
  height: 48px;
  width: 271px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #A6B0B9;
  border-radius: 34px;
  background-color: #2B2B2B;
}

.footer-top a {
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  color: white;
}

.footer-center {
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-top: 28px;
  padding-bottom: 30px;
  margin: 0 auto;
  border-bottom: 1px solid #3D3D3D;
  width: 1170px;

}

.footer-center a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin: 0;
}
.footer-center-map {
  padding-left: 94px;
}
.footer-bottom {
  display: flex;
  height: 66px;
  justify-content: center;
}
.footer-bottom-left {
  display: flex;
  gap: 40px;
  margin: 0;
}
.footer-bottom-left a {
  font-size: 14px;
  color: #A6B0B9;
  text-decoration: none;
  margin: 0;
  padding-top: 24px;

}
.footer-bottom-right {
  display: flex;
  gap: 20px;
  margin: 0;
  padding-left: 359px;
}
.footer-bottom-right-socials {
  transform: translateY(-8px);
}
.footer-bottom-right a {
  font-size: 14px;
  color: #A6B0B9;
  text-decoration: none;
  margin: 0;
  padding-top: 24px;

}
</style>