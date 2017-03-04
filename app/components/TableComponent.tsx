import * as React from "react";
import * as uuid from "uuid";

export interface NewsProps {}
export interface NewsState {
    data: Data[];
}

interface Data {
    id: string;
    value: number;
}

export class TableComponent extends React.Component<NewsProps, NewsState> {
    constructor(props: NewsProps, context: any) {
        super(props, context);

        this.state = {
            data: []
        };
    }

    componentWillMount() {
        this.setState({
            data: this.generateData()
        })
    }

    render() {
        return (
            <div>
                <h4>Table</h4>
                <table>
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>value</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(x => <tr key={x.id}><td>{x.id}</td><td>{x.value}</td></tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

    private generateData(): Data[] {
        let len = Math.floor(Math.random() * 20);
        let data: Data[] = [];
        for (let i = 0; i < len; ++i) {
            data.push({
                id: uuid.v4(),
                value: Math.random() * 500
            });
        }
        return data;
    }
}