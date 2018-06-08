import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import _ from 'lodash'
import $ from 'jquery'
import 'gridstack/dist/gridstack'
import 'gridstack/dist/gridstack.jQueryUI'
import 'gridstack/dist/gridstack.css';
import 'gridstack/dist/gridstack-extra.css';

class App extends Component {

  componentDidMount() {
    $(function () {
      var options = {
        width: 6,
        float: false,
        removable: '.trash',
        removeTimeout: 100,
        acceptWidgets: '.grid-stack-item'
      };
      $('#grid1').gridstack(options);
      $('#grid2').gridstack(_.defaults({
        float: true
      }, options));
      var items = [
        { x: 0, y: 0, width: 2, height: 2 },
        { x: 3, y: 1, width: 1, height: 2 },
        { x: 4, y: 1, width: 1, height: 1 },
        { x: 2, y: 3, width: 3, height: 1 },
        { x: 2, y: 5, width: 1, height: 1 }
      ];
      $('.grid-stack').each(function () {
        var grid = $(this).data('gridstack');
        _.each(items, function (node) {
          grid.addWidget($('<div><div class="grid-stack-item-content" /></div>'),
            node.x, node.y, node.width, node.height);
        });
      });
      $('.sidebar .grid-stack-item').draggable({
        revert: 'invalid',
        handle: '.grid-stack-item-content',
        scroll: false,
        appendTo: 'body'
      });
    });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1>Two grids demo</h1>

          <div className="row">
            <div className="col-md-3">
              <div className="sidebar">
                <div className="grid-stack-item">
                  <div className="grid-stack-item-content">Drag me</div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="trash">
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="grid-stack grid-stack-6" id="grid1">
              </div>
            </div>
            <div className="col-md-6">
              <div className="grid-stack grid-stack-6" id="grid2">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
