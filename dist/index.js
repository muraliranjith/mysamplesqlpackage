"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLConnector = void 0;
// src/MySQLConnector.ts
var mysql = require("mysql");
var MySQLConnector = /** @class */ (function () {
    function MySQLConnector(config) {
        this.config = config;
        this.connection = mysql.createConnection(config);
    }
    MySQLConnector.prototype.connect = function () {
        this.connection.connect(function (err) {
            if (err) {
                console.error('Error connecting to database:', err);
                return;
            }
            console.log('Connected to database');
        });
    };
    MySQLConnector.prototype.query = function (sql, values) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query(sql, values, function (err, results) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results);
            });
        });
    };
    MySQLConnector.prototype.end = function () {
        this.connection.end();
    };
    return MySQLConnector;
}());
exports.MySQLConnector = MySQLConnector;
