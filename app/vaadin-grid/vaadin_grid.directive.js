System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VaadinGrid;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /*
            * This directive aims to overcome the current issues in integrating vaadin-grid 1.0 to an Angular 2 app.
            * The problems mainly relate to using a <table> element for configuring the grid.
            */
            VaadinGrid = (function () {
                function VaadinGrid(viewContainer) {
                    this.viewContainer = viewContainer;
                    var grid = viewContainer.element.nativeElement;
                    // Configuration <table> might be placed in a wrong container.
                    // Let's move it in the light dom programmatically to fix that.
                    var localDomTable = grid.querySelector("table:not(.vaadin-grid)");
                    if (localDomTable) {
                        Polymer.dom(grid).appendChild(localDomTable);
                    }
                    // vaadin-grid 1.0 doesn't support placing a configuration table dynamically. A hacky workaround needed for now.
                    var _c = grid._grid.c;
                    try {
                        grid._grid.c = null;
                        grid._grid.init(grid, grid._findTableElement(Polymer.dom(grid).children), Polymer.dom(grid.root), grid.$.measureobject);
                    }
                    catch (e) {
                        grid._grid.c = _c;
                    }
                }
                VaadinGrid = __decorate([
                    core_1.Directive({
                        selector: 'vaadin-grid'
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], VaadinGrid);
                return VaadinGrid;
            })();
            exports_1("VaadinGrid", VaadinGrid);
        }
    }
});
//# sourceMappingURL=vaadin_grid.directive.js.map