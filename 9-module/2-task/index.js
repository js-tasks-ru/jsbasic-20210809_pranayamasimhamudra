import Carousel from "../../6-module/3-task/index.js";
import slides from "../../6-module/3-task/slides.js";

import RibbonMenu from "../../7-module/1-task/index.js";
import categories from "../../7-module/1-task/categories.js";

import StepSlider from "../../7-module/4-task/index.js";
import ProductsGrid from "../../8-module/2-task/index.js";

import CartIcon from "../../8-module/1-task/index.js";
import Cart from "../../8-module/4-task/index.js";

export default class Main {
  constructor() {}

  async render() {
    this._carousel = new Carousel(slides);
    document
      .querySelector(`[data-carousel-holder]`)
      .append(this._carousel.elem);

    this._ribbon = new RibbonMenu(categories);
    document.querySelector(`[data-ribbon-holder]`).append(this._ribbon.elem);

    this._slider = new StepSlider({ steps: 5, value: 0 });
    document.querySelector(`[data-slider-holder]`).append(this._slider.elem);
    document.querySelector(".slider__thumb").style.left = "0%";
    document.querySelector(".slider__progress").style.width = "0%";

    this._icon = new CartIcon();
    document.querySelector(`[data-cart-icon-holder]`).append(this._icon.elem);

    this._cart = new Cart(this._icon);

    this._dishes = await fetch("./products.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return `${error.message}`;
      });

    this._grid = new ProductsGrid(this._dishes);
    document.querySelector(`[data-products-grid-holder]`).innerHTML = null;
    document
      .querySelector(`[data-products-grid-holder]`)
      .append(this._grid.elem);

    this.filterElements();
    this.initialListeners();
  }

  filterElements() {
    this._grid.updateFilter({
      noNuts: document.getElementById("nuts-checkbox").checked,
      vegeterianOnly: document.getElementById("vegeterian-checkbox").checked,
      maxSpiciness: this._slider.data,
      category: this._ribbon.categories[0].id,
    });
  }

  initialListeners() {
    document.body.addEventListener("product-add", (additionEvent) => {
      this._dishes.forEach((element) => {
        if (element.id === additionEvent.detail) this._cart.addProduct(element);
      });
    });

    document.body.addEventListener("change", (changeEvent) => {
      changeEvent.target.id === "nuts-checkbox"
        ? this._grid.updateFilter({ noNuts: changeEvent.target.checked })
        : changeEvent.target.id === "vegeterian-checkbox"
        ? this._grid.updateFilter({
            vegeterianOnly: changeEvent.target.checked,
          })
        : false;
    });

    this._slider.elem.addEventListener("slider-change", (sliderEvent) => {
      this._grid.updateFilter({ maxSpiciness: sliderEvent.detail });
    });

    this._ribbon.elem.addEventListener("ribbon-select", (ribbonEvent) => {
      this._grid.updateFilter({ category: ribbonEvent.detail });
    });
  }
}
