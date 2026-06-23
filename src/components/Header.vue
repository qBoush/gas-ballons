<script setup>

</script>

<template>
  <div class="header">
    <div class="header-top">
      <div class="header-panel-top">
        <div class="header-panel-left">
          <div class="header-panel-city">
            <img src="../images/header/room.png" height="24" width="24"/>
            <a  href="#" class="header-panel-left-text">Петропавловск-Камчатский</a>
          </div>
          <a href="#" class="header-panel-left-text">Доставка</a>
        </div>
        <div class="header-panel-right">
          <a href="#" class="header-panel-right-text">О компании</a>
          <a href="#" class="header-panel-right-text">Контакты</a>
          <a href="#" class="header-panel-right-text">Оптовикам</a>
          <div class="header-panel-right-account">
            <p class="header-panel-right-text">Личный кабинет</p>
            <img src="../images/header/keyboard_arrow_down.png" height="24" width="24"/>
          </div>

        </div>
      </div>
    </div>
    <div class="header-center">
      <div class="header-panel-center">
        <img src="../images/header/logo.png" height="45" width="195"/>
        <div class="search-container">
          <input class="search" type="text" placeholder="Поиск">
          <button class="search-btn">
            <img src="../images/header/search.png" height="24" width="24"/>
          </button>
        </div>
        <div class="header-panel-center-favorite">
          <img src="../images/header/favorite.png" height="24" width="24"/>
          <a href="#" class="header-panel-center-comparison-text">Избранное</a>
        </div>
        <div class="header-panel-center-comparison">
          <img src="../images/header/comparison.png" height="24" width="24"/>
        <a href="#" class="header-panel-center-comparison-text">Сравнение</a>
        </div>
        <div class="header-panel-center-phone">
          <img src="../images/header/local_phone.png" height="24" width="24"/>
          <div>
            <p class="header-panel-center-phone-text">8 (495) 888-88-88</p>
            <a href="#" class="header-panel-center-order-text">Заказать звонок</a>
          </div>
        </div>
        <div class="header-panel-center-phone">
          <img src="../images/header/shopping_cart.png" height="24" width="24"/>
          <div>
            <p class="header-panel-center-phone-text">13 500р.</p>
            <a href="#" class="header-panel-center-order-text">Оформить заказ</a>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-panel-bottom">
        <div class="header-panel-bottom-catalog">
          <img src="../images/header/catalog.png" height="15" width="15"/>
          <a href="#">Каталог</a>
        </div>
        <a href="#">Акции</a>
        <a href="#">Баллоны</a>
        <a href="#">Плиты</a>
        <a href="#">Редукторы</a>
        <a href="#">Обогреватели</a>
        <a href="#">Горелки</a>
        <a href="#">Рампы</a>
        <a href="#">Фитинги</a>
        <a href="#">Подводки и шланги</a>
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
}
.header-top {
  background-color: #012D5A;
  height: 36px;
}
.header-panel-top {
  display: flex;
  justify-content: center;
}
.header-panel-left  {
  display: flex;
  gap: 51px;
  margin: 0;
  padding-right: 256px;
}
.header-panel-right  {
  display: flex;
  gap: 51px;
  margin: 0;
}
.header-panel-city {
  display: flex;
}
.header-panel-city img {
  padding-top: 6px;
  padding-right: 4px;
}
.header-panel-left-text {
  font-size: 16px;
  padding-top: 9px;
  color: white;
  text-decoration: none;
}
.header-panel-right-text {
  font-size: 16px;
  padding-top: 9px;
  color: white;
  text-decoration: none;
}
.header-panel-right-account {
  display: flex;
}
.header-panel-right-account img {
  padding-top: 6px;
  padding-left: 5px;
}
.header-center {
  height: 80px;
}
.header-panel-center {
  display: flex;
  gap: 30px;
  padding-top: 16px;
  justify-content: center;
}
.header-panel-center img {
  margin: 0;
}
.search-container {
  display: flex;
  align-items: center;
  width: 352px;
  height: 48px;
  border: 1px solid #b7c1cb;
  border-radius: 25px;
  overflow: hidden;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  margin: 0;
}

.search {
  flex-grow: 1;
  height: 48px;
  width: 352px;
  border: none;
  outline: none;
  padding: 0 20px;
  font-size: 18px;
  color: #333333;
}

.search-btn {
  width: 60px;
  height: 48px;
  background-color: #2ca0d3;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.search-btn img {
  display: block;
}
.header-panel-center-favorite {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 0;
}
.header-panel-center-favorite img {
  margin: 0 auto;
  display: block;
}
.header-panel-center-comparison {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 0;
}
.header-panel-center-comparison-text {
  text-decoration: none;
  color: black;
}
.header-panel-center-comparison img {
  margin: 0 auto;
  display: block;
}
.header-panel-center-phone {
  display: flex;
  margin: 0;
}
.header-panel-center-phone img {
  padding-top: 12px;
  padding-right: 10px;
}
.header-panel-center-phone-text {
  font-size: 16px;
  font-weight: bold;
  padding-top: 6px;
}
.header-panel-center-order-text {
  font-size: 14px;
  color: #25A1D3;
  width: 111px;
  margin: 0;
}
.header-panel-bottom {
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-right: 105px
}
.header-panel-bottom a {
  font-size: 16px;
  margin: 0;
  padding-top: 16px;
  text-decoration: none;
  color: black;
}
.header-panel-bottom-catalog {
  margin: 0;
  background-color: #25A1D3;
  color: #fff;
  display: flex;
  height: 50px;
  width: 123px;
}
.header-panel-bottom-catalog a {
  padding-right: 20px;
  color: white;
}
.header-panel-bottom-catalog img {
  padding-top: 18px;
}
</style>