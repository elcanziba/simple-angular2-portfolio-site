"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var project_service_1 = require('../shared/project.service');
var router_1 = require('@angular/router');
var trunc_pipe_1 = require('../shared/trunc.pipe');
var ProjectsComponent = (function () {
    function ProjectsComponent(_projectService, router) {
        this._projectService = _projectService;
        this.router = router;
    }
    ProjectsComponent.prototype.chooseProject = function (project) {
        this.router.navigate(['detail', project.id]);
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/projects/projects.html',
            styleUrls: ['app/projects/projects.css'],
            pipes: [trunc_pipe_1.TruncatePipe]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService, router_1.Router])
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map