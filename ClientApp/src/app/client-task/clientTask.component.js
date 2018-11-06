"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ClientTasksComponent = /** @class */ (function () {
    function ClientTasksComponent(clientService) {
        this.clientService = clientService;
    }
    ClientTasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClientTasks(this.clientId).subscribe(function (data) { return _this.clientTasks = data; });
    };
    __decorate([
        core_1.Input()
    ], ClientTasksComponent.prototype, "clientId", void 0);
    ClientTasksComponent = __decorate([
        core_1.Component({
            selector: 'app-client-tasks',
            templateUrl: './client-tasks.component.html',
            styleUrls: ['./client-tasks.component.css']
        })
    ], ClientTasksComponent);
    return ClientTasksComponent;
}());
exports.ClientTasksComponent = ClientTasksComponent;
//# sourceMappingURL=clientTask.component.js.map