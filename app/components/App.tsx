import * as React from "react";
import {TableComponent} from "./TableComponent";
var ReactGridLayout = require("react-grid-layout");

export interface AppProps {}
export interface AppState {}

export class App extends React.Component<AppProps, AppState> {
    private layout = [
        { i: "table1", x: 0, y: 0, w: 4, h: 10 },
        { i: "table2", x: 4, y: 0, w: 4, h: 10 },
        { i: "table3", x: 8, y: 0, w: 4, h: 10 },
        { i: "table4", x: 0, y: 0, w: 4, h: 10 },
    ];

    render() {
        return (
            <ReactGridLayout className="layout" layout={this.layout} cols={12} rowHeight={30} width={1200}>
                <div key="table1" style={{overflowY: "auto"}}>
                    <TableComponent />
                </div>
                <div key="table2" style={{overflowY: "auto"}}>
                    <TableComponent />
                </div>
                <div key="table3" style={{overflowY: "auto"}}>
                    <TableComponent />
                </div>
                <div key="table4" style={{overflowY: "auto"}}>
                    <TableComponent />
                </div>


            </ReactGridLayout>
        );
    }
}