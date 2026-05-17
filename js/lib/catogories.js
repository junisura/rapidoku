export const CATEGORY_MASTER = {
  person: {
    label: "あの人の生き方",
    image: "./img/category/person.png",
    rotate: -1,
  },

  nature: {
    label: "自然・季節",
    image: "./img/category/nature.png",
    rotate: 1,
  },

  science: {
    label: "科学・自然現象",
    image: "./img/category/science.png",
    rotate: -1.5,
  },

  technology: {
    label: "技術・IT",
    image: "./img/category/technology.png",
    rotate: 1.5,
  },

  culture: {
    label: "文化・社会",
    image: "./img/category/culture.png",
    rotate: -0.5,
  },

  history: {
    label: "地理・歴史",
    image: "./img/category/history.png",
    rotate: 0.5,
  },

  philosophy: {
    label: "思想・哲学",
    image: "./img/category/philosophy.png",
    rotate: -1,
  },

  art: {
    label: "芸術・表現",
    image: "./img/category/art.png",
    rotate: 1,
  },

  occult: {
    label: "不思議・オカルト",
    image: "./img/category/occult.png",
    rotate: -1.5,
  },

  story: {
    label: "物語",
    image: "./img/category/story.png",
    rotate: 1.5,
  },
};
export function renderCategory(categoryId) {
  document.getElementById("category-frame").innerHTML = "";
  const newImage = document.createElement("img");
  newImage.src = CATEGORY_MASTER[categoryId].image;
  newImage.alt = `カテゴリ：${CATEGORY_MASTER[categoryId].label}`;
  newImage.classList.add("category-image");
  newImage.style.transform = `rotate(${CATEGORY_MASTER[categoryId].rotate}deg)`;
  document.getElementById("category-frame").appendChild(newImage);
}

// 後で消す----------------------------------------
export function convert(category) {
  let categoryName = "";
  switch (category) {
    case "地理・歴史":
      categoryName = "history";
      break;
    default:
      categoryName = category;
      break;
  }
  return categoryName;
}

