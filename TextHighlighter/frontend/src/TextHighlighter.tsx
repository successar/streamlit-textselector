import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { withStyles } from '@material-ui/core/styles';


interface State {
    tokens: string[]
    labels: string[]
    current: string
}

const MyToggleButton = withStyles({
    root: {
        backgroundColor: (props: any) => (props.color),
        "&.Mui-selected": {
            color: "black",
            fontWeight: "bold",
            backgroundColor: (props: any) => (props.color),
        }
    }
})(ToggleButton)

class TokenItem extends React.Component<any, any> {
    render() {
        if (this.props.token != "$break$") {
            const style = { backgroundColor: this.props.color }
            return <span onClick={() => this.props.onClick()} style={style}>{this.props.token}{" "}</span>;
        }
        else {
            return <br />
        }
    }
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class TextHighlighter extends StreamlitComponentBase<State> {
    constructor(props: any) {
        super(props);
        this.state = { tokens: props.args.tokens, labels: props.args.labels, current: "None" };
        this.handleChange = this.handleChange.bind(this);
        this.setCurrent = this.setCurrent.bind(this);
    }

    public render = (): ReactNode => {
        let token_spans = this.state.tokens.map((token, index) => {
            const label = this.state.labels[index];

            return <TokenItem
                color={this.props.args.colors[label]}
                token={token}
                label={label}
                key={index.toString()}
                onClick={() => this.handleChange(index)}
            />
        })

        let label_list = [...Object.keys(this.props.args.colors)];
        return (
            <div style={this.props.theme}>
                <div>
                    <ToggleButtonGroup aria-label="label-classes" value={this.state.current} onChange={this.setCurrent} exclusive size="small">
                        {
                            label_list.map((label, index) => {
                                const color = this.props.args.colors[label];
                                return <MyToggleButton
                                    value={label}
                                    aria-label={label}
                                    key={label}
                                    color={color}>{this.props.args.display_names[label]}</MyToggleButton>
                            }).concat(
                                [<MyToggleButton value="None" aria-label="None" color="white">None</MyToggleButton>]
                            )
                        }
                    </ToggleButtonGroup>
                </div>
                <div>
                    {token_spans}
                </div>
            </div>
        )
    }

    setCurrent(e: any, val: string) {
        if (val) {
            this.setState(
                prevState => {
                    return { current: val, tokens: prevState.tokens, labels: prevState.labels }
                }
            )
        }
    }

    handleChange(item_index: number) {
        if (this.state.current != "None") {
            this.setState(
                (prevState, props) => {
                    const new_labels = prevState.labels.map((label, index) => {
                        return (index == item_index) ? prevState.current : label;
                    });

                    return {
                        tokens: prevState.tokens,
                        labels: new_labels,
                        current: prevState.current
                    }
                },
                () => Streamlit.setComponentValue({ "labels": this.state.labels })
            );
        }
    }
}

export default withStreamlitConnection(TextHighlighter)
