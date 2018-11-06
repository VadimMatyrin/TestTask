"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
        this.selectedCity = '';
        this.selectedFirstname = '';
    }
    ClientsComponent.prototype.onSelect = function (client) {
        this.selectedClient = client;
    };
    ClientsComponent.prototype.onCitySelect = function (city) {
        this.getData(city, this.selectedFirstname);
        this.selectedCity = city;
        this.selectedClient = null;
    };
    ClientsComponent.prototype.onFirstnameSelect = function (firstname) {
        this.getData(this.selectedCity, firstname);
        this.selectedFirstname = firstname;
        this.selectedClient = null;
    };
    ClientsComponent.prototype.ngOnInit = function () {
        this.getInitData();
    };
    ClientsComponent.prototype.getInitData = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) { return _this.bindInitData(data); });
    };
    ClientsComponent.prototype.getData = function (city, firstname) {
        var _this = this;
        this.clientService.getClients(city, firstname).subscribe(function (data) { return _this.clients = data; });
    };
    ClientsComponent.prototype.bindInitData = function (data) {
        this.clients = data;
        this.clientCities = this.clients.map(function (c) { return c.city; }).filter(function (el, i, a) { return i === a.indexOf(el); });
        this.clientFirstnames = this.clients.map(function (c) { return c.firstName; }).filter(function (el, i, a) { return i === a.indexOf(el); });
    };
    ClientsComponent = __decorate([
        core_1.Component({
            selector: 'app-clients',
            templateUrl: './clients.component.html',
            styleUrls: ['./clients.component.css']
        })
    ], ClientsComponent);
    return ClientsComponent;
}());
exports.ClientsComponent = ClientsComponent;
//# sourceMappingURL=clients.component.js.map