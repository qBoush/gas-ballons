<script setup>
import { ref } from 'vue';


const cards = ref([
  { id: 1, isFavorite: false, isTune: false },
  { id: 2, isFavorite: false, isTune: false },
  { id: 3, isFavorite: false, isTune: false },
  { id: 4, isFavorite: false, isTune: false },
]);


</script>

<template>
<section class="slider">
  <div class="slider-container">
    <img class="slider-left" src="../images/Home/button-slider.png"/>
    <img src="../images/Home/slider.png" height="274" width="1170"/>
    <img class="slider-right" src="../images/Home/button-slider.png"/>
  </div>
  <div class="slider-progress">
    <img src="../images/Home/active-slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
    <img src="../images/Home/slide.png" height="5" width="5"/>
  </div>
</section>
  <section class="sales">
    <h2>Хиты продаж</h2>
    <div class="sales-cards">
      <div v-for="card in cards" :key="card.id" class="sales-card">
        <div class="sales-card-image-wrapper">
          <div class="sales-card-discount">Скидка 10%</div>
          <div class="sales-card-actions">
            <button
                class="action-btn-favorite"
                :class="{ 'active': card.isFavorite }"
                @click="card.isFavorite = !card.isFavorite">
            </button>
            <button
                class="action-btn-tune"
                :class="{ 'active': card.isTune }"
                @click="card.isTune = !card.isTune">
            </button>
          </div>
          <img class="sales-card-img" src="../images/Home/section-sales/card_image.png"/>
        </div>
        <div class="sales-card-info">
          <h3 class="sales-card-title">Автоматически<br> переключаемый<br> регулятор SRG</h3>
          <div class="sales-card-rating">
            <img src="../images/Home/section-sales/star.png" height="16" width="16"/>
            <span class="rating-score">4,6</span>
            <a href="#" class="rating-reviews">1 отзыв</a>
          </div>
          <div class="sales-card-price">5 175р.</div>
            <button class="btn-buy">Купить в один клик</button>
            <button class="btn-card">В корзину</button>
          </div>
        </div>
      </div>
  </section>
  <section class="slider">
    <div class="slider-container">
      <img class="slider-left" src="../images/Home/button-slider.png"/>
      <img src="../images/Home/slider2.png" height="289" width="1170"/>
      <img class="slider-right" src="../images/Home/button-slider.png"/>
    </div>
    <div class="slider-progress">
      <img src="../images/Home/slide.png" height="5" width="5"/>
      <img src="../images/Home/slide.png" height="5" width="5"/>
      <img src="../images/Home/active-slide.png" height="5" width="5"/>
      <img src="../images/Home/slide.png" height="5" width="5"/>
      <img src="../images/Home/slide.png" height="5" width="5"/>
      <img src="../images/Home/slide.png" height="5" width="5"/>
    </div>
  </section>
  <section class="item-category">
    <h2>
      Категории товаров
    </h2>
    <div class="items-category">
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/complects.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Комплекты
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-ballons.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые баллоны
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-reductors.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые редукторы
          </h1>
        </div>
      </div>
    </div>
    <div class="items-category">
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-plites.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые плиты
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-heaters.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые обогреватели
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-burners.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые горелки
          </h1>
        </div>
      </div>
    </div>
    <div class="items-category">
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-ramps.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые рампы
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-fitings.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Газовые фитинги
          </h1>
        </div>
      </div>
      <div class="item-card">
        <div class="item-card-image">
          <img src="../images/Home/item-category/gas-hones.png" height="50" width="50"/>
        </div>
        <div class="item-card-title">
          <h1>
            Подводки и шланги
          </h1>
        </div>
      </div>
    </div>
  </section>
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
.slider-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 25px;
}
.slider-container img {
  margin: 0;
}
.slider-left, .slider-right {
  height: 50px;
  width: 50px;
  box-shadow: 0 4px 15px #0000000D;
  cursor: pointer;
}
.slider-left {
  transform: translateX(35px)
}
.slider-right {
  transform: translateX(-35px) rotatey(180deg);
}
.slider-progress {
  display: flex;
  gap: 16px;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 70px;
}
.slider-progress img {
  margin: 0;
}
.sales h2 {
  font-size: 28px;
  text-align: center;
  transform: translateX(-495px);
  margin: 0;
}
.sales-cards {
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-bottom: 80px;
}
.sales-card {
  width: 270px;
  height: 590px;
  border: 1px solid #E1F0FE;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0;

}

.sales-card-image-wrapper {
  position: relative;
  background-color: #FAFAFA;
  display: flex;
  width: 270px;
  height: 270px;
  justify-content: center;
  align-items: center;
}

.sales-card-img {
  width: 200px;
  height: 200px;
  padding-top: 35px;
}

.sales-card-discount {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #25A1D3;
  color: #fff;
  font-size: 14px;
  height: 24px;
  width: 104px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sales-card-actions {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-btn-favorite, .action-btn-tune {
  background: #fff;
  border: 1px solid #A6B0B9;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px;
  transition: all 0.2s ease;
}

.action-btn-favorite { background-image: url('../images/Home/section-sales/favorite_border.png'); }
.action-btn-favorite:hover { background-image: url('../images/Home/section-sales/favorite_hover.png'); }
.action-btn-favorite.active { background-image: url('../images/Home/section-sales/favorite_selected.png'); border-color: #25A1D3; }

.action-btn-tune { background-image: url('../images/Home/section-sales/tune.png'); }
.action-btn-tune:hover { background-image: url('../images/Home/section-sales/tune_hover.png'); }
.action-btn-tune.active { background-image: url('../images/Home/section-sales/tune_hover.png'); border-color: #25A1D3; }
.sales-card-info {
  width: 230px;
}

.sales-card-title {
  margin: 0;
  font-size: 18px;
  color: #333333;
  padding-top: 17px;
}

.sales-card-rating {
  display: flex;
  font-size: 13px;
  padding-top: 12px;
}

.sales-card-rating img {
  margin: 0;
}
.rating-score {
  color: #E98F10;
  margin: 0;
  font-size: 14px;
  padding-left: 7px;
  padding-bottom: 34px;
}

.rating-reviews {
  color: #333333;
  margin: 0;
  padding-left: 21px;
  font-size: 14px;
}

.sales-card-price {
  font-size: 24px;
  font-weight: 700;
  color: #333333;
  padding-bottom: 16px;
}

.sales-card-info button {
  width: 100%;
  padding: 17px 0;
  border-radius: 62px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-buy {
  background-color: #25A1D3;
  color: #fff;
  border: none;
}

.btn-buy:hover {
  background-color: #012D5A;
}


.btn-card {
  background-color: #fff;
  color: #25A1D3;
  border: 1px solid #25A1D3;
}

.btn-card:hover {
  color: #012D5A;
  border-color: #012D5A;
}

.item-category h2 {
  font-size: 28px;
  text-align: center;
  transform: translateX(-460px);
  margin: 0;
}
.items-category {
  padding-top: 30px;
  display: flex;
  gap: 30px;
  justify-content: center;
}
.item-card {
  height: 74px;
  width: 370px;
  background: white;
  display: flex;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  margin: 0;
}
.item-card:hover {
  box-shadow: 0 4px 15px #0000000D,
  0 4px 15px #0000000D;
  transition: all 0.5s ease;
}
.item-card-image {
  margin: 0;
  background: #F3F3F3;
  height: 64px;
  width: 64px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
}
.item-card-image img {
  margin: 0;
}
.item-card-title {
  margin: 0;
}
.item-card-title h1 {
  font-size: 20px;
}
</style>