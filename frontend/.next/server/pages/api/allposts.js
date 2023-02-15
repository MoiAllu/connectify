"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/allposts";
exports.ids = ["pages/api/allposts"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/Utilities/auth.ts":
/*!*******************************!*\
  !*** ./lib/Utilities/auth.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateRoute\": () => (/* binding */ validateRoute),\n/* harmony export */   \"validateToken\": () => (/* binding */ validateToken)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\nconst validateRoute = (handler)=>{\n    return async (req, res)=>{\n        const token = req.cookies.CONNECTIFY_ACCESS_TOKEN;\n        if (token) {\n            let user;\n            try {\n                const { id  } = jwt.verify(token, process.env.JWT_SECRET);\n                user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n                    where: {\n                        id\n                    }\n                });\n                if (!user) {\n                    throw new Error(\"Not real user\");\n                }\n            } catch (error) {\n                res.status(401);\n                res.json({\n                    error: \"Not Authorizied\"\n                });\n                return;\n            }\n            return handler(req, res, user);\n        }\n        res.status(401);\n        res.json({\n            error: \"Not Authorizied\"\n        });\n    };\n};\nconst validateToken = (token)=>{\n    const user = jwt.verify(token, process.env.JWT_SECRET);\n    return user;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvVXRpbGl0aWVzL2F1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3NDO0FBQ3RDLE1BQU1DLEdBQUcsR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBYyxDQUFDO0FBRTVCLE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxPQUFXLEdBQUs7SUFDMUMsT0FBTyxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO1FBQzFELE1BQU1DLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLHVCQUF1QjtRQUNqRCxJQUFJRixLQUFLLEVBQUU7WUFDVCxJQUFJRyxJQUFJO1lBQ1IsSUFBSTtnQkFDRixNQUFNLEVBQUVDLEVBQUUsR0FBRSxHQUFHVixHQUFHLENBQUNXLE1BQU0sQ0FBQ0wsS0FBSyxFQUFFTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDO2dCQUN4REwsSUFBSSxHQUFHLE1BQU1WLG1FQUFzQixDQUFDO29CQUNsQ2lCLEtBQUssRUFBRTt3QkFBRU4sRUFBRTtxQkFBRTtpQkFDZCxDQUFDO2dCQUNGLElBQUksQ0FBQ0QsSUFBSSxFQUFFO29CQUNULE1BQU0sSUFBSVEsS0FBSyxDQUFDLGVBQWUsQ0FBQztpQkFDakM7YUFDRixDQUFDLE9BQU9DLEtBQUssRUFBRTtnQkFDZGIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmZCxHQUFHLENBQUNlLElBQUksQ0FBQztvQkFBRUYsS0FBSyxFQUFFLGlCQUFpQjtpQkFBRSxDQUFDO2dCQUN0QyxPQUFNO2FBQ1A7WUFDRCxPQUFPZixPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFSSxJQUFJLENBQUM7U0FDL0I7UUFFREosR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2ZkLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDO1lBQUVGLEtBQUssRUFBRSxpQkFBaUI7U0FBRSxDQUFDO0tBQ3ZDO0NBQ0Y7QUFFTSxNQUFNRyxhQUFhLEdBQUcsQ0FBQ2YsS0FBUyxHQUFLO0lBQzFDLE1BQU1HLElBQUksR0FBSVQsR0FBRyxDQUFDVyxNQUFNLENBQUNMLEtBQUssRUFBRU0sT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztJQUN2RCxPQUFPTCxJQUFJO0NBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25uZWN0aWZ5LWZlLy4vbGliL1V0aWxpdGllcy9hdXRoLnRzP2YyOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjtcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVSb3V0ZSA9IChoYW5kbGVyOmFueSkgPT4ge1xuICAgIHJldHVybiBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gcmVxLmNvb2tpZXMuQ09OTkVDVElGWV9BQ0NFU1NfVE9LRU47XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgbGV0IHVzZXJcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IGlkIH0gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICAgICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm90IHJlYWwgdXNlcicpXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKVxuICAgICAgICAgIHJlcy5qc29uKHsgZXJyb3I6ICdOb3QgQXV0aG9yaXppZWQnIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMsIHVzZXIpXG4gICAgICB9XG4gIFxuICAgICAgcmVzLnN0YXR1cyg0MDEpXG4gICAgICByZXMuanNvbih7IGVycm9yOiAnTm90IEF1dGhvcml6aWVkJyB9KVxuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGNvbnN0IHZhbGlkYXRlVG9rZW4gPSAodG9rZW46YW55KSA9PiB7XG4gICAgY29uc3QgdXNlciA9ICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKVxuICAgIHJldHVybiB1c2VyXG4gIH0iXSwibmFtZXMiOlsicHJpc21hIiwiand0IiwicmVxdWlyZSIsInZhbGlkYXRlUm91dGUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW4iLCJjb29raWVzIiwiQ09OTkVDVElGWV9BQ0NFU1NfVE9LRU4iLCJ1c2VyIiwiaWQiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsIkVycm9yIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwidmFsaWRhdGVUb2tlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/Utilities/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUM3QyxpRUFBZSxJQUFJQSx3REFBWSxFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25uZWN0aWZ5LWZlLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuZXhwb3J0IGRlZmF1bHQgbmV3IFByaXNtYUNsaWVudCgpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/allposts.ts":
/*!*******************************!*\
  !*** ./pages/api/allposts.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n/* harmony import */ var _lib_Utilities_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/Utilities/auth */ \"(api)/./lib/Utilities/auth.ts\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_Utilities_auth__WEBPACK_IMPORTED_MODULE_1__.validateRoute)(async (req, res, user)=>{\n    const posts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post.findMany({\n        include: {\n            author: true,\n            postlikes: true,\n            comments: {\n                orderBy: {\n                    createdAt: \"asc\"\n                },\n                select: {\n                    id: true,\n                    message: true,\n                    createdAt: true,\n                    updatedAt: true,\n                    postId: true,\n                    parentId: true,\n                    likes: true,\n                    user: {\n                        select: {\n                            id: true,\n                            name: true\n                        }\n                    },\n                    _count: {\n                        select: {\n                            likes: true\n                        }\n                    }\n                }\n            }\n        }\n    });\n    res.json(posts);\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxscG9zdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBQ21CO0FBRXpELGlFQUFlQyxrRUFBYSxDQUFFLE9BQU1DLEdBQU8sRUFBQ0MsR0FBTyxFQUFDQyxJQUFRLEdBQUc7SUFDM0QsTUFBTUMsS0FBSyxHQUFFLE1BQU1MLGlFQUFvQixDQUFDO1FBQ3BDUSxPQUFPLEVBQUM7WUFDSkMsTUFBTSxFQUFDLElBQUk7WUFDWEMsU0FBUyxFQUFDLElBQUk7WUFDZEMsUUFBUSxFQUFDO2dCQUNMQyxPQUFPLEVBQUM7b0JBQ0pDLFNBQVMsRUFBQyxLQUFLO2lCQUNsQjtnQkFDREMsTUFBTSxFQUFDO29CQUNIQyxFQUFFLEVBQUMsSUFBSTtvQkFDUEMsT0FBTyxFQUFDLElBQUk7b0JBQ1pILFNBQVMsRUFBQyxJQUFJO29CQUNkSSxTQUFTLEVBQUMsSUFBSTtvQkFDZEMsTUFBTSxFQUFDLElBQUk7b0JBQ1hDLFFBQVEsRUFBQyxJQUFJO29CQUNiQyxLQUFLLEVBQUMsSUFBSTtvQkFDVmhCLElBQUksRUFBQzt3QkFDRFUsTUFBTSxFQUFDOzRCQUNIQyxFQUFFLEVBQUMsSUFBSTs0QkFDUE0sSUFBSSxFQUFDLElBQUk7eUJBQ1o7cUJBQ0o7b0JBQ0RDLE1BQU0sRUFBRTt3QkFBRVIsTUFBTSxFQUFFOzRCQUFFTSxLQUFLLEVBQUUsSUFBSTt5QkFBRTtxQkFBRTtpQkFDdEM7YUFDSjtTQUNKO0tBQ0osQ0FBQztJQUNGakIsR0FBRyxDQUFDb0IsSUFBSSxDQUFDbEIsS0FBSyxDQUFDO0NBQ2xCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25uZWN0aWZ5LWZlLy4vcGFnZXMvYXBpL2FsbHBvc3RzLnRzPzVkOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgdmFsaWRhdGVSb3V0ZSB9IGZyb20gXCIuLi8uLi9saWIvVXRpbGl0aWVzL2F1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGVSb3V0ZSggYXN5bmMocmVxOmFueSxyZXM6YW55LHVzZXI6YW55KT0+e1xuICAgIGNvbnN0IHBvc3RzPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kTWFueSh7XG4gICAgICAgIGluY2x1ZGU6e1xuICAgICAgICAgICAgYXV0aG9yOnRydWUsXG4gICAgICAgICAgICBwb3N0bGlrZXM6dHJ1ZSxcbiAgICAgICAgICAgIGNvbW1lbnRzOntcbiAgICAgICAgICAgICAgICBvcmRlckJ5OntcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OlwiYXNjXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdDp7XG4gICAgICAgICAgICAgICAgICAgIGlkOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OnRydWUsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRBdDp0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwb3N0SWQ6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGlrZXM6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcjp7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Q6e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBfY291bnQ6IHsgc2VsZWN0OiB7IGxpa2VzOiB0cnVlIH0gfSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXMuanNvbihwb3N0cylcbn0pIl0sIm5hbWVzIjpbInByaXNtYSIsInZhbGlkYXRlUm91dGUiLCJyZXEiLCJyZXMiLCJ1c2VyIiwicG9zdHMiLCJwb3N0IiwiZmluZE1hbnkiLCJpbmNsdWRlIiwiYXV0aG9yIiwicG9zdGxpa2VzIiwiY29tbWVudHMiLCJvcmRlckJ5IiwiY3JlYXRlZEF0Iiwic2VsZWN0IiwiaWQiLCJtZXNzYWdlIiwidXBkYXRlZEF0IiwicG9zdElkIiwicGFyZW50SWQiLCJsaWtlcyIsIm5hbWUiLCJfY291bnQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/allposts.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/allposts.ts"));
module.exports = __webpack_exports__;

})();