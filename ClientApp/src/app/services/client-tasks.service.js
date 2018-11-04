"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs");
var ClientTasksService = /** @class */ (function () {
    function ClientTasksService(http, baseUrl) {
        this.http = http;
        this.baseUrl = baseUrl;
    }
    ClientTasksService.prototype.getTasks = function () {
        return this.http.get(this.baseUrl + 'api/ClientTasks');
    };
    ClientTasksService.prototype.getClientTasks = function (id) {
        return this.http.get(this.baseUrl + 'api/ClientTasks/GetClientsTasks/' + id);
    };
    ClientTasksService.prototype.deleteClientTask = function (id) {
        return this.http.delete(this.baseUrl + 'api/ClientTasks/' + id);
    };
    ClientTasksService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL'))
    ], ClientTasksService);
    return ClientTasksService;
}());
exports.ClientTasksService = ClientTasksService;
//# sourceMappingURL=client-tasks.service.js.map