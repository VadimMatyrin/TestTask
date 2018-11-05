"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var client_tasks_service_1 = require("../services/client-tasks.service");
var linqts_1 = require("linqts");
var ClientTasksComponent = /** @class */ (function () {
    function ClientTasksComponent(clientTasksService) {
        this.clientTasksService = clientTasksService;
        this.clientTasks = new linqts_1.List();
    }
    Object.defineProperty(ClientTasksComponent.prototype, "clientId", {
        get: function () {
            return this._clientId;
        },
        set: function (clientId) {
            this._clientId = clientId;
            this.updateData();
        },
        enumerable: true,
        configurable: true
    });
    ClientTasksComponent.prototype.onSelect = function (clientTask) {
        var _this = this;
        this.clientTasksService.deleteClientTask(clientTask.id).subscribe(function (data) { return _this.updateData(); });
    };
    ClientTasksComponent.prototype.updateData = function () {
        var _this = this;
        this.clientTasksService.getClientTasks(this._clientId).subscribe(function (data) { return _this.clientTasks = data; });
    };
    __decorate([
        core_1.Input()
    ], ClientTasksComponent.prototype, "clientId", null);
    ClientTasksComponent = __decorate([
        core_1.Component({
            selector: 'app-client-tasks',
            templateUrl: './client-tasks.component.html',
            styleUrls: ['./client-tasks.component.css'],
            providers: [client_tasks_service_1.ClientTasksService]
        })
    ], ClientTasksComponent);
    return ClientTasksComponent;
}());
exports.ClientTasksComponent = ClientTasksComponent;
//# sourceMappingURL=clientTasks.component.js.map