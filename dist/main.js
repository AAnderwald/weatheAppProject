/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let searthInfo =document.getElementById(\"searthInfo\");\r\nlet city = document.getElementById(\"cityName\");\r\n\r\n\r\nclass NoSuchCity extends Error\r\n{\r\n  constructor (msg = \"Invalid Request\") \r\n  {\r\n    supper(msg);\r\n  }\r\n}\r\n\r\nsearchInfo.addEventListener(\"submit\", (event) => \r\n{\r\n    event.preventDefault();\r\n\r\n    fetch ( \r\n      `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=898a077439ff34250f55ee728acb2fd6&units=imperial`\r\n    \r\n    )\r\n    \r\n    .then((data) => \r\n    {\r\n      if (data.ok) \r\n      {\r\n        return data.json(); \r\n      }\r\n        else \r\n        {\r\n          throw new NoSuchCity();\r\n        }\r\n    })\r\n\r\n    .then((data) => \r\n    {\r\n      document.getElementById(\"city\").textContent = data.name;   \r\n    \r\n\r\n    \r\n      document.getElementById(\"temp\").textContent = \"Temperate is \" + data.main.temp + \" °F\";\r\n      document.getElementById(\"description\").textContent = \"with \" + data.weather[0].description;\r\n\r\n      document.getElementById(\"temp_min\").textContent = \"Min temp for the day is \" + data.main.temp_min + \"°F\";\r\n      document.getElementById(\"temp_max\").textContent = \"With the highs in the \" + data.main.temp_max + \"°F\";\r\n\r\n      document.getElementById(\"humidity\").textContent = \"Todays humidity is: \" + data.main.humidity + \"%\";\r\n\r\n      document.getElementById(\"wind\").textContent = \"Wind today is: \" + data.wind.speed + \" MPH\";\r\n      \r\n          \r\n    })\r\n    \r\n    .catch ((err) => \r\n    { \r\n      if(err instanceof NoSuchCity); \r\n      {\r\n        document.getElementById(\"city\").textContent = err.msg;   \r\n        document.getElementById(\"temp\").textContent = `Please confirm city name \"${city.value}\".`;\r\n        document.getElementById(\"temp_min\").textContent = \"\";\r\n        document.getElementById(\"temp_max\").textContent = \"\";\r\n        document.getElementById(\"description\").textContent = \"\";\r\n        document.getElementById(\"wind\").textContent = \"\";\r\n        document.getElementById(\"humidity\").textContent = \"\";\r\n      }\r\n      \r\n    });\r\n\r\n});\r\n\r\n\r\n// date and time\r\ndocument.getElementById(\"para1\").innerHTML = formatAMPM();\r\n\r\nfunction formatAMPM() {\r\nvar d = new Date(),\r\n    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),\r\n    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),\r\n    ampm = d.getHours() >= 12 ? 'pm' : 'am',\r\n    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],\r\n    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];\r\nreturn days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://weatheappproject/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;