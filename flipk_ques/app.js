let res = [];
let colorFilter = [];
let maxPrice = "Max";
let minPrice = 0;
let brandFilter = [];
let tableDataBackup = [];
let tableData = [];
let brandData = [];
let productListOptions = {
  method: "GET",
  url: "http://demo1853299.mockable.io/products"
  //url: "./jsons/products.json"
};
var filterOptions = {
  method: "GET",
  url: "http://demo1853299.mockable.io/filters"
  //url: "./jsons/filter.json"
}
requestMethod(productListOptions).then(req => {
  res = JSON.parse(req);
  if (typeof res !== "undefined") {
    tableDataBackup = res.products;
    tableData = res.products;
    let grid = "";
    let numberProd = document.getElementById('numberProd');
    numberProd.innerHTML = tableData.length;
    grid = gridItem(tableData);
    document.getElementById("productList").innerHTML = grid;
  }
}).catch(error => {
  console.log(error);
});
requestMethod(filterOptions).then(req => {
  var filterTree = JSON.parse(req);
  filterTree.filters.forEach(elm => {
    if (elm.type === "BRAND") {
      brandData = elm.values;
    }
  });
  var filterHtml = filterItem(filterTree);
  document.querySelector("#filterSection").innerHTML = filterHtml
}).catch(error => {
  console.log(error);
});

document.getElementById("low").addEventListener("click", () => {
  sortItems('low');
  document.getElementById("low").style.color = 'blue';
  document.getElementById("high").style.color = 'black';
});

document.getElementById("high").addEventListener("click", () => {
  sortItems('high');
  document.getElementById("high").style.color = 'blue';
  document.getElementById("low").style.color = 'black';
});

function sortItems(type) {
  if (type === 'low') {
    tableDataBackup.sort(function (a, b) {
      return a.price.final_price - b.price.final_price;
    });
  } else if (type === 'high') {
    tableDataBackup.sort(function (a, b) {
      return b.price.final_price - a.price.final_price;
    });
  }
  filterTableData();
}

document.addEventListener("click", function (e) {
  var target = e.target
  if (target.classList.contains('colorBox')) {
    var colorCode = target.dataset.colorvalue;
    //target.classList.toggle("selected");
    if (target.classList.contains("selected")) {
      target.classList.remove("selected");
      var index = colorFilter.indexOf(colorCode);
      if (index > -1) {
        colorFilter.splice(index, 1);
      }
    } else {
      target.classList.add("selected");
      colorFilter.push(colorCode);
    }
    filterTableData();
  } else if (target.classList.contains('autoSuggestList')) {
    var value = target.dataset.value;
    brandFilter.push(value);
    document.querySelector("#autoSuggestion").innerHTML = "";
    filterTableData()
  }
});

document.addEventListener("keyup", function (e) {
  //console.log(e.target.value);
  if (e.target.value.length > 1) {
    var brandValue = e.target.value.toLowerCase();
    var brandSelected = brandData.filter(elem => {
      return elem.title.toLowerCase().includes(brandValue);
    })
    //console.log(brandSelected);
    document.querySelector("#autoSuggestion").innerHTML = `${brandSelected.map(elm => `<li data-value="${elm.value}" class="autoSuggestList">${elm.title.toLowerCase()}</li>`.trim()).join("")}`
  } else {
    document.querySelector("#autoSuggestion").innerHTML = "";
    if (!brandValue) {
      brandFilter = [];
      filterTableData();
    }

  }

});
document.addEventListener("change", function (e) {
  var target = e.target;
  if (target.id === "minValue") {
    console.log(target.value);
    minPrice = target.value;
  }
  if (target.id === "maxValue") {
    maxPrice = target.value;
  }
  filterTableData();
})

function filterTableData() {
  console.log(colorFilter, maxPrice, minPrice, brandFilter);
  let colors = colorFilter.join(',');
  let brands = brandFilter.join(',').toLowerCase();
  let tableData = [];
  //text - center
  let brandFiltered = [], colorFiltered = [];
  if (brands) {
    tableDataBackup.forEach(element => {
      if (brands.indexOf(element.brand.toLowerCase()) > -1) {
        brandFiltered.push(element);
      }
    });
  } else {
    brandFiltered = tableDataBackup;
  }

  if (colors) {
    brandFiltered.forEach(element => {
      if (colors.indexOf(element.colour.title) > -1) {
        colorFiltered.push(element);
      }
    });
  } else {
    colorFiltered = brandFiltered;
  }

  tableData = colorFiltered.filter(element => {
    return (maxPrice === 0 || maxPrice === "Max") ? element.price.final_price >= minPrice : element.price.final_price >= minPrice && element.price.final_price <= maxPrice
  });

  let grid = gridItem(tableData);
  document.getElementById("productList").innerHTML = grid;

  let numberProd = document.getElementById('numberProd');
  numberProd.innerHTML = tableData.length;

}
function gridItem(products) {
  var row = [];
  if (products.length > 0) {
    products.map((data, index) => {
      row.push(`<div class="productGrid grid" key="${index}" data-brand="${data.brand}" data-price="${data.price.final_price}" data-color="${data.colour.title}">
      <span class="colorIndicator" style="background-color:${data.colour.color}"></span>          
      <div class="imageBox">
                  <img
                    class="responsive-img"
                    src=${data.image}
                    alt=""
                  />
                </div>
                <h3>${data.title}</h3>
                <div class="tool">
                  <span class="rating" cli>${data.rating}*</span>
                </div>
                <div class="tool">
                  <span class="price">&#8377;${data.price.final_price}</span>
                </div>
              </div>`);
    });

    return row.join("");
  } else {
    return `<div class="text-center"><h1>No Products Found</h1></div>`;
  }

}
function filterItem(filterJson) {
  var filterList = [];
  filterList.push(
    `<ul class="filterList">
    ${filterJson.filters.map(item => `<li><span>${item.type}</span>
        
        ${item.type === "PRICE" ?
        `<div><select id="minValue">
          ${item.values.map((filterItem) => `
          <option value='${filterItem["key"] === "Min" ? 0 : filterItem["key"]}'>
          ${filterItem["displayValue"]}
          </option>
        `.trim()).join("")}
          </select> to <select value="${item.values[(item.values.length - 1)]}" id="maxValue">
          ${item.values.map((filterItem, index) => `
          <option value='${filterItem["key"]}' ${index === (item.values.length - 1) ? selected = "selected" : ""}>
          ${filterItem["displayValue"]}
          </option>
        `.trim()).join("")}
          </select><div>`: ""
      }
        ${item.type === "BRAND" ?
        `<div class="brandFilterContainer">
          <input type="text" id="search" placeholder="search" />
          <ul id="autoSuggestion"></ul>
        </div>` : ""
      }
        ${item.type === "COLOUR" ?
        `<div class="colorContainer">
        ${item.values.map((filterItem) => `
        <span style="background-color:${filterItem["color"]}" class="colorBox" title="${filterItem["title"]}" data-colorvalue = "${filterItem["title"]}"></span>
      `.trim()).join("")}
        </div>`: ""
      }
      </li>`.trim()).join("")}
    </ul>`)
  return filterList.join("");
}
function requestMethod(obj) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);
    if (obj.headers) {
      Object.keys(obj.headers).forEach(key => {
        xhr.setRequestHeader(key, obj.headers[key]);
      });
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    obj.body ? xhr.send(obj.body) : xhr.send();
  });
};