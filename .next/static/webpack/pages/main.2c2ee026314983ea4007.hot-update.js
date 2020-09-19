webpackHotUpdate_N_E("pages/main",{

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./src/firebase.js\");\n/* harmony import */ var _components_Quiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Quiz */ \"./src/components/Quiz.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Buttons */ \"./src/components/Buttons.js\");\n\n\nvar _jsxFileName = \"/Users/kenta/Documents/react/brand-quiz-app/src/pages/main.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nconst Main = () => {\n  _s();\n\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    loginEmail: \"\",\n    loginPassword: \"\",\n    email: \"\",\n    password: \"\",\n    isUserEmpty: true,\n    quiz: [],\n    quizLength: 0,\n    count: 0,\n    answer: false,\n    correct: false,\n    answerNumber: 100\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().onAuthStateChanged(function (user) {\n      if (user) {\n        console.log(\"trueです！\");\n        setState(_objectSpread(_objectSpread({}, state), {}, {\n          isUserEmpty: false\n        }));\n      }\n\n      console.log(\"useEffect実行中\");\n    });\n    let list = [];\n    _firebase__WEBPACK_IMPORTED_MODULE_3__[\"db\"].collection(\"quiz\").get().then(querySnapshot => {\n      querySnapshot.forEach(doc => {\n        const new_hash = {\n          text: doc.data().text,\n          choice1: doc.data().choice1,\n          choice2: doc.data().choice2,\n          choice3: doc.data().choice3,\n          choice4: doc.data().choice4,\n          answer: doc.data().answer\n        };\n        list.push(new_hash);\n      });\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        quiz: list,\n        quizLength: quiz.length\n      }));\n    });\n    return () => {\n      console.log('unmounting');\n    };\n  }, []);\n\n  const logout = () => {\n    _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signOut().then(function () {}).catch(function (error) {});\n  };\n\n  const googleLogin = () => {\n    const provider = new _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth.GoogleAuthProvider();\n\n    if (state.isUserEmpty) {\n      console.log(\"googleでログインします\");\n      _firebase__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().signInWithPopup(provider).then(function (result) {}).catch(function (error) {});\n    } else {\n      logout();\n    }\n  };\n\n  const nextQuestion = () => {\n    const count = state.count + 1;\n    setState(_objectSpread(_objectSpread({}, state), {}, {\n      count: count,\n      answer: false\n    }));\n  };\n\n  const returnQuestion = () => {\n    const count = state.count - 1;\n    setState(_objectSpread(_objectSpread({}, state), {}, {\n      count: count\n    }));\n  };\n\n  const showAnswer = (num, answer) => {\n    if (num === answer) {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        answerNumber: num,\n        correct: true,\n        answer: true\n      }));\n    } else {\n      setState(_objectSpread(_objectSpread({}, state), {}, {\n        answerNumber: num,\n        correct: false,\n        answer: true\n      }));\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"jsx-1985524870\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isUserEmpty: state.isUserEmpty,\n    googleLogin: () => googleLogin(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"jsx-1985524870\" + \" \" + \"question mx-auto\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Quiz__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    count: state.count,\n    quiz: state.quiz[state.count],\n    showAnswer: (num, quiz) => showAnswer(num, quiz),\n    answer: state.answer,\n    correct: state.correct,\n    answerNumber: state.answerNumber,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  }), __jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    nextQuestion: (num, quiz) => nextQuestion(),\n    returnQuestion: (num, quiz) => returnQuestion(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 9\n    }\n  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"1985524870\",\n    __self: undefined\n  }, \"body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:url(/images/background.jpg);background-size:cover;-webkit-text-decoration:none;text-decoration:none;}code{font-family:source-code-pro,Menlo,Monaco,Consolas,'Courier New', monospace;}.question{margin-top:20px;padding:20px;width:800px;background-color:white;}a{font-weight:bold;}.choice{padding:10px;border-radius:10px;margin-top:20px;display:block;width:100%;text-align:left;}.question-correct-choice{background-color:#52c41a;color:white;border:#52c41a 4px solid;}.question-wrong-choice{background-color:red;color:white;border:red 4px solid;}.choice p{font-size:20px;font-weight:bold;margin:0;}.answer-discription{border:#52c41a 4px solid;margin:15px 0 15px 0;padding:10px;font-weight:bold;}.button-field{text-align:center;}.quiz-button{margin:40px 80px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZW50YS9Eb2N1bWVudHMvcmVhY3QvYnJhbmQtcXVpei1hcHAvc3JjL3BhZ2VzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkl5QixBQUdzQixBQVlBLEFBSU0sQUFPQyxBQUlKLEFBU1ksQUFNSixBQUtOLEFBS1csQUFNUixBQUlELFNBM0ROLElBeUJRLEVBb0JGLENBL0JKLENBT2hCLEFBdUNBLENBSkEsR0FoQmUsSUFOQSxBQWdCVSxJQW5DVixHQVdJLEFBb0JQLENBTFksSUFOSyxJQW5CSCxBQStCMUIsS0FJZ0IsRUF4QkUsTUFlbEIsS0FVcUIsR0F4QlAsQUFRZCxFQW5CQSxTQVlvQixFQW5CcEIsQ0EyQ0EsYUF2QkEsc0VBN0J1QyxtQ0FDRCxrQ0FDVyw2Q0FDdkIsc0JBQ0Qsa0RBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9rZW50YS9Eb2N1bWVudHMvcmVhY3QvYnJhbmQtcXVpei1hcHAvc3JjL3BhZ2VzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZVwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCBRdWl6IGZyb20gXCIuLi9jb21wb25lbnRzL1F1aXpcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgQnV0dG9ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25zXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIGxvZ2luRW1haWw6IFwiXCIsXG4gICAgbG9naW5QYXNzd29yZDogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgICBpc1VzZXJFbXB0eTogdHJ1ZSxcbiAgICBxdWl6OiBbXSxcbiAgICBxdWl6TGVuZ3RoOiAwLFxuICAgIGNvdW50OiAwLFxuICAgIGFuc3dlcjogZmFsc2UsXG4gICAgY29ycmVjdDogZmFsc2UsXG4gICAgYW5zd2VyTnVtYmVyOiAxMDAsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZChmdW5jdGlvbiAodXNlcikge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cnVl44Gn44GZ77yBXCIpO1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgaXNVc2VyRW1wdHk6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwidXNlRWZmZWN05a6f6KGM5LitXCIpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBkYi5jb2xsZWN0aW9uKFwicXVpelwiKVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld19oYXNoID0ge1xuICAgICAgICAgICAgdGV4dDogZG9jLmRhdGEoKS50ZXh0LFxuICAgICAgICAgICAgY2hvaWNlMTogZG9jLmRhdGEoKS5jaG9pY2UxLFxuICAgICAgICAgICAgY2hvaWNlMjogZG9jLmRhdGEoKS5jaG9pY2UyLFxuICAgICAgICAgICAgY2hvaWNlMzogZG9jLmRhdGEoKS5jaG9pY2UzLFxuICAgICAgICAgICAgY2hvaWNlNDogZG9jLmRhdGEoKS5jaG9pY2U0LFxuICAgICAgICAgICAgYW5zd2VyOiBkb2MuZGF0YSgpLmFuc3dlcixcbiAgICAgICAgICB9O1xuICAgICAgICAgIGxpc3QucHVzaChuZXdfaGFzaCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdGF0ZSh7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgcXVpejogbGlzdCxcbiAgICAgICAgICBxdWl6TGVuZ3RoOiBxdWl6Lmxlbmd0aCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3VubW91bnRpbmcnKVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICBmaXJlYmFzZVxuICAgICAgLmF1dGgoKVxuICAgICAgLnNpZ25PdXQoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge30pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7fSk7XG4gIH07XG5cbiAgY29uc3QgZ29vZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICBpZiAoc3RhdGUuaXNVc2VyRW1wdHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZ29vZ2xl44Gn44Ot44Kw44Kk44Oz44GX44G+44GZXCIpO1xuICAgICAgZmlyZWJhc2VcbiAgICAgICAgLmF1dGgoKVxuICAgICAgICAuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7fSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dvdXQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbmV4dFF1ZXN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvdW50ID0gc3RhdGUuY291bnQgKyAxO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgYW5zd2VyOiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZXR1cm5RdWVzdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHN0YXRlLmNvdW50IC0gMTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGNvdW50OiBjb3VudCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzaG93QW5zd2VyID0gKG51bSwgYW5zd2VyKSA9PiB7XG4gICAgaWYgKG51bSA9PT0gYW5zd2VyKSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhbnN3ZXJOdW1iZXI6IG51bSxcbiAgICAgICAgY29ycmVjdDogdHJ1ZSxcbiAgICAgICAgYW5zd2VyOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFuc3dlck51bWJlcjogbnVtLFxuICAgICAgICBjb3JyZWN0OiBmYWxzZSxcbiAgICAgICAgYW5zd2VyOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXJcbiAgICAgICAgaXNVc2VyRW1wdHk9e3N0YXRlLmlzVXNlckVtcHR5fVxuICAgICAgICBnb29nbGVMb2dpbj17KCkgPT4gZ29vZ2xlTG9naW4oKX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1ZXN0aW9uIG14LWF1dG9cIj5cbiAgICAgICAgPFF1aXpcbiAgICAgICAgICBjb3VudD17c3RhdGUuY291bnR9XG4gICAgICAgICAgcXVpej17c3RhdGUucXVpeltzdGF0ZS5jb3VudF19XG4gICAgICAgICAgc2hvd0Fuc3dlcj17KG51bSwgcXVpeikgPT4gc2hvd0Fuc3dlcihudW0sIHF1aXopfVxuICAgICAgICAgIGFuc3dlcj17c3RhdGUuYW5zd2VyfVxuICAgICAgICAgIGNvcnJlY3Q9e3N0YXRlLmNvcnJlY3R9XG4gICAgICAgICAgYW5zd2VyTnVtYmVyPXtzdGF0ZS5hbnN3ZXJOdW1iZXJ9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPEJ1dHRvbnNcbiAgICAgICAgICBuZXh0UXVlc3Rpb249eyhudW0sIHF1aXopID0+IG5leHRRdWVzdGlvbigpfVxuICAgICAgICAgIHJldHVyblF1ZXN0aW9uPXsobnVtLCBxdWl6KSA9PiByZXR1cm5RdWVzdGlvbigpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcbiAgICAgICAgICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGNvZGUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNvdXJjZS1jb2RlLXBybywgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsICdDb3VyaWVyIE5ldycsXG4gICAgICAgICAgICBtb25vc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5xdWVzdGlvbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgICAgIHdpZHRoOjgwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYXtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jaG9pY2V7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucXVlc3Rpb24tY29ycmVjdC1jaG9pY2V7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1MmM0MWE7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogIzUyYzQxYSA0cHggc29saWQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5xdWVzdGlvbi13cm9uZy1jaG9pY2V7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOnJlZCA0cHggc29saWQ7XG4gICAgICAgIH1cbiAgICAgICAgLmNob2ljZSBwe1xuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIH1cbiAgICAgICAgLmFuc3dlci1kaXNjcmlwdGlvbntcbiAgICAgICAgICAgIGJvcmRlcjogIzUyYzQxYSA0cHggc29saWQ7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uLWZpZWxke1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5xdWl6LWJ1dHRvbntcbiAgICAgICAgICAgIG1hcmdpbjo0MHB4IDgwcHg7XG4gICAgICAgIH0gIFxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdfQ== */\\n/*@ sourceURL=/Users/kenta/Documents/react/brand-quiz-app/src/pages/main.js */\"));\n};\n\n_s(Main, \"5AC3k/ZjXz13hXC91j/IEuMC2Po=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21haW4uanM/ZWE2NyJdLCJuYW1lcyI6WyJNYWluIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwibG9naW5FbWFpbCIsImxvZ2luUGFzc3dvcmQiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNVc2VyRW1wdHkiLCJxdWl6IiwicXVpekxlbmd0aCIsImNvdW50IiwiYW5zd2VyIiwiY29ycmVjdCIsImFuc3dlck51bWJlciIsInVzZUVmZmVjdCIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwibGlzdCIsImRiIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsIm5ld19oYXNoIiwidGV4dCIsImRhdGEiLCJjaG9pY2UxIiwiY2hvaWNlMiIsImNob2ljZTMiLCJjaG9pY2U0IiwicHVzaCIsImxlbmd0aCIsImxvZ291dCIsInNpZ25PdXQiLCJjYXRjaCIsImVycm9yIiwiZ29vZ2xlTG9naW4iLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInJlc3VsdCIsIm5leHRRdWVzdGlvbiIsInJldHVyblF1ZXN0aW9uIiwic2hvd0Fuc3dlciIsIm51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNqQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUM7QUFDakNDLGNBQVUsRUFBRSxFQURxQjtBQUVqQ0MsaUJBQWEsRUFBRSxFQUZrQjtBQUdqQ0MsU0FBSyxFQUFFLEVBSDBCO0FBSWpDQyxZQUFRLEVBQUUsRUFKdUI7QUFLakNDLGVBQVcsRUFBRSxJQUxvQjtBQU1q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QUFBLElBREYsRUFVRSxNQUFDLDJEQUFEO0FBQ0UsZ0JBQVksRUFBRSxDQUFDcUMsR0FBRCxFQUFNMUMsSUFBTixLQUFldUMsWUFBWSxFQUQzQztBQUVFLGtCQUFjLEVBQUUsQ0FBQ0csR0FBRCxFQUFNMUMsSUFBTixLQUFld0MsY0FBYyxFQUYvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FMRjtBQUFBO0FBQUE7QUFBQSxraFJBREY7QUEwRkQsQ0F6TUQ7O0dBQU1qRCxJOztLQUFBQSxJO0FBMk1TQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiLi4vZmlyZWJhc2VcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgUXVpeiBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWl6XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEJ1dHRvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uc1wiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICBsb2dpbkVtYWlsOiBcIlwiLFxuICAgIGxvZ2luUGFzc3dvcmQ6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgaXNVc2VyRW1wdHk6IHRydWUsXG4gICAgcXVpejogW10sXG4gICAgcXVpekxlbmd0aDogMCxcbiAgICBjb3VudDogMCxcbiAgICBhbnN3ZXI6IGZhbHNlLFxuICAgIGNvcnJlY3Q6IGZhbHNlLFxuICAgIGFuc3dlck51bWJlcjogMTAwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZeOBp+OBme+8gVwiKTtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGlzVXNlckVtcHR5OiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcInVzZUVmZmVjdOWun+ihjOS4rVwiKTtcbiAgICB9KTtcblxuICAgIGxldCBsaXN0ID0gW107XG4gICAgZGIuY29sbGVjdGlvbihcInF1aXpcIilcbiAgICAgIC5nZXQoKVxuICAgICAgLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdfaGFzaCA9IHtcbiAgICAgICAgICAgIHRleHQ6IGRvYy5kYXRhKCkudGV4dCxcbiAgICAgICAgICAgIGNob2ljZTE6IGRvYy5kYXRhKCkuY2hvaWNlMSxcbiAgICAgICAgICAgIGNob2ljZTI6IGRvYy5kYXRhKCkuY2hvaWNlMixcbiAgICAgICAgICAgIGNob2ljZTM6IGRvYy5kYXRhKCkuY2hvaWNlMyxcbiAgICAgICAgICAgIGNob2ljZTQ6IGRvYy5kYXRhKCkuY2hvaWNlNCxcbiAgICAgICAgICAgIGFuc3dlcjogZG9jLmRhdGEoKS5hbnN3ZXIsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsaXN0LnB1c2gobmV3X2hhc2gpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHF1aXo6IGxpc3QsXG4gICAgICAgICAgcXVpekxlbmd0aDogcXVpei5sZW5ndGgsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCd1bm1vdW50aW5nJylcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgZmlyZWJhc2VcbiAgICAgIC5hdXRoKClcbiAgICAgIC5zaWduT3V0KClcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHt9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge30pO1xuICB9O1xuXG4gIGNvbnN0IGdvb2dsZUxvZ2luID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgaWYgKHN0YXRlLmlzVXNlckVtcHR5KSB7XG4gICAgICBjb25zb2xlLmxvZyhcImdvb2dsZeOBp+ODreOCsOOCpOODs+OBl+OBvuOBmVwiKTtcbiAgICAgIGZpcmViYXNlXG4gICAgICAgIC5hdXRoKClcbiAgICAgICAgLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge30pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nb3V0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5leHRRdWVzdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBjb3VudCA9IHN0YXRlLmNvdW50ICsgMTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGNvdW50OiBjb3VudCxcbiAgICAgIGFuc3dlcjogZmFsc2UsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmV0dXJuUXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgY291bnQgPSBzdGF0ZS5jb3VudCAtIDE7XG4gICAgc2V0U3RhdGUoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjb3VudDogY291bnQsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2hvd0Fuc3dlciA9IChudW0sIGFuc3dlcikgPT4ge1xuICAgIGlmIChudW0gPT09IGFuc3dlcikge1xuICAgICAgc2V0U3RhdGUoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYW5zd2VyTnVtYmVyOiBudW0sXG4gICAgICAgIGNvcnJlY3Q6IHRydWUsXG4gICAgICAgIGFuc3dlcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTdGF0ZSh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhbnN3ZXJOdW1iZXI6IG51bSxcbiAgICAgICAgY29ycmVjdDogZmFsc2UsXG4gICAgICAgIGFuc3dlcjogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIGlzVXNlckVtcHR5PXtzdGF0ZS5pc1VzZXJFbXB0eX1cbiAgICAgICAgZ29vZ2xlTG9naW49eygpID0+IGdvb2dsZUxvZ2luKCl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbiBteC1hdXRvXCI+XG4gICAgICAgIDxRdWl6XG4gICAgICAgICAgY291bnQ9e3N0YXRlLmNvdW50fVxuICAgICAgICAgIHF1aXo9e3N0YXRlLnF1aXpbc3RhdGUuY291bnRdfVxuICAgICAgICAgIHNob3dBbnN3ZXI9eyhudW0sIHF1aXopID0+IHNob3dBbnN3ZXIobnVtLCBxdWl6KX1cbiAgICAgICAgICBhbnN3ZXI9e3N0YXRlLmFuc3dlcn1cbiAgICAgICAgICBjb3JyZWN0PXtzdGF0ZS5jb3JyZWN0fVxuICAgICAgICAgIGFuc3dlck51bWJlcj17c3RhdGUuYW5zd2VyTnVtYmVyfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxCdXR0b25zXG4gICAgICAgICAgbmV4dFF1ZXN0aW9uPXsobnVtLCBxdWl6KSA9PiBuZXh0UXVlc3Rpb24oKX1cbiAgICAgICAgICByZXR1cm5RdWVzdGlvbj17KG51bSwgcXVpeikgPT4gcmV0dXJuUXVlc3Rpb24oKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsXG4gICAgICAgICAgICAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9pbWFnZXMvYmFja2dyb3VuZC5qcGcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzb3VyY2UtY29kZS1wcm8sIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLFxuICAgICAgICAgICAgbW9ub3NwYWNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucXVlc3Rpb257XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgICAgICB3aWR0aDo4MDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGF7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2hvaWNle1xuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnF1ZXN0aW9uLWNvcnJlY3QtY2hvaWNle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNTJjNDFhO1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBib3JkZXI6ICM1MmM0MWEgNHB4IHNvbGlkO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucXVlc3Rpb24td3JvbmctY2hvaWNle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjpyZWQgNHB4IHNvbGlkO1xuICAgICAgICB9XG4gICAgICAgIC5jaG9pY2UgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICB9XG4gICAgICAgIC5hbnN3ZXItZGlzY3JpcHRpb257XG4gICAgICAgICAgICBib3JkZXI6ICM1MmM0MWEgNHB4IHNvbGlkO1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi1maWVsZHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucXVpei1idXR0b257XG4gICAgICAgICAgICBtYXJnaW46NDBweCA4MHB4O1xuICAgICAgICB9ICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/main.js\n");

/***/ })

})