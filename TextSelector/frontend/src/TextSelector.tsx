import {
    Streamlit,
    StreamlitComponentBase,
    withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"


interface State {
    selected: number | null
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class TextSelector extends StreamlitComponentBase<State> {
    constructor(props: any) {
        super(props);
        this.state = { selected: null };
    }

    public render = (): ReactNode => {
        return (
            <div style={this.props.theme}>
                {
                    this.props.args.tokens.map((token: string, index: number) => {
                        let border_color = ("border_colors" in this.props.args) ? this.props.args.border_colors[index]: this.props.args.colors[index];
                        return <span
                            style={{ backgroundColor: this.props.args.colors[index], 
                                     fontWeight: (index == this.state.selected ? "bold" : "normal"),
                                     borderBottom: `3px solid ${border_color}`,
                                     borderTop: `3px solid ${border_color}` }}
                            onClick={() => this.handler(index)}>{token} </span>;
                    })
                }
            </div>
        )
    }

    public handler(index: number) {
        this.setState(
            (prevState) => ({ selected: index }),
            () => Streamlit.setComponentValue(this.state)
        );
    }
}

export default withStreamlitConnection(TextSelector)
